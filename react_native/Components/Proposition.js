import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,Modal,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropositionPage from '../PropositionPage';
export {Proposition}

export default class Proposition extends Component {
    constructor(props){
        super(props);
        this.state={
        isModalVisible: false,
        };
        this.navigation = props.navigation;
      }

      changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool});
    }
    render() {
        return (
            <TouchableOpacity  onPress={() => this.changeModalVisibility(true)}>
            <Modal
          animationType="none"
          transparent={true}
          visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}>
          <PropositionPage changeModalVisibility={this.changeModalVisibility}/>
        </Modal>
            <LinearGradient
         start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
         colors={['rgba(230,180,0,1)', 'rgba(230,100,0,1)', 'rgba(230,0,0,1)']}
         style={styles.GradientContainer}
         >
         <View style={styles.ImpactImageContainer}>
         <Image 
                style={{height: '75%', width: '75%'}}
                source={{uri:'http://pluspng.com/img-png/flowers-vectors-png-download-flowers-vectors-png-images-transparent-gallery-advertisement-3312.png'}}/>
                
               </View>
               <View style={styles.ImpactTextContainer}>
                   <Text style={styles.ImpactAmount}>15 Smeckels{"\n"}<Text style={styles.ImpactText}>1 Maaltijd</Text></Text>
               </View>
       </LinearGradient>
       </TouchableOpacity>
               
            
        )
    }
}

const styles = StyleSheet.create({
  

    GradientContainer:{
        height: 90,
        width: 215,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow:'visible',
marginRight: 10,




    },
    
    ImpactImageContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    ImpactImage: {
        height: '50%',
        width: '50%',
        borderRadius: 200,
        backgroundColor: 'white',
    
        
    },
    
    ImpactTextContainer: {
        height: '100%',
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
       
    },
    
    
 ImpactAmount: {
 fontSize: 11,
  color: 'rgba(255,255,255,0.75)',
fontFamily: 'Poppins-Medium',

    },

    ImpactText: {
   fontSize: 17,
     color: 'rgba(255,255,255,1)',
    fontFamily: 'Poppins-SemiBold',
},
    


})