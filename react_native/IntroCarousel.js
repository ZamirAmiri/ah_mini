import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IntroPage1, IntroPage2, IntroPage3 } from './Components';



export default class IntroCarousel extends Component{
    render(){
        
        return(
            <ScrollView
             horizontal={true}
             pagingEnabled={true}
             showsHorizontalScrollIndicator={true}
             
             >

                <IntroPage1/>
                <IntroPage2/>
                <IntroPage3/>


            </ScrollView>

        )
    }
}

const styles= StyleSheet.create({


})