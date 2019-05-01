import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';



export class TimeLine extends Component {
    render() { return(

        <View style={styles.Container}>
                <TouchableOpacity style={styles.PartCon}>
                 <Icon name="user" color="rgb(116,193,193)" size={30}/>
                     <Text style={styles.Chosen}>Friends</Text>
                  </TouchableOpacity>
                <TouchableOpacity style={styles.PartCon}>
                 <Icon name="rocket" color="rgb(200,200,200)" size={30}/>
                     <Text style={styles.Choice}>Trending</Text>
                 </TouchableOpacity>

        </View>


    )}
}


const styles = StyleSheet.create({


Container: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    height: 75,
    borderRadius: 7,
    elevation: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},

Part: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},


Chosen:{
    color: 'rgb(116,193,193)',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
},

Choice:{
    fontSize: 12,
    color: 'rgb(200,200,200)',
    fontFamily: 'Poppins-Regular',

},

PartCon: {
justifyContent: 'center',
alignItems: 'center',
},


})