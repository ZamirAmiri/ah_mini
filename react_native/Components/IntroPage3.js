import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Dimensions ,Image,TextInput} from 'react-native';

export class IntroPage3 extends Component{
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
                    source={{ uri: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMwMTMxfQ&auto=format&fit=crop&w=634&q=80' }}
                    style={styles.Image}
                    />
                    <View style={{paddingHorizontal: '15%'}}>
                         <Text style={styles.Title}>Donations</Text>
                          <Text style={styles.Description}>Donate your helpcoins and we will make sure your project will receive the funds!</Text>
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
