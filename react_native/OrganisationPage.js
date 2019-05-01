import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StatisticTile, ProjectTile, ProjectTileReel,} from './Components';

export default class OrganisationPage extends Component{
    render(){
        return(
            <ScrollView style={styles.Container}>
                <View style={styles.ImageCon}>
                <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMwMTMxfQ&auto=format&fit=crop&w=634&q=80' }}
                        imageStyle={{ width: '100%', height: '100%' }}
                        style={styles.ImageSelf}>
                        </ImageBackground>
                </View>

                <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(67,206,162,0.25)',  'rgba(24,90,157,0.25)']}
                style={styles.Linear}
                >
                <View style={styles.TitleMainCon}>
                    <View style={styles.TitleCon}>
                        <Text><Text style={styles.Title}>Red Cross</Text>{"\n"}<Text style={styles.Location}>The Hague, Netherlands</Text></Text>
                    </View>
                </View>

                <View style={styles.StatisticCon}>
                    <View style={{paddingRight: 10,}}>
                     <StatisticTile icon="user" />
                    </View>
                    <View style={{paddingRight: 10,}}>
                      <StatisticTile icon="heart"/>
                    </View>
                </View>

                <View style={styles.InfoCon}>
                    <Text style={styles.Info}><Text style={styles.Bold}>Info{"\n"}</Text>this is the small desciroption we will see on the project his page and others van aswell</Text>
                </View>

                <View style={styles.ProjectCon}>
                    <Text style={styles.Bold}>Projects</Text>
                    <ProjectTileReel/>

                </View>
                </LinearGradient>

                <View style={styles.Content}>
                <Text style={styles.Description}><Text style={styles.InfoTitle}>Info{"\n"}</Text>This will be the description with infor must be  high like high bold derene ik weet niet hoe maar kan wel tussne  ahaskjes</Text>
                    

                </View>
                

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
Container:{
    backgroundColor: 'rgb(242,242,242)',
},

ImageCon: {
alignSelf: 'stretch',
},

Linear:{
paddingTop: '10%',
elevation: 10,
},


ImageSelf:{
backgroundColor: 'green',
alignSelf: 'stretch',
height: 300,
},

TitleMainCon:{
alignSelf: 'stretch',
paddingBottom: '8%',
paddingHorizontal: '6%',
},

TitleCon:{
alignSelf: 'stretch',
borderBottomColor: 'rgb(102,102,102)',
borderBottomWidth: 1,
},

StatisticCon:{
alignSelf: 'stretch',
paddingBottom: '6%',
flexDirection: 'row',
paddingHorizontal: '6%',
},

InfoCon:{
alignSelf: 'stretch',
paddingHorizontal: '6%',
paddingBottom: '6%',

},



ProjectCon:{
alignSelf: 'stretch',
paddingHorizontal: '6%',
paddingBottom: '13%',
},

Description: {
textAlign: 'center',
fontSize: 16,
    color: 'rgb(77,77,77)',
    fontFamily: 'Poppins-Regular',
},

Bold: {
    fontSize: 16,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-SemiBold',
},

Content:{
alignSelf: 'stretch',
backgroundColor: 'rgb(242,242,242)',
paddingBottom: '13%',
paddingTop: '8%',
paddingHorizontal: '6%'

},

Title:{
    fontSize: 28,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-Bold',
},

Location:{
    fontSize: 15,
    color: 'rgb(77,77,77)',
    fontFamily: 'Poppins-Medium',
},


InfoTitle:{
  fontSize: 18,
    color: 'rgb(26,26,26)',
    fontFamily: 'Poppins-SemiBold',
},


Info:{
    fontSize: 16,
    color: 'rgb(77,77,77)',
    fontFamily: 'Poppins-Regular',
},


})