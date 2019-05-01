/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import IntroCarousel from './IntroCarousel';

import AppContainer from './StackNavigation';

AppRegistry.registerComponent(appName, () => AppContainer);
