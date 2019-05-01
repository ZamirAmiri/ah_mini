import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';


export default class HelpPage extends Component{
    constructor(props) {
        super(props);
         this.navigation = this.props.navigation;
 }
render (){
    return(
        <View style={styles.Container}>
        
        </View>


    )
}

}

const styles = StyleSheet.create({
Container:{
flex: 1, 
backgroundColor: 'green',
},



})