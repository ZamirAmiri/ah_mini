import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,ImageBackground,TouchableOpacity,Modal, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StatisticTile, ProjectTile, ProjectTileReel, OrganisationTile, Proposition, PropositionReel, IntroPage1, IntroPage2, IntroPage3} from './Components';
import DonatePage from './DonatePage';

export default class ProjectPage extends Component{
    constructor(props) {
        super(props);
        this.state ={
            isModalVisible: false,
        };
        this.navigation = props.navigation;

    }

    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool});
    }
   
    render(){

        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <View>
              <Modal
                animationType="slide"
                 transparent={true}
                 visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}>
                     <DonatePage navigation={this.navigation} changeModalVisibility={this.changeModalVisibility}/>
                 </Modal>

            <ScrollView style={styles.Container}>

                <ScrollView
                 horizontal={true}
                 pagingEnabled={true}
                 showsHorizontalScrollIndicator={true}
                       >

                    <Image 
                    source={{uri:'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-1245328/2017/05/mike_wilkinson_0.jpg?itok=696xZmVu'}}
                    style={{height: 500, width: screenWidth,}}
                    />   
                     <Image 
                     source={{ uri: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMwMTMxfQ&auto=format&fit=crop&w=634&q=80' }}
                    style={{height: 500, width: screenWidth,}}
                    />     
                     <Image 
                    source={{uri:'https://jooinn.com/images/picture-3.jpg'}}
                    style={{height: 500, width: screenWidth,}}
                    />            
            </ScrollView>

                <LinearGradient
                 start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                 colors={['rgba(67,206,162,0.25)',  'rgba(24,90,157,0.25)']}
                 style={styles.Linear}>
                <View style={styles.TitleMainCon}>
                    <View style={styles.TitleCon}>
                      <Text><Text style={styles.Title}>Red Cross</Text>{"\n"}<Text style={styles.Location}>The Hague, Netherlands</Text></Text>
                    </View>
                </View>
                

                <View style={styles.StatisticCon}>
                    <View style={{paddingRight: 10,}}>
                     <StatisticTile icon="user"/>
                    </View>
                    <View style={{paddingRight: 10,}}>
                      <StatisticTile icon="heart"/>
                    </View>
                </View>

                <View style={styles.ProjectCon}>
                    <Text style={styles.InfoTitle}>Organisation</Text>
                    <OrganisationTile navigation={this.navigation} title="Red Cross"/>
                </View>
                <View style={styles.InfoCon}>
                    <Text style={styles.Info}><Text style={styles.InfoTitle}>Info{"\n"}</Text>this is the small desciroption we will see on the project his page and others van aswell</Text>
                </View>

                <View style={styles.ProjectCon}>
                <Text style={styles.InfoTitle}>Propositions</Text>
                    <PropositionReel/>
                </View>

             </LinearGradient>
                <View style={styles.Content}>
                     <Text style={styles.Description}><Text style={styles.Bold}>Info{"\n"}</Text>This will be the description with infor must be  high like high bold derene ik weet niet hoe maar kan wel tussne  ahaskjes</Text>
                    <Text style={styles.Description}><Text style={styles.Bold}>Info{"\n"}</Text>This will be the description with infor must be  high like high bold derene ik weet niet hoe maar kan wel tussne  ahaskjes</Text>
                </View>
            </ScrollView>

                <TouchableOpacity style={{width:'100%', height: '12%', elevation: 40,}} onPress={() => this.changeModalVisibility(true)}>
                     <LinearGradient
                      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                     colors={['rgba(67,206,162,1)',  'rgba(24,90,157,1)']}
                      style={styles.Footer}>
                           <Text style={styles.ButtonText}>Donate</Text>
                       </LinearGradient>
                     </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
Container:{
    backgroundColor: 'rgb(240,240,240)',
    height: '89%',
    overflow: 'visible'
},

Linear:{
alignSelf: 'stretch',
paddingTop: '8%',
elevation: 35,
paddingBottom: '8%',
overflow: 'visible'


},

ImageCon: {
alignSelf: 'stretch',
height: 300,
},

ImageSelf:{
alignSelf: 'stretch',
height: '100%',
},

TitleMainCon:{
alignSelf: 'stretch',
paddingBottom: '5%',
paddingHorizontal: '6%',
},

TitleCon:{
alignSelf: 'stretch',
borderBottomColor: 'black',
borderBottomWidth: 1,
},

StatisticCon:{
alignSelf: 'stretch',
paddingBottom: '5%',
flexDirection: 'row',
paddingHorizontal: '6%',
},

InfoCon:{
alignSelf: 'stretch',
paddingHorizontal: '6%',
paddingBottom: '5%',

},



ProjectCon:{
alignSelf: 'stretch',
paddingHorizontal: '6%',
paddingBottom: '5%',
},


Footer:{
width: '100%',
height: '100%',
justifyContent: 'center',
alignItems: 'center',
elevation: 10,
},


Description: {
    textAlign: 'center',
    fontSize: 15,
        color: 'rgb(77,77,77)',
        fontFamily: 'Poppins-Regular',
        paddingBottom: '10%'
    },
    
    Bold: {
        fontSize: 20,
        color: 'rgb(26,26,26)',
        fontFamily: 'Poppins-SemiBold',
    },

Content:{
alignSelf: 'stretch',
backgroundColor: 'rgb(242,242,242)',
paddingBottom: '13%',
paddingTop: '15%',
paddingHorizontal: '7%'

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
    fontSize: 15,
    color: 'rgb(55,55,55)',
    fontFamily: 'Poppins-Regular',
},


ButtonText:{
 fontSize: 20,
    color: 'rgb(255,255,255)',
    fontFamily: 'Poppins-Bold',
},

})