import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Dimensions ,Image,TextInput} from 'react-native';

export class IntroPage2 extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <View style={{flex: 1,
                backgroundColor: 'rgb(242,242,242)',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: screenWidth,}}>

                <Image 
                    source={{uri:'http://pluspng.com/img-png/flowers-vectors-png-download-flowers-vectors-png-images-transparent-gallery-advertisement-3312.png'}}
                    style={styles.Image}
                    />
                    <View style={{paddingHorizontal: '15%'}}>
                         <Text style={styles.Title}>Map & Projects</Text>
                          <Text style={styles.Description}>Open the global map and search all over the world. Find a project that you would like to support.</Text>
                 </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({


Image:{
width: '100%',
height: '55%',
},

Title:{
fontSize: 25,
fontFamily: 'Poppins-SemiBold',
color: 'rgb(26,26,26)',
paddingTop: '15%',
paddingBottom: '5%',
textAlign: 'center',
},

Description:{
fontSize: 15,
fontFamily: 'Poppins-Medium',
color: 'rgb(77,77,77)',
textAlign: 'center',
},

})
