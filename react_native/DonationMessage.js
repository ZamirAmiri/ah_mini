import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class DonationMessage extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
      }


    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.ImageCon}>
                <Image 
                style={{height: '100%', width: '100%'}}
                source={{uri:'http://pluspng.com/img-png/flowers-vectors-png-download-flowers-vectors-png-images-transparent-gallery-advertisement-3312.png'}}/>
                </View>
                <Text style={styles.Message}>this is a special message from the stiching oke? and what wil happend if i amke this thig so long?</Text>
                <View style={styles.StreepCon}>
                    <View style={styles.Streep}/>
                    </View>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                 style={styles.ButtonCon}>
                <TouchableOpacity onPress={() => { this.navigation.navigate('Home'); }} style={styles.LinearContent}>
                     <Text style={styles.ButtonText}>Done</Text>
                </TouchableOpacity>

                 </LinearGradient>
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
Container:{
flex: 1,
backgroundColor: 'rgb(242,242,242)',
alignItems: 'center',
justifyContent: 'center',
paddingHorizontal: '10%',
},

ImageCon:{
alignSelf: 'stretch',
justifyContent: 'flex-end',
height: '30%',
alignItems: 'center',
paddingBottom: '5%',
},

Message:{
fontSize: 25,
color: 'rgb(26,26,26)',
fontFamily: 'Poppins-Medium',
paddingVertical: '5%',
textAlign: 'center',


},


ButtonCon:{
alignSelf: 'stretch',
borderRadius: 500,
elevation: 2,
},

Streep:{
borderBottomColor: 'rgb(128,128,128)',
borderBottomWidth: 1,

},

StreepCon:{
    paddingBottom: '10%',
    alignSelf: 'stretch',
},


LinearContent:{
justifyContent: 'center',
alignItems: 'center',
elevation: 5,
},



ButtonText:{
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
color: 'white',
paddingVertical: '7%'
},

})