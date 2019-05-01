import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';

export class OrganisationTile extends Component { 
    constructor(props) {
        super(props);
         this.navigation = this.props.navigation;
 }

    render(){
        return(
            <TouchableOpacity onPress={() => { this.navigation.navigate('OrganisationPage'); }} style={styles.Container}>
                <View style={styles.Icon}>
                <Image 
                style={{height: '100%', width: '100%'}}
                source={{uri:'http://pluspng.com/img-png/flowers-vectors-png-download-flowers-vectors-png-images-transparent-gallery-advertisement-3312.png'}}/>
                </View>
                <Text style={styles.TextText}>{this.props.title}</Text>

            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({

Container:{
    height: 75,
width: 220,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'white',
elevation: 5,
borderRadius: 5,
},

Icon:{
width: 50,
height: 50,
justifyContent: 'center',
alignItems: 'center'
},

TextText:{
    fontSize: 16,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-Bold',
    paddingLeft: '10%',
},

})