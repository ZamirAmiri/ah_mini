import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class DonatePageDonation extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.UserCon}>
                <Image 
                           source={{uri:'https://www.canva.com/learn/wp-content/uploads/2018/11/best-free-stock-photos.jpg'}}
                           style={styles.Profile}/>
                    <Text style={styles.Username}>shairamiri</Text>
                </View>
                <LinearGradient 
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                style={styles.AmountContainer}>
                 <Text style={styles.Amount}>9</Text>
                </LinearGradient>
            </View>


        )
    }
}

const styles = StyleSheet.create({
Container: {
alignSelf: 'stretch',
height: 70,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},

AmountContainer: {
width: '25%',
height: '70%',
borderRadius: 5,
justifyContent: 'center',
alignItems: 'center'
},

UserCon: {
width: '75%',
height: '80%',
flexDirection: 'row',
alignItems: 'center',
},

Profile:{
height: 50,
width: 50,
backgroundColor: 'green',
borderRadius: 700,
},
Username:{
    color: 'rgb(26,26,26)',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    paddingLeft: '5%',
    paddingTop: 5,
    },

Amount:{
color: 'rgb(255,255,255)',
fontSize: 17,
fontFamily: 'Poppins-Bold',
paddingTop: 5,
},

})