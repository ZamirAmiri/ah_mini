import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImpactSectionTitle, ImpactStatistic, ImpactLeaderBoard } from './Components';

export default class ImpactPageUser extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
      }
    render(){
        return(
            <ScrollView style={styles.Container}>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                 style={[styles.TopLinearContent ]}
                 >
                <View style={{alignItems: 'center', }}>
                     <Text style={styles.NavText}>Impact</Text>
                 </View>

                 <View style={styles.ChoiceCon}>
                 <TouchableHighlight onPress={() => { this.navigation.navigate('ImpactPage') }}>
                     <Text style={styles.Choice}>Global</Text>
                     </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.navigation.navigate('ImpactPageUser')}}>
                     <Text style={styles.Chosen}>Personal</Text>
                     </TouchableHighlight>
                     
                     
                 </View>
                    <ImpactSectionTitle title='Donations' />
                    <ImpactStatistic title='Donations last 30 days' amount='32' />
                    <ImpactStatistic title='Total donationss' amount='432' />

                </LinearGradient>
                <View>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(232,163,5,1)', 'rgba(231,76,34,1)', 'rgba(195,60,57,1)']}
                 style={styles.LinearContent}
                 >
                    <ImpactSectionTitle title='HelpCoins'/>
                     <ImpactStatistic title='Donated last 30 days' amount='587' />
                     <ImpactStatistic title='Total donated' amount='4.432' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                       <ImpactStatistic title='Generated' amount='5.132' />

                </LinearGradient>


                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(44,168,223,1)', 'rgba(40,40,91,1)']}
                 style={[styles.LinearContent ]}
                 >
                    <ImpactSectionTitle title='Public donations'/>
                     <ImpactStatistic title='Total donations' amount='2.232' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                     <ImpactStatistic title='Largest accumulated donations' amount='7.611' />
                       <ImpactStatistic title='Total accumulated' amount='24.432' />

                </LinearGradient>
                </View>

                <View>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(255,159,63,1)', 'rgba(191,0,21,1)']}
                 style={[styles.LinearContent ]}
                 >
                    <ImpactSectionTitle title='Private Donations'/>
                     <ImpactStatistic title='Total donations' amount='967' />
                     <ImpactStatistic title='Total helpCoins donated' amount='3.254' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                       <ImpactStatistic title='Largest donation' amount='748' />

                </LinearGradient>
                </View>


            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
Container: {
},

TopLinearContent:{
paddingTop: '5%',
paddingBottom: '13%',
paddingHorizontal: '9%',
elevation: 20,


},

LinearContent:{
paddingTop: '13%',
paddingBottom: '13%',
paddingHorizontal: '9%',
elevation: 20,


},

Streep:{
borderBottomColor: 'rgba(255,255,255,0.5)',
borderBottomWidth: 1,

},

StreepCon:{
    paddingBottom: '6%',
},

ChoiceCon:{
flexDirection: 'row',
paddingBottom: '6%',

},

NavText:{
fontSize: 25,
color: 'white',
fontFamily: 'Poppins-Bold',
paddingBottom: '10%'
},

Chosen:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    paddingRight: '12%',
},

Choice:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    paddingRight: '12%',

},


})