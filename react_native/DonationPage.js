import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DonatePageDonation} from './Components';
import DonatePage from './DonatePage';

export default class DonationPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            isModalVisible: false,
        };
        this.navigation = props.navigation;
      }
    
      changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool});
    }

    


    render(){ return(
        <View style={styles.Container}>
        <Modal
                animationType="slide"
                 transparent={true}
                 visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}>
                     <DonatePage navigation={this.navigation} changeModalVisibility={this.changeModalVisibility}/>
                 </Modal>
        <View style={styles.AmountMainCon}>
            <LinearGradient
             start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                 style={styles.AmountCon}>
            <Text style={styles.Amount}>12.345</Text>
            </LinearGradient>
        </View>
        <View style={styles.ProfileMainCon}>
            <Image 
                source={{uri:'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-1245328/2017/05/mike_wilkinson_0.jpg?itok=696xZmVu'}}
                style={styles.ProfileCon}/>
            <Text style={styles.Username}>Shairamiri</Text>
        </View>
        <View style={styles.ButtonMainCon}>
            <TouchableOpacity onPress={() => { this.navigation.navigate('ProjectPage'); }} style={styles.ProjectButton}>
                <Text style={styles.ButtonTextBlack}>Whale Watchers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={{width: '40%', height: '100%'}}>
            <LinearGradient
             start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                  style={styles.DonateButton}>
                <Text style={styles.ButtonText}>Donate</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
        <View style={styles.SupportTextCon}>
            <Text style={styles.SupportText}>Supporters</Text>
        </View>
        <ScrollView style={styles.DonationMainCon}>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>
        <DonatePageDonation></DonatePageDonation>


        </ScrollView>


        </View>
    )}
}

const styles = StyleSheet.create({
Container: {
flex: 1,
paddingHorizontal: '6%',
overflow: 'visible',
},

AmountMainCon: {
alignSelf: 'stretch',
height: '15%',
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'flex-start',
paddingTop:'5%',


},

ProfileMainCon:{
    alignSelf: 'stretch',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 5,
    borderBottomColor: 'rgb(128,128,128)',
    borderBottomWidth: 1,
},

ButtonMainCon: {
    alignSelf: 'stretch',
    height: '14%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '1%'

},

DonationMainCon: {
    alignSelf: 'stretch',
    height: '54%',
},

SupportTextCon:{
    height: '7%',
    alignSelf: 'stretch',
    borderBottomColor: 'rgb(128,128,128)',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
},

AmountCon: {
    height: '75%',
    width: '35%',
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '5%',
},

ProfileCon: {
height: 70,
width: 70,
borderRadius: 700,
paddingBottom: 5,
},

Username: {
fontSize: 23,
color: 'rgb(26,26,26)',
fontFamily: 'Poppins-Bold',
paddingLeft: '6%',

},

ProjectButton: {
width: '57%',
height: '100%',
backgroundColor: 'white',
elevation: 2,
borderRadius: 5,
justifyContent: 'center',
alignItems: 'center',

},

DonateButton: {
width: '100%',
height: '100%',
borderRadius: 7,
justifyContent: 'center',
alignItems: 'center',
elevation: 2,

},

Amount:{
color: 'rgb(255,255,255)',
fontSize: 23,
fontFamily: 'Poppins-Bold',
paddingTop: 5,
},

ButtonText:{
color: 'rgb(255,255,255)',
fontSize: 18,
fontFamily: 'Poppins-Bold',
paddingTop: 5,
},
ButtonTextBlack:{
    color: 'rgb(26,26,26)',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
    },

SupportText:{
    color: 'rgb(26,26,26)',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
},

})