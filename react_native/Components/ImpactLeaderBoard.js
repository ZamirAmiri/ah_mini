import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export class ImpactLeaderBoard extends Component{
    render() {
        return(
            <View style={styles.MainCon}>
                <Text style={styles.Title}>{this.props.title}</Text>
            <View style={styles.Container}>
                <View style={styles.UserCon}>
                <Image 
                           source={{uri:'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-1245328/2017/05/mike_wilkinson_0.jpg?itok=696xZmVu'}}
                           style={styles.Profile}/>
                    <Text style={styles.Username}>{this.props.username}</Text>
                </View>
                <View
                style={styles.AmountContainer}>
                 <Text style={styles.Amount}>{this.props.amount}</Text>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

MainCon:{
paddingBottom: '7%',
},

Title:{
fontSize: 16,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Poppins-Medium',
    paddingBottom: '2%'
},

    Container:{
alignSelf: 'stretch',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},

AmountContainer: {
width: '35%',
height: 55,
borderRadius: 5,
justifyContent: 'flex-end',
alignItems: 'flex-end',
paddingRight: '5%',
paddingBottom: '10%',
backgroundColor: 'white',
elevation: 15,
},

UserCon: {
width: '65%',
flexDirection: 'row',
alignItems: 'center',
},

Profile:{
height: 50,
width: 50,
backgroundColor: 'green',
borderRadius: 700,
},

Username: {
    fontSize: 17,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Poppins-Bold',
    paddingLeft: '5%',
    
    },

Amount:{
fontSize: 20,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-SemiBold',
},
})