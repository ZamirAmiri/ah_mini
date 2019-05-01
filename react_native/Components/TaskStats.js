import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class TaskStats extends Component{
    render(){
        return(
            <View style={styles.Statat}>
                <Icon name={this.props.icon} size={25} color="white"/>
                <View style={styles.TextCon}>
                    <Text style={styles.TextOfStat}>{this.props.title}{"\n"}<Text style={styles.AmountOfStat}>{this.props.amount}</Text></Text>
                    
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
Statat:{
height: '100%',
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
},

IconCon: {
backgroundColor: 'red',
height: 30,
width: 30,
},

TextCon:{
    height: '60%',
    paddingLeft: '10%',
},

TextOfStat:{
fontSize: 10,
color: 'rgba(255,255,255,0.75)',
fontFamily: 'Poppins-SemiBold',
},

AmountOfStat:{
fontSize: 16,
color: 'rgba(255,255,255,1)',
fontFamily: 'Poppins-SemiBold',
},

})