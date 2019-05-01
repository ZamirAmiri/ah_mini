import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfilePage from '../ProfilePage'
 

export class HomeHeader extends Component{
    constructor(props) {
        super(props);
        this.state ={
            isModalVisible: false,
        };
    this.navigation = this.props.navigation;

    }

    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool});
    }
    render(){ return(
        <View style={styles.Container}>
        <Modal animationType= "none"
          transparent={true}
          visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}>
          <ProfilePage navigation={this.navigation} changeModalVisibility={this.changeModalVisibility}/>
        </Modal>
            <TouchableOpacity onPress={() => { this.navigation.navigate('ImpactPage'); }} style={styles.ImpactCon}>
                <Icon name="heart" color="white" size={30}/>
            </TouchableOpacity>
            <View style={styles.TextCon}>
                <Text style={styles.NavText}>addinghelp</Text> 
            </View>
            <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={styles.ProfileCon}>
                <Image 
                source={{uri:'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}}
                style={styles.Profile} 
                />
 
            </TouchableOpacity>
        </View>



    )}
}

const styles = StyleSheet.create({
Container: {
    height: 65,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},

ImpactCon: {
width: '20%',
height: '100%',
justifyContent: 'center',
alignItems: 'center',
},

ProfileCon: {
width: '20%',
height: '100%',
justifyContent: 'center',
alignItems: 'center',
},

TextCon: {
    width: '60%',
height: '100%',
justifyContent: 'center',
alignItems: 'center',
},

Profile: {
height: 40,
width: 40,
borderRadius: 50,
},

ImpactIcon: {
    height: 40,
width: 40,
backgroundColor: 'white',
borderRadius: 50,
},



NavText:{
fontSize: 25,
color: 'white',
fontFamily: 'Poppins-Bold',
},



})