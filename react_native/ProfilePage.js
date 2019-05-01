import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
      }

    closeModal = () => {
        this.props.changeModalVisibility(false);
    }

    render(){
        return(
            <View  style={styles.Container}>
                <TouchableOpacity onPress={() => this.closeModal()} style={styles.BackSpace}/>
                <View style={styles.Content}>
                    <View style={styles.TopPart}>
                    <View style={styles.Bottom}>
                        <View style={styles.Streep}>
                        <View style={styles.UserCon}>
                        <Image 
                           source={{uri:'https://www.canva.com/learn/wp-content/uploads/2018/11/best-free-stock-photos.jpg'}}
                          style={styles.ProfilePic}/> 
                            <Text style={styles.Username}>Shairamiri</Text>
                        </View>
                     </View>
                     </View>
                     <LinearGradient
                        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                       colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                        style={styles.AmountCon}>
                            <Icon name="eur" color="white" size={30}/>
                            <Text style={styles.Amount}>345</Text>
                        </LinearGradient>
                    </View>


                    <LinearGradient
                        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                       colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                        style={styles.ButtonsCon}>
                        <TouchableOpacity onPress={() => { this.navigation.navigate('SettingsPage'), this.closeModal()  }} style={styles.ButtonLowCon}>
                        <Icon name="cog" color="white" size={27}/>
                        <Text style={styles.ButtonText}>settings</Text>
                     </TouchableOpacity>
                     <View style={{height: '100%', borderRightColor:'white', borderRightWidth:1,}}/>
                     <TouchableOpacity onPress={() => { this.navigation.navigate('HelpPage'), this.closeModal() }} style={styles.ButtonLowCon2}>
                     <Icon name="question" color="white" size={27}/>
                     <Text style={styles.ButtonText}>help</Text>

                     </TouchableOpacity>

                 </LinearGradient>

                 </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
Container:{
flex: 1, 
backgroundColor: 'rgba(0,0,0,0.5)',
alignItems: 'flex-end',
flexDirection: 'row',
},

BackSpace:{
width: '20%',
height: '100%',

},

Content:{
height: '100%',
width: '80%',
elevation: 20,
backgroundColor: 'rgb(242,242,242)',

},

TopPart:{
 height: '90%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '12%',
},

ButtonsCon: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 25,
},

UserCon:{
alignSelf: 'stretch',
flexDirection: 'row',
alignItems: 'center',
paddingBottom: '10%',
justifyContent: 'center',
},

ProfilePic:{
    backgroundColor: 'red',
    borderRadius: 50,
    height: 60,
        width: 60,
},

AmountCon :{
width: '80%',
height: '12%',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
flexDirection: 'row',
elevation: 3,

},

Streep: {
    borderBottomColor: 'rgb(128,128,128)',
    borderBottomWidth: 0.5,
    alignSelf: 'stretch'
},



Amount:{
fontSize: 20,
    color: 'rgb(255,255,255)',
    paddingLeft: '6%',
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 5,

},

Username: {
    fontSize: 23,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-Bold',
    paddingLeft: '8%',
    
    },

ButtonLowCon: {
height: '100%',
width: '50%',
justifyContent: 'center',
alignItems: 'center',
},
ButtonLowCon2: {
height: '100%',
width: '50%',
justifyContent: 'center',
alignItems: 'center',
},

IconCon:{
    backgroundColor: 'red',
    borderRadius: 50,
    height: 30,
        width: 30,
},

Bottom:{
alignSelf: 'stretch',
paddingBottom: '8%'
},

ButtonText:{
color: 'rgb(255,255,255)',
fontSize: 12,
fontFamily: 'Poppins-Medium'
},

})