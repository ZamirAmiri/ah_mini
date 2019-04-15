/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package db;

/**
 *
 * @author canismajoris
 */
public class DBQueries {

    String getProfile(String id) {
        return "Select * FROM Users Where `id` = "+id;
    }

    String getRecentDonations(String id) {
        return "SELECT Donations.* FROM  Donations WHERE Donations.public = TRUE AND Donations.user IN ("+this.getFriends(id)+") order by date DESC limit 100";
    }

    String getTrendingDonations() {
        return "SELECT SUM(Donations.coins) AS total ,Donations.project AS projectId , Projects.name FROM Donations\n" +
                "INNER JOIN Projects ON Projects.id = Donations.project\n" +
                "WHERE date >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -7 DAY)";
    }

    String addCoins(String id, String coins) {
        return "UPDATE `Users` SET `coins`= coins + "+coins+" WHERE id = " + id;
    }

    String getFoundations() {
        return "SELECT Foundations.*, SUM(Donations.coins) AS helpcoins_generated, COUNT(DISTINCT Donations.user) AS people_donated\n" +
                "FROM Foundations\n" +
                "INNER JOIN Donations ON Donations.project IN \n" +
                "("+this.getFoundaitonProjects("Foundations.id")+")";
    }

    String getProjects() {
        return "SELECT Projects.*,Foundations.name AS foundationName, SUM(Donations.coins) AS helpcoins_generated, COUNT(DISTINCT Donations.user) AS people_donated\n" +
                "FROM Projects\n" +
                "INNER JOIN Donations ON Donations.project = Projects.id\n" +
                "INNER JOIN Foundations ON Foundations.id = Projects.foundation";
    }

    String donate(String userId, String projectId, String groupId, String coins, String pub) {
        return "INSERT INTO `Donations`(`user`, `project`, `groupId`, `coins`, `public`) VALUES ("+userId+","+projectId+","+groupId+","+coins+","+pub+")";
    }

    String getGroup(String groupId) {
        return "SELECT COUNT(DISTINCT Donations.user) as size FROM Donations WHERE Donations.groupId = "+groupId;
    }

    String getTasks() {
        return "SELECT * FROM TASKS";
    }

    String getGlobalImpactDonations() {
        return "SELECT (SELECT COUNT(Donations.id) FROM Donations WHERE Donations.date >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -30 DAY) AND Donations.public = TRUE) as donations_last_thirtydays,\n" +
                "(SELECT COUNT(Donations.id) FROM Donations WHERE Donations.public = TRUE) as total_donations";
    }

    String getLAD() {
        return "SELECT SUM(Donations1.coins) as coins , Users.id ,Users.name FROM Donations AS Donations1 \n" +
                "INNER JOIN Users ON Users.id = (SELECT user FROM Donations WHERE id = Donations1.groupId)\n" +
                "GROUP BY Donations1.groupId ORDER BY coins DESC LIMIT 1";
    }

    String getLD() {
        return "SELECT Donations.coins, Users.id ,Users.name FROM Donations AS Donations\n" +
                "INNER JOIN Users ON Users.id = Donations.user\n" +
                "ORDER BY coins DESC LIMIT 1";
    }

    String getGlobalImpactHelpcoins() {
        return "SELECT (SELECT SUM(Donations.coins) FROM Donations WHERE Donations.date >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -30 DAY)) as donated_last_thritydays,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations) as donated_so_far,\n" +
                "(SELECT SUM(Users.accumulated) FROM Users) as generated";
    }

    String getGlobalImpactUsers() {
        return "SELECT (SELECT COUNT(Users.id) FROM `Users` WHERE Users.joined_on >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -30 DAY)) as users_joined_last_thirtydays,\n" +
                "(SELECT COUNT(Users.id) FROM Users) as total_users";
    }

    String getGlobalImpactPrivateDonations() {
        return "SELECT (SELECT COUNT(Donations.coins) FROM Donations WHERE public = FALSE) as total_donations,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations WHERE public = FALSE) as total_accumulated,\n" +
                "(SELECT SUM(Donations.coins) as total_accumulated FROM Donations WHERE public = FALSE group by Donations.groupId order by total_accumulated DESC LIMIT 1) as largest_accumulated_donation";
    }

    String getGlobalImpactPublicDonations() {
        return "SELECT (SELECT COUNT(Donations.coins) FROM Donations WHERE public = TRUE) as total_donations,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations WHERE public = TRUE) as total_accumulated,\n" +
                "(SELECT SUM(Donations.coins) as total_accumulated FROM Donations WHERE public = TRUE group by Donations.groupId order by total_accumulated DESC LIMIT 1) as largest_accumulated_donation";
    }

    String getPersonalImpactDonations(String id) {
        return "SELECT (SELECT SUM(Donations.coins) FROM Donations WHERE Donations.date >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -30 DAY) AND Donations.user = "+id+") as donated_last_thritydays,\n" +
                "(SELECT COUNT(Donations.coins) FROM Donations WHERE Donations.user = "+id+") as total_donations";
    }

    String getPersonalImpactHelpcoins(String id) {
        return "SELECT (SELECT SUM(Donations.coins) FROM Donations WHERE Donations.user = "+id+") AND Donations.date >= ADDDATE(CURRENT_TIMESTAMP, INTERVAL -30 DAY)) as donated_last_thritydays,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations WHERE Donations.user = "+id+") as donated_so_far,\n" +
                "(SELECT SUM(Users.accumulated) FROM Users WHERE id = "+id+") as generated";
    }

    String getPersonalImpactPrivateDonations(String id) {
        return "SELECT (SELECT COUNT(Donations.coins) FROM Donations WHERE public = FALSE AND Donations.user = "+id+") as total_donations,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations WHERE public = FALSE AND Donations.user = "+id+") as total_accumulated,\n" +
                "(SELECT SUM(Donations.coins) as total_accumulated FROM Donations WHERE user = = "+id+" AND public = FALSE group by Donations.groupId order by total_accumulated DESC LIMIT 1) as largest_accumulated_donation";
    }

    String getPersonalImpactPublicDonations(String id) {
        return "SELECT (SELECT COUNT(Donations.coins) FROM Donations WHERE public = TRUE AND Donations.user = "+id+") as total_donations,\n" +
                "(SELECT SUM(Donations.coins) FROM Donations WHERE public = TRUE AND Donations.user = "+id+") as total_accumulated,\n" +
                "(SELECT SUM(Donations.coins) as total_accumulated FROM Donations WHERE user = "+id+" AND public = TRUE group by Donations.groupId order by total_accumulated DESC LIMIT 1) as largest_accumulated_donation";
    }

    String getFoundationProjects(String foundationId) {
        return "SELECT * FROM Projects WHERE id = "+foundationId;
    }

    String getProjectImpacts(String projectId) {
        return "SELECT * FROM Impacts WHERE project = "+projectId;
    }

    String getProjectPictures(String projectId) {
        return "SELECT * FROM ProjectPictures WHERE project = "+projectId;
    }

    String getGroupCreator(String groupId) {
        return "SELECT Users.id, Users.name, Users.picture, SUM(Donations.coins) as coins FROM Users \n" +
                "INNER JOIN Donations ON Donations.user = Users.id AND Donations.groupId = "+groupId+" \n" +
                "WHERE Users.id IN (SELECT user FROM Donations WHERE id = "+groupId+")";
    }

    String getGroupSupporters(String groupId) {
        return "SELECT Users.id, Users.name, Users.picture, SUM(Donations.coins) as coins FROM Users \n" +
                "INNER JOIN Donations ON Donations.user = Users.id AND Donations.groupId = "+groupId+"\n" +
                "GROUP BY Users.id ORDER BY coins DESC";
    }

    String getNotifications(String userId) {
        return "SELECT * FROM Notification WHERE recipient = "+userId;
    }

    String createNotification(String userId, String groupId, String coins) {
        return "INSERT INTO `Notifications`(`recipient`, `username`, `coins`) VALUES ("+userId+","+groupId+","+coins+")";
    }

    private String getFriends(String userId) {
        return "SELECT Friends.user FROM Friends WHERE Friends.friend = "+userId+
                "UNION" +
                "SELECT Friends.friend FROM Friends WHERE Friends.user = "+userId;
    }

    private String getFoundaitonProjects(String foundationId) {
        return "SELECT * FROM `Projects` WHERE Projects.foundation = "+foundationId;
    }
    
}
