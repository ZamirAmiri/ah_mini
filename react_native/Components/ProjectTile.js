import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export {ProjectTile}

class ProjectTile extends Component {
    render(){
        return (
          <TouchableOpacity style={styles.Container}>
            <ImageBackground
            source ={{uri:'https://ichef.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg'}}
            imageStyle={styles.ImageSelf}
            style={styles.ImageInside}>

            <View style={styles.overlay}/>
            <Text style={styles.ProjectTitel}>Kill them whales</Text>
             
           </ImageBackground>
          </TouchableOpacity>

        )
    }
} 

const styles = StyleSheet.create({
  Container:{
  
  },
ImageSelf: {

},  

ImageInside: {
height: 250,
width: 250,
borderRadius: 10,
overflow: 'hidden',

justifyContent: 'flex-end',
},

overlay: {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'absolute',

   },
    
     
    
      ProjectTitel:{
      
        fontSize:25,
        color:'white', 
        fontFamily: 'Poppins-SemiBold',
        paddingLeft: '8%',
        paddingBottom: '7%',
    
      },



})