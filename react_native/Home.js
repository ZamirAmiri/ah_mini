import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Modal, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TrendingDonate, SoloDonate, GroupDonate, HomeHeader, TimeLine} from './Components';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[{key:'header'},{key:'TimeLine'},{key:'SoloDonate'},{key:'TrendingDonate'},{key:'5'},{key:'7'},{key:'project'}],
        }
        this.navigation = props.navigation;
      }
    

    render(){
        return (
            <View style={styles.Container}>
                
                <LinearGradient  
                  start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                  colors={['rgba(67,206,162,1)', 'rgba(24,90,157,1)']}
                  style={{width:'100%',height:250}} />
                  <View style={styles.Content}>
                  <FlatList 
                    data={this.state.data}
                    style={styles.FlatListCenter}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.FlatContent}
                    renderItem={({item}) => {if(item.key == 'header'){
                        return(<HomeHeader navigation={this.navigation}/> );
                        }else if(item.key == 'TimeLine'){
                            return(<TimeLine />);
                        }else if(item.key == 'SoloDonate'){
                            return(<SoloDonate navigation={this.navigation}/>);
                        }else if(item.key == 'TrendingDonate'){
                            return(<TrendingDonate navigation={this.navigation}/>);
                        }else{
                            return(<GroupDonate navigation={this.navigation}/>);
                        }
                    }}
                    />


                  </View>
            </View>
        )
    }
}


const styles = StyleSheet.create ({
Container:{
    flex: 1,
    backgroundColor: 'rgb(242,242,242)',
},


FlatListCenter:{
    alignSelf: 'stretch',
},

FlatContent:{
    paddingHorizontal: '6%',

},



Content: {
    height: '100%',
   width: '100%',
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',


},






})
