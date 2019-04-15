/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package db;

import java.sql.*;
import javax.json.JsonArrayBuilder;
//import javax.json.JsonArray;
//import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonValue;
import javax.json.spi.JsonProvider;
//import java.util.logging.Level;
//import java.util.logging.Logger;

/**
 *
 * @author canismajoris
 */
public class DBConnection {
    private final String host = "jdbc:mysql://localhost:3306/ah_mini";
    private final String uName = "root";
    private final String uPass = "";
    private final String jdbc = "com.mysql.jdbc.Driver";
    private final JsonProvider provider;
    private final DBQueries queries;
    
    public DBConnection(){
        this.provider = JsonProvider.provider();
        this.queries = new DBQueries();
    }
    public JsonObject load(int id) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("action", "load");
        response.add("Profile", this.getProfile(id));
        response.add("Home", this.getHome(id));
        response.add("Impact", this.getImpact(id));
        response.add("Foundations", this.getFoundations());
        response.add("Projects",this.getProjects());
        response.add("Tasks", this.getTasks());
        return response.build();
    }
    
    private JsonObject getProfile(int id){
        String query = this.queries.getProfile(String.valueOf(id));
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if (result.next()) {
                    response.add("id", result.getInt("id"));
                    response.add("name", result.getString("name"));
                    response.add("coins", result.getInt("coins"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    public JsonObject getHome(int id) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("donations", this.getRecentDonations(id));
        response.add("trending", this.getTrendingDonations());
        return response.build();
    }

    public JsonObject addCoins(int id, int coins) {
        String query = this.queries.addCoins(String.valueOf(id),String.valueOf(coins));
        if(this.quickInsert(query)){
            return this.succes();
        }
        return this.failure();
    }
    
    private JsonObject succes(){
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("action", "result");
        response.add("result", "succes");
        return response.build();
    }
    private JsonObject failure(){
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("action", "result");
        response.add("result", "failure");
        return response.build();
    }

    public JsonObject getImpact(int id) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("Global",this.getGlobalImpact());
        response.add("Personal",this.getPersonalImpact(id));
        return response.build();
    }
    

    private JsonValue getRecentDonations(int id) {
        String query = this.queries.getRecentDonations(String.valueOf(id));
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        JsonObjectBuilder objBuilder;
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while (result.next()) {
                    objBuilder = this.provider.createObjectBuilder();
                    objBuilder.add("id",result.getInt("id"));
                    objBuilder.add("projectId", result.getInt("projectId"));
                    objBuilder.add("projectName", result.getString("projectName"));
                    objBuilder.add("group", this.getGroup(result.getInt("groupId")));
                    objBuilder.add("total_coins", result.getInt("total_coins"));
                    objBuilder.add("donated_coins", result.getInt("donated_coins"));
                    objBuilder.add("supporterName", result.getString("supporterName"));
                    objBuilder.add("supporterId", result.getInt("supporterId"));
                    response.add(objBuilder);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getTrendingDonations() {
        String query = this.queries.getTrendingDonations();
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        JsonObjectBuilder objBuilder;
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while (result.next()) {
                    objBuilder = this.provider.createObjectBuilder();
                    objBuilder.add("projectId", result.getInt("projectId"));
                    objBuilder.add("projectName", result.getString("projectName"));
                    objBuilder.add("group", this.getGroup(result.getInt("groupId")));
                    response.add(objBuilder);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }


    private JsonValue getGlobalImpact() {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("Donations", this.getGlobalImpactDonations());
        response.add("Helpcoins", this.getGlobalOrPersonalImpactHelpcoins(this.queries.getGlobalImpactHelpcoins()));
        response.add("Users", this.getGlobalOrPersonalImpactUsers());
        response.add("Public_Donations", this.getGlobalOrPersonalImpactPrivateOrPublicDonations(this.queries.getGlobalImpactPrivateDonations()));
        response.add("Private_Donations", this.getGlobalOrPersonalImpactPrivateOrPublicDonations(this.queries.getGlobalImpactPublicDonations()));
        return response.build();
    }

    private JsonValue getPersonalImpact(int id) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("Donations",           this.getPersonalImpactDonations(id));
        response.add("Helpcoins", this.getGlobalOrPersonalImpactHelpcoins(this.queries.getPersonalImpactHelpcoins(String.valueOf(id))));
        response.add("Public_Donations", this.getGlobalOrPersonalImpactPrivateOrPublicDonations(this.queries.getPersonalImpactPrivateDonations(String.valueOf(id))));
        response.add("Private_Donations", this.getGlobalOrPersonalImpactPrivateOrPublicDonations(this.queries.getPersonalImpactPublicDonations(String.valueOf(id))));
        return response.build();
    }

    private boolean quickInsert(String query) {
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                stmt.executeUpdate(query);
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e);
            return false;
        }
        return true;
    }
    private JsonValue getFoundations(){
        String query = this.queries.getFoundations();
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        JsonObjectBuilder objBuilder;
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while (result.next()) {
                    objBuilder = this.provider.createObjectBuilder();
                    objBuilder.add("id",                    result.getInt("id"));
                    objBuilder.add("name",                  result.getString("name"));
                    objBuilder.add("location",              this.createLocation(result.getString("gpsX"),result.getString("gpsY")));
                    objBuilder.add("people_donated",        result.getString("people_donated"));
                    objBuilder.add("helpcoins_generated",   result.getInt("helpcoins_generated"));
                    objBuilder.add("info",                  result.getString("info"));
                    objBuilder.add("Projects",              this.getFoundationProjects(result.getInt("id")));
                    objBuilder.add("content",               result.getString("content"));
                    objBuilder.add("website",               result.getString("website"));
                    objBuilder.add("logo",                  result.getString("logo"));
                    objBuilder.add("picture",               result.getString("picture"));
                    objBuilder.add("reward",                result.getString("reward"));
                    response.add(objBuilder);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getProjects() {
        String query = this.queries.getProjects();
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        JsonObjectBuilder objBuilder;
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while (result.next()) {
                    objBuilder = this.provider.createObjectBuilder();
                    objBuilder.add("id",            result.getInt("id"));
                    objBuilder.add("name",          result.getString("name"));
                    objBuilder.add("location",      this.createLocation(result.getString("gpsX"),result.getString("gpsY")));
                    objBuilder.add("people_donated",  result.getString("people_donated"));
                    objBuilder.add("helpcoins_generated",result.getInt("helpcoins_generated"));
                    objBuilder.add("foundationId", result.getInt("foundation"));
                    objBuilder.add("foundationName", result.getString("foundationName"));
                    objBuilder.add("info",          result.getString("info"));
                    objBuilder.add("Impact",        this.getProjectImpacts(result.getInt("id")));
                    objBuilder.add("content",       result.getString("content"));
                    objBuilder.add("picture",       this.getProjectPictures(result.getInt("id")));
                    response.add(objBuilder);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }
    
    public JsonObject donate(int userId, int projectId, int groupId, int coins, boolean pub) {///Later naar kijken
        String query = this.queries.donate(String.valueOf(userId),String.valueOf(projectId),String.valueOf(groupId),String.valueOf(coins),String.valueOf(pub));
        if(this.quickInsert(query)){
            //Send notificaiton to the user ?????: Yes
            return this.succes();
        }
        return this.failure();
    }

    private JsonObject getGroup(int groupId) {
        String query = this.queries.getGroup(String.valueOf(groupId));
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if (result.next()) {
                    response.add("size", result.getInt("size"));
                    response.add("creator", this.getGroupCreator(result.getInt("groupId")));
                    response.add("supporters", this.getGroupSupporters(result.getInt("groupId")));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }


    private JsonValue getTasks() {
        String query = this.queries.getTasks();
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while (result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("id", result.getInt("id"));
                    obj.add("title", result.getString("title"));
                    obj.add("time", result.getString("time"));
                    obj.add("info", result.getString("info"));
                    obj.add("uri", result.getString("uri"));
                    obj.add("coins", result.getInt("coins"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }
    private JsonValue getGlobalImpactDonations() {
        String query = this.queries.getGlobalImpactDonations();
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("donations_last_thirtydays", result.getInt("donations_last_thirtydays"));
                    response.add("total_donations", result.getInt("total_donations"));
                    response.add("largest_accumulated_donation", this.getGlobalImpactDonationsLargest(this.queries.getLAD()));
                    response.add("largest_donation", this.getGlobalImpactDonationsLargest(this.queries.getLD()));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getGlobalImpactDonationsLargest(String query){
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("id",result.getInt("id"));
                    response.add("name", result.getString("name"));
                    response.add("coins", result.getInt("coins"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }
    private JsonValue getGlobalOrPersonalImpactHelpcoins(String query) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("donated_last_thritydays",result.getInt("donated_last_thritydays"));
                    response.add("donated_so_far", result.getInt("donated_so_far"));
                    response.add("generated", result.getInt("generated"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }
    
    private JsonValue getGlobalOrPersonalImpactUsers() {
        String query = this.queries.getGlobalImpactUsers();
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("users_joined_last_thirtydays",result.getInt("users_joined_last_thirtydays"));
                    response.add("total_users", result.getInt("total_users"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getGlobalOrPersonalImpactPrivateOrPublicDonations(String query) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("total_donations",result.getInt("total_donations"));
                    response.add("largest_accumulated_donation", result.getInt("largest_accumulated_donation"));
                    response.add("total_accumulated", result.getInt("total_accumulated"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getPersonalImpactDonations(int id) {
        String query = this.queries.getPersonalImpactDonations(String.valueOf(id));
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("donations_last_thirtydays",result.getInt("donations_last_thirtydays"));
                    response.add("total_donations", result.getInt("total_donations"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }


    private JsonValue createLocation(String gpsX, String gpsY) {
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        response.add("gpsX", gpsX);
        response.add("gpsY", gpsY);
        return response.build();
    }

    private JsonValue getFoundationProjects(int id) {
        String query = this.queries.getFoundationProjects(String.valueOf(id));
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while(result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("id",result.getInt("id"));
                    obj.add("name", result.getString("name"));
                    obj.add("picture", result.getString("picture"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getProjectImpacts(int id) {
        String query = this.queries.getProjectImpacts(String.valueOf(id));
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while(result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("icon",result.getString("icon"));
                    obj.add("target", result.getString("target"));
                    obj.add("reward", result.getString("reward"));
                    obj.add("info", result.getString("info"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getProjectPictures(int id) {
        String query = this.queries.getProjectPictures(String.valueOf(id));
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while(result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("uri",result.getString("uri"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }


    private JsonObject getGroupCreator(int id) {
        String query = this.queries.getGroupCreator(String.valueOf(id));
        JsonObjectBuilder response = this.provider.createObjectBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                if(result.next()) {
                    response.add("id",result.getInt("id"));
                    response.add("name", result.getString("name"));
                    response.add("picture", result.getString("picture"));
                    response.add("coins", result.getInt("coins"));
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    private JsonValue getGroupSupporters(int id) {
        String query = this.queries.getGroupSupporters(String.valueOf(id));
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {

                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while(result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("id",result.getInt("id"));
                    obj.add("name", result.getString("name"));
                    obj.add("picture", result.getString("picture"));
                    obj.add("coins", result.getInt("coins"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        return response.build();
    }

    public void createNotificationMessage(int userId, int groupId, int coins) {
        String query = this.queries.createNotification(String.valueOf(userId), String.valueOf(groupId), String.valueOf(coins));
        this.quickInsert(query);
    }

    public JsonObject getNotifications(int userId) {
        String query = this.queries.getNotifications(String.valueOf(userId));
        JsonObjectBuilder obj;
        JsonArrayBuilder response = this.provider.createArrayBuilder();
        ResultSet result;
        try {
            Class.forName(jdbc);
            try (Connection con = DriverManager.getConnection(host, uName, uPass)) {
                Statement stmt = con.createStatement();
                result = stmt.executeQuery(query);
                while(result.next()) {
                    obj = this.provider.createObjectBuilder();
                    obj.add("recipient", result.getString("date"));
                    obj.add("userName", result.getString("username"));
                    obj.add("coins", result.getInt("coins"));
                    obj.add("date", result.getString("date"));
                    response.add(obj);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e.getMessage());
        }
        JsonObjectBuilder message = this.provider.createObjectBuilder();
        message.add("messages", response);
        message.add("action","notifications");
        return message.build();
    }
}
