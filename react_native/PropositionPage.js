import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class PropositionPage extends Component{
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }

    render(){
        return(
            <TouchableOpacity onPress={() => this.closeModal()} style={styles.ButtonContainer} style={styles.Container}>
                <LinearGradient
                        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                       colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                        style={styles.Content}>
                           <View style={styles.ImageCon}>
                         <Image 
                          style={{height: '75%', width: '75%'}}
                           source={{uri:'http://pluspng.com/img-png/flowers-vectors-png-download-flowers-vectors-png-images-transparent-gallery-advertisement-3312.png'}}/>
                           </View>

                           <View style={styles.TitleCon}>
                               <Text style={styles.Center}><Text style={styles.Title}>1 Maaltijd{"\n"}</Text><Text style={styles.Amount}>44 helpcoins</Text></Text>
                               
                           </View>

                           <View style={styles.TextCon}>
                               <Text style={styles.Description}>this si them ian content all about this proposition and what it does where it be comes real and where the realnes issnt really relevant for it </Text>
                           </View>
                        </LinearGradient>

            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create ({

Container:{
flex: 1, 
backgroundColor: 'rgba(0,0,0,0.5)',
alignItems: 'center',
justifyContent: 'center',
},

Content:{
width: '80%',
position: 'absolute',
elevation: 30,
borderRadius: 15,

},

ImageCon:{
height: 230,
alignSelf: 'stretch',
alignItems: 'center',
justifyContent: 'flex-end',
paddingBottom: '8%',
},

TitleCon: {
alignSelf: 'stretch',
alignItems: 'center',
justifyContent: 'center',
paddingBottom: '8%',

},

TextCon:{
alignSelf: 'stretch',
alignItems: 'center',
justifyContent: 'center',
paddingBottom: '15%',

},

Description:{
textAlign: 'center',
paddingHorizontal: '10%',
 fontSize: 14,
    color: 'rgb(255,255,255)',
    fontFamily: 'Poppins-Regular',

},

Center:{
    textAlign: 'center',

},

Title: {
    fontSize: 28,
    color: 'rgb(255,255,255)',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    },
Amount:{
 fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    
},



})