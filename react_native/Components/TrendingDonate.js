import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export class TrendingDonate extends Component {
    constructor(props) {
        super(props);
         this.navigation = this.props.navigation;
 }


    render() { return(

        <TouchableOpacity onPress={() => { this.navigation.navigate('DonationPage'); }} style={styles.Donate}>
                    <View style={styles.TopPart}>
                        <View style={styles.TopPartContent}>
                        <View style={styles.TopPartRow}>
                            <View style={styles.ProfilePic}>
                            <Image 
                           source={{uri:'https://www.canva.com/learn/wp-content/uploads/2018/11/best-free-stock-photos.jpg'}}
                           style={styles.Profile} 
                           />
                            </View>
                            <View style={styles.UserTextContainer}>
                                <Text style={styles.Username}>Shairamiri{"\n"}<Text style={styles.Project}>Whale whatchers</Text></Text>
                                </View>
                            </View>
                            <View style={styles.AmountContainer}>
                                <Text style={styles.GroupText}>15</Text>
                                <Icon name="users" color="rgb(116,193,193)" size={25}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BottomPart}>
                    <LinearGradient 
                             start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                             colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
                            style={styles.TrendingAmountCon}>
                                <Text style={styles.AmountText}>15.898</Text>
                            </LinearGradient>
                    </View>

                  </TouchableOpacity>


    )}
}

const styles = StyleSheet.create ({


Donate: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    height: 180,
    borderRadius: 7,
    elevation: 25,
    justifyContent: 'center',

},

TopPart: {
    alignSelf: 'stretch',
    height: '50%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
},

TopPartContent: {
    borderBottomColor: 'rgb(102,102,102)',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '5%',
    justifyContent: 'space-between'

},
TopPartRow: {
    flexDirection: 'row',
    alignItems: 'center',
},
BottomPart: {
    alignSelf: 'stretch',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
},

ProfilePic: {
    height: 50,
    width: 50,
},


AmountContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
},

UserTextContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%',
},

GroupIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 500,
   },

   TrendingAmountCon: {
    height: '60%',
    paddingHorizontal: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
   },

   
Username:{
color: 'rgb(26,26,26)',
fontSize: 17,
fontFamily: 'Poppins-Bold',
},

Project:{
color: 'rgb(77,77,77)',
fontSize: 16,
fontFamily: 'Poppins-SemiBold',
},


Donated:{
color: 'rgb(77,77,77)',
fontSize: 18,
fontFamily: 'Poppins-Bold',
},

GroupText:{
    color: 'rgb(77,77,77)',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    paddingRight: 5,
},

AmountText:{
color: 'rgb(255,255,255)',
fontSize: 20,
fontFamily: 'Poppins-Bold',
paddingTop: 5,
},
Profile: {
    height: 45,
    width: 45,
    borderRadius: 50,
    },

})