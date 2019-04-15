/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package websocket;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.io.StringReader;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.enterprise.context.ApplicationScoped;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author zamir
 */
@ApplicationScoped
@ServerEndpoint("/actions")
public class ClientSession {
    Calendar cal = Calendar.getInstance();
    SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss:ms");
    @OnOpen
        public void open(Session session) {
            System.out.println("New connection: "+ session.getId());
    }

    @OnClose
        public void close(Session session) {
            System.out.println("Server "+cal.getTime().toString()+": closed session "+session.getId());
    }

    @OnError
        public void onError(Throwable error) {
            Logger.getLogger(ClientSession.class.getName()).log(Level.SEVERE, null, error);
    }

    @OnMessage
        public void handleMessage(String message, Session session) {
            System.out.println("Message found");
            try (JsonReader reader = Json.createReader(new StringReader(message))) {
            JsonObject request = reader.readObject();
            Thread handler = new ClientRequestHandler(request,session);
            handler.start();
        }
    }
}