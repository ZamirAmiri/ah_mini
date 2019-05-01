import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,TouchableHighlight,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DonatePage extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;

    }
     
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }

    render() { 
        return(
            <View style={styles.Container}>
            <TouchableOpacity style={{width:"100%", height: '25%'}}  onPress={() => this.closeModal()} />
                <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
                style={styles.DonateContainer}
                >
               <View style={styles.NavContainer}>
                     <Text style={styles.NavText}>donate</Text>
                    </View>
                <View style={styles.ChoiceMainCon}>
                     <Text style={styles.SubTitle}>Visibility</Text>
                    <View style={styles.ChoiceCon}>
                        <TouchableHighlight>
                              <Text style={styles.Chosen}>Public</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text style={styles.Choice}>Private</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                 <View style={styles.ActionContainer}>
                        <View style={styles.CoinContainer}>
                            <View style={styles.Streep}>

                            <View style={styles.BalanceContainer}>
                                <Text style={styles.TitleText}>balance</Text>
                                <View style={styles.BalanceTextContainer}>
                                    <Text style={styles.BalanceText}>241</Text>
                                    <Icon name="eur" color=" rgb(116,193,193)" size={20}/>
                                </View>
                            </View>

                            <View style={styles.BalanceContainer}>
                                <Text style={styles.TitleText}>amount</Text>
                                <View style={styles.AmountTextContainer}>
                                    <Text style={styles.BalanceText}>1</Text>
                                    <Icon name="eur" color=" rgb(116,193,193)" size={20}/>
                                </View>
                            </View>

                        </View>
                        </View>

                        <View style={styles.SliderContainer}>
                            <View style={styles.Slider}>
                            </View>
                            <View style={styles.SliderButton}></View>
                        </View>
                        <View style={{paddingVertical: '10%'}}></View>
                        <TouchableOpacity onPress={() => { this.navigation.navigate('DonationMessage'), this.closeModal() }}style={styles.ButtonContainer}>
                            <Text style={styles.ButtonText}>Send</Text>
                        </TouchableOpacity>
                  </View>
                </LinearGradient>
           


            </View>



        )
    }
}

const styles = StyleSheet.create({
Container: {
flex: 1,
backgroundColor: 'rgba(0,0,0,0.5)',
justifyContent: 'space-between',
},

DonateContainer: {
height: '75%',
alignSelf: 'stretch',
paddingHorizontal: '10%',

},

NavContainer: {
alignSelf: 'stretch',
alignItems: 'center',
paddingTop: '5%',
paddingBottom: '10%'
},

NavText: {
fontSize: 22,
        color: 'rgb(255,255,255)',
        fontFamily: 'Poppins-SemiBold',
},

ActionContainer: {
alignSelf: 'stretch',
paddingBottom: '6%'


},

Streep:{
borderBottomWidth: 1,
borderBottomColor: 'rgba(255,255,255,0.70)',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'flex-end',
width: '100%'


},



CoinContainer: {
flexDirection: 'row',
paddingBottom: '20%',
alignSelf: 'stretch',


},

BalanceTextContainer: {
flexDirection: 'row',
alignItems: 'center',

},
AmountTextContainer: {
    flexDirection: 'row',
alignItems: 'center',
justifyContent: 'flex-end',
    
    },
TitleText: {
 fontSize: 14,
 color: 'rgba(255,255,255,0.75)',
        fontFamily: 'Poppins-SemiBold',
},
BalanceText: {
fontSize: 23,
color: 'rgba(255,255,255,1)',
fontFamily: 'Poppins-SemiBold',
},
Logo: {
width: 22,
height: 22,
backgroundColor: 'white',
paddingLeft: 5,
},

SliderContainer: {
justifyContent: 'center',


},
Slider: {
height: 5,
alignSelf: 'stretch',
backgroundColor:'rgba(255,255,255,0.5)',
borderRadius:100,

},

SliderButton: {
height: 30,
width: 30,
backgroundColor: 'white',
borderRadius: 100,
position: 'absolute',
elevation: 5,

},

ButtonContainer: {
    alignSelf: 'stretch',
backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,

},

ButtonText: {
    paddingVertical: '5%',
    fontSize: 19,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgb(26,26,26)'
},


ChoiceCon: {
flexDirection: 'row',

},



ChoiceMainCon: {
paddingBottom: '5%'
},



Chosen:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    paddingRight: '10%',
},

Choice:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    paddingRight: '10%',

},

SubTitle:{
fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Medium',
},


VisbilitiyDesc:{
fontSize: 15,
color: 'white',
fontFamily: 'Poppins-Regular',
},

})