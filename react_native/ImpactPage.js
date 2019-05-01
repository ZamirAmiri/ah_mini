import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImpactSectionTitle, ImpactStatistic, ImpactLeaderBoard } from './Components';

export default class ImpactPage extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
      }
    render(){
        return(
            <ScrollView style={styles.Container}>
            <View>
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
                     <Text style={styles.Chosen}>Global</Text>
                     </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.navigation.navigate('ImpactPageUser')}}>
                     <Text style={styles.Choice}>Personal</Text>
                     </TouchableHighlight>
                     
                 </View>
                 
                    <ImpactSectionTitle title='Donations' />
                    <ImpactStatistic title='Donations last 30 days' amount='289.634' />
                    <ImpactStatistic title='Total Donations' amount='1.254.432' />
                    <View style={styles.StreepCon}>
                    <View style={styles.Streep}/>
                    </View>
                    <ImpactLeaderBoard title='Largest accumulated donation' username='shairamiri' amount='25.235' />
                    <ImpactLeaderBoard title='Largest donation' username='Zucko' amount='5.278' />

                </LinearGradient>
                <View>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(232,163,5,1)', 'rgba(231,76,34,1)', 'rgba(195,60,57,1)']}
                 style={styles.LinearContent}
                 >
                    <ImpactSectionTitle title='HelpCoins'/>
                     <ImpactStatistic title='Donated last 30 days' amount='4.784.462' />
                     <ImpactStatistic title='Total Donated' amount='15.254.432' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                       <ImpactStatistic title='Generated' amount='18.268.222' />

                </LinearGradient>

                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(44,168,223,1)', 'rgba(40,40,91,1)']}
                 style={[styles.LinearContent ]}
                 >
                    <ImpactSectionTitle title='Public Donations'/>
                     <ImpactStatistic title='Total donations' amount='2.876.633' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                     <ImpactStatistic title='Largest accumulated donation' amount='254.432' />
                       <ImpactStatistic title='Total accumulated' amount='12.254.432' />

                </LinearGradient>
                </View>
                
                <View>
                

                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(255,159,63,1)', 'rgba(191,0,21,1)']}
                 style={[styles.LinearContent ]}
                 >
                    <ImpactSectionTitle title='Private Donations'/>
                     <ImpactStatistic title='Total donations' amount='54.432' />
                     <ImpactStatistic title='Total helpcoins donated' amount='624.432' />
                        <View style={styles.StreepCon}>
                           <View style={styles.Streep}/>
                        </View>
                       <ImpactStatistic title='Largest donation' amount='44.462' />

                </LinearGradient>

                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(255,79,63,1)', 'rgba(73,0,106,1)']}
                 style={styles.LinearContent}
                 >
                    <ImpactSectionTitle title='Users'/>
                     <ImpactStatistic title='Users joined last 30 days' amount='+45.242' />
                     <ImpactStatistic title='Total users' amount='555.478' />
                </LinearGradient>

                </View>
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