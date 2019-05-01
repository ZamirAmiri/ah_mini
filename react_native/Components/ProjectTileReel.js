import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';
import {ProjectTile} from './ProjectTile';
export {ProjectTileReel};

//de shaduw in flatlist wordt niet geziend oordat  de items in containers zitten en dus niet de shaduw de ruimte geven om uit die container te gaan. dus je ziet ze niet denk ik.

 class ProjectTileReel extends Component{

    
  
    render() {
        return(
            <View style={styles.Container}>
                <FlatList
              style={{width:'100%',overflow:'visible'}}
              data={[{key:'1'},{key:'2'},{key:'4'},{key:'9'}]}
              contentContainerStyle={{overflow:'visible'}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>{
                return(<View style={styles.TileContainer}><ProjectTile/></View>)}}
                ListFooterComponent={()=> {return(
                    <View style={{height:50, width:50, }}/>
                )}} 
                />
            </View> 


        )
    }
}

const styles = StyleSheet.create({

Container:{
    alignSelf: 'stretch',
    overflow: 'visible'

},

TileContainer: {
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',

},




})