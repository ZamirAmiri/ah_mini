import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TrendingDonate, SoloDonate, GroupDonate, HomeHeader, TimeLine, TaskCard} from './Components'


export default class TasksPage extends Component {
    constructor(props){
        super(props);
        this.navigation = props.navigation;
      }

    render(){
        return (
            <View style={styles.Container}>
                <LinearGradient  
                  start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                  style={{width:'100%',height:200, alignItems: 'center', paddingTop: 20}}>
                      <Text style={styles.HeaderText}>Tasks</Text>
                  </LinearGradient>
                  <View style={styles.Content}>
                  <TaskCard navigation={this.navigation} />

                  </View>
            </View>
        )
    }
}

styles = StyleSheet.create ({
Container:{
    flex: 1,
    backgroundColor: 'rgb(242,242,242)',
},

Content: {
    height: '100%',
   width: '100%',
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   paddingHorizontal: '6%',

},

HeaderText:{
fontSize: 25,
color: 'white',
fontFamily: 'Poppins-Bold',
},



})
