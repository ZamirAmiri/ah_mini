import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TaskPage extends Component{
    render(){
        return(
            <ScrollView style={styles.Container}>
                <View style={styles.ImageCon}>
                <ImageBackground
                           source={{uri:'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-1245328/2017/05/mike_wilkinson_0.jpg?itok=696xZmVu'}}
                        imageStyle={{ width: '100%', height: '100%' }}
                        style={styles.ImageSelf}>
                        </ImageBackground>
                </View>

                <View style={styles.Content}>
                    <View style={styles.TitleCon}>
                        <View style={styles.TitleContain}>
                            <Text style={styles.Title}>Watch An AD</Text>
                        </View>
                    </View>

                    <View style={styles.StatMainCon}>
                        <View style={styles.StatsCon}>
                        <Icon name="eur" color=" rgb(116,193,193)" size={35}/>
                            <View style={styles.StatTextCon}>
                                <Text style={styles.TextText}>helpcoins{"\n"}<Text style={styles.Amount}>1</Text></Text>
                                
                            </View>
                        </View>

                        <View style={styles.StatsCon}>
                        <Icon name="clock-o" color=" rgb(116,193,193)" size={35}/>
                            <View style={styles.StatTextCon}>
                            <Text style={styles.TextText}>seconden{"\n"}<Text style={styles.Amount}>15/30</Text></Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.DescriptionCon}>
                        <Text style={styles.Description}><Text style={styles.Bold}>Info{"\n"}</Text>This will be the description with infor must be  high like high bold derene ik weet niet hoe maar kan wel tussne  ahaskjes</Text>
                    </View>

                    <TouchableOpacity style={styles.ButtonCon}>
                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
                 style={styles.LinearContent}>
                     <Text style={styles.ButtonText}>Start Task</Text>
                 </LinearGradient>
                 
                </TouchableOpacity>

                    

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

Container:{
alignSelf: 'stretch',
},

ImageCon:{
alignSelf: 'stretch',
paddingBottom: '8%',
},

ImageSelf:{
height: 300,
alignSelf: 'stretch',
backgroundColor: 'yellow',

},

Content:{
alignSelf: 'stretch',
paddingHorizontal: '6%',
paddingBottom: '20%',
},

TitleCon:{
alignSelf: 'stretch',
paddingBottom: '6%',

},

TitleContain:{
alignSelf: 'stretch',
borderBottomColor: 'rgb(102,102,102)',
borderBottomWidth: 1,
justifyContent: 'center',
alignItems: 'center',
},

StatMainCon:{
flexDirection: 'row',
alignSelf: 'stretch',
justifyContent: 'center',
alignItems: 'center',
paddingBottom: '8%'

},

StatsCon:{
flexDirection: 'row',
paddingHorizontal: '5%',
alignItems: 'center',
},



StatTextCon:{
paddingLeft: '3%'
},

DescriptionCon: {
paddingBottom: '10%',
},

Description: {
textAlign: 'center',
color: 'rgb(77,77,77)',
fontSize: 15,
fontFamily: 'Poppins-Medium',
},

Bold: {
fontFamily: 'Poppins-Bold',
fontSize: 17,

},


LinearContent:{
justifyContent: 'center',
alignItems: 'center'
},

ButtonCon:{
alignSelf: 'stretch',
borderRadius: 50, 
overflow: 'hidden',
},

ButtonText:{
color: 'rgb(255,255,255)',
fontSize: 20,
fontFamily: 'Poppins-SemiBold',
paddingVertical: '6%'
},

Title:{
color: 'rgb(26,26,26)',
fontSize: 30,
fontFamily: 'Poppins-Bold',
},

TextText:{
color: 'rgb(128,128,128)',
fontSize: 12,
fontFamily: 'Poppins-Medium',
paddingLeft: 10,
},

Amount:{
color: 'rgb(77,77,77)',
fontSize: 20,
fontFamily: 'Poppins-SemiBold',
},

})