import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


export class StatisticTile extends Component{
    render(){
        return(
            <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
            style={styles.Container}
            >
            <View style={styles.TextCon}>
                <Text style={styles.TextText}>People{"\n"}Donated</Text>
                <Text style={styles.Amount}>15,8K</Text>
            </View>
            <Icon name={this.props.icon} color=" rgb(255,255,255)" size={25}/>

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
Container:{
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingHorizontal: '2%',
borderRadius: 5,
elevation: 5,
height: 70,
width: 130,
},

Icon:{
    width: 25,
    height: 25,
    backgroundColor: 'white',
},

TextCon:{


},

TextText:{
    fontSize: 10,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Poppins-Medium',
},
Amount:{
    fontSize: 18,
    color: 'rgb(255,255,255)',
    fontFamily: 'Poppins-SemiBold',
},




})