import {Platform,BlurView, StyleSheet, Button , Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import Home from './Home';
import TasksPage from './TasksPage';
import DonationPage from './DonationPage';
import ImpactPage from './ImpactPage';
import ImpactPageUser from './ImpactPageUser';
import DonationMessage from './DonationMessage';
import ProfilePage from './ProfilePage';
import PropositionPage from './PropositionPage';
import TaskPage from './TaskPage';
import DonatePage from './DonatePage';
import OrganisationPage from './OrganisationPage';
import ProjectPage from './ProjectPage';
import IntroCarousel from './IntroCarousel';
import HelpPage from './HelpPage';
import SettingsPage from './SettingsPage';
import TabNavigator from './TabNavigator';




const StackNav = createStackNavigator({
    TabNavigator:TabNavigator,
    Home:Home,
    TasksPage:TasksPage,
    DonationPage:DonationPage,
    ImpactPage:ImpactPage,
    ImpactPageUser:ImpactPageUser,
    DonationMessage:DonationMessage,
    ProfilePage:ProfilePage,
    PropositionPage:PropositionPage,
    TaskPage:TaskPage,
    DonatePage:DonatePage,
    OrganisationPage:OrganisationPage,
    ProjectPage:ProjectPage,
    IntroCarousel:IntroCarousel,
    SettingsPage:SettingsPage,
    HelpPage:HelpPage,

  },

  {defaultNavigationOptions:
    {
      headerTransparent: 'true',
      headerStyle:{
      }
      // header:null
    }
  }

    
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer; 
