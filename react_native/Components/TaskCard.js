import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TaskStats} from './TaskStats'


export class TaskCard extends Component {
    constructor(props) {
        super(props);
         this.navigation = this.props.navigation;
 }


    render(){
        return(
            <TouchableOpacity onPress={() => { this.navigation.navigate('TaskPage'); }} style={styles.MainCon}>
                <View style={styles.Container}>
                    <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMwMTMxfQ&auto=format&fit=crop&w=634&q=80' }}
                        imageStyle={{ width: '100%', height: '100%' }}
                        style={styles.ImageSec}>
                        <View style={styles.Overlay}/>
                        </ImageBackground>
                    <LinearGradient 
                    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                    style={styles.BottomPart}>
                    <View style={styles.BottomPartCon}>
                    <View style={styles.TitleCon}>
                        <Text style={styles.Title}>Watch An AD</Text>
                    </View>
                    <View style={styles.InfoCon}>
                        <TaskStats icon="eur" title="helpcoins" amount="1"></TaskStats>
                        <TaskStats icon="clock-o" title="seconden" amount="15/30"></TaskStats>

                    </View>
                    </View>

                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
MainCon: {
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: '13%',
width: '100%'
},

Container: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    height: 300,
    borderRadius: 10,
    elevation: 25,
    overflow: 'hidden',
},

ImageSec: {
height: '55%',
alignSelf: 'stretch',
backgroundColor: 'green',
},

Overlay: {
backgroundColor: 'rgba(0,0,0,0.5)',
position: 'absolute',
height: '100%',
width: '100%',
},

BottomPart: {
    height: '45%',
    alignSelf: 'stretch',
    paddingHorizontal: '10%',
    paddingBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
},

BottomPartCon: {
    height: '100%',
    alignSelf: 'stretch',

},

TitleCon: {
    height: '50%',
    alignSelf: 'stretch',
    borderBottomColor: 'rgba(255,255,255,0.75)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

InfoCon: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    
},

Title:{
fontSize: 25,
color: 'white',
fontFamily: 'Poppins-Bold',
paddingTop: 10,
},

})