/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package websocket;

import db.DBConnection;
import java.io.IOException;
import javax.json.JsonObject;
import javax.websocket.Session;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Zamir
 */
public class ClientRequestHandler extends Thread{
    private final JsonObject request;
    private final Session session;
    private final DBConnection con;
    
    ClientRequestHandler(JsonObject request, Session session){
        this.request = request;
        this.session = session;
        this.con = new DBConnection();
    }

    @Override
    public void run() {
        //init
        JsonObject reply = null;
        //process
        switch(this.request.getString("action")){
            case "load":
                reply = this.load();
            break;
            case "home":
                reply = this.getHome();
            break;
            case "add_coins":
                reply = this.addCoins();
            break;
            case "impact":
                reply = this.getImpact();
            break;
            case "donate":
                reply = this.donate();
            break;
            case "notifications":
                reply = this.getNotifications();
            break;
            default:
                System.out.println("Session: "+this.session.toString() + "unknown request"+this.request.toString());
            break;
        }
        //reply
        this.sendToSession(reply);
    }

    private JsonObject load() {
        return this.con.load(this.request.getInt("id"));
    }


    private JsonObject getHome() {
        return this.con.getHome(this.request.getInt("id"));
    }

    private JsonObject addCoins() {
        int id = this.request.getInt("id");
        int coins = this.request.getInt("coins");
        return this.con.addCoins(id,coins);
    }

    private JsonObject getImpact() {
       return this.con.getImpact(this.request.getInt("id"));
    }

    private JsonObject donate() {
        boolean pub = this.request.getBoolean("public");
        int groupId  = this.request.getInt("groupId");
        int coins    = this.request.getInt("coins");
        int projectId= this.request.getInt("projectId");
        int userId   = this.request.getInt("userId");
        JsonObject response = this.con.donate(userId,projectId,groupId,coins,pub);
        if(response.getBoolean("result")){
            this.sendNotification(userId,groupId,coins);
        }
        return response;
    }

    private JsonObject getTasks() {
        return null; //Perhaps not required;
    }
    
    private void sendToSession(JsonObject message) {
        try {
                this.session.getBasicRemote().sendText(message.toString());
            } catch (IOException ex) {
                Logger.getLogger(ClientRequestHandler.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void sendNotification(int userId, int groupId, int coins) {
        this.con.createNotificationMessage(userId, groupId,coins);
    }

    private JsonObject getNotifications() {
        return this.con.getNotifications(this.request.getInt("userId"));
    }
}
