import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

export class ImpactStatistic extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <Text style={styles.Title}>{this.props.title}{"\n"}<Text style={styles.Amount}>{this.props.amount}</Text></Text>
                
            </View>

        )
    }
}

const styles = StyleSheet.create({

Container:{
paddingBottom: '1%',
alignSelf: 'stretch',

},

Title:{
 fontSize: 16,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Poppins-Medium',
},

Amount:{
    fontSize: 35,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Poppins-SemiBold',

},

})