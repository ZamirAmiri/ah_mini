import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export class SoloDonate extends Component {
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
                           source={{uri:'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-1245328/2017/05/mike_wilkinson_0.jpg?itok=696xZmVu'}}
                           style={styles.Profile} 
                           />
                            </View>
                            <View style={styles.UserTextContainer}>
                                <Text style={styles.Username}>shairamiri{"\n"}<Text style={styles.Project}>Whale Whatchers</Text></Text>
                                </View>
                            </View>

                            <LinearGradient 
                             start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                           colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
                            style={styles.AmountContainer}>
                                <Text style={styles.Amount}>45</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.BottomPart}>
                        <Text style={styles.Donated}>Donated 55</Text>
                    </View>

                  </TouchableOpacity>


    )}
}


const styles = StyleSheet.create({


Donate: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    height: 180,
    borderRadius: 7,
    elevation: 25,
},

TopPart: {
    alignSelf: 'stretch',
    height: '50%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end'
   

},

Profile: {
    height: 45,
    width: 45,
    borderRadius: 50,
    },

TopPartContent: {
    borderBottomColor: 'rgb(102,102,102)',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '5%',
    justifyContent: 'space-between',

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

UserTextContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%',
},

AmountContainer: {
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 5,
    paddingRight: '5%',
    justifyContent: 'center',
},

Username:{
color: 'rgb(26,26,26)',
fontSize: 17,
fontFamily: 'Poppins-Bold',
},

Project:{
color: 'rgb(128,128,128)',
fontSize: 16,
fontFamily: 'Poppins-SemiBold',
},

Amount:{
color: 'rgb(255,255,255)',
fontSize: 18,
fontFamily: 'Poppins-Bold',
paddingLeft: '8%',
paddingTop: 5,
},

Donated:{
color: 'rgb(77,77,77)',
fontSize: 25,
fontFamily: 'Poppins-Bold',
},


})