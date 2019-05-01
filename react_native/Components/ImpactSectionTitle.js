import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class ImpactSectionTitle extends Component{
    render(){
        return(
            <View style={{paddingBottom:'8%'}}>
                <View style={styles.Container}>
                <Text style={styles.Title}>{this.props.title}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
Container:{
    borderBottomColor: 'rgba(255,255,255,0.80)',
    borderBottomWidth: 1,
alignSelf: 'stretch',


},

Title:{
fontSize: 35,
color: 'white',
fontFamily: 'Poppins-SemiBold'

},

})