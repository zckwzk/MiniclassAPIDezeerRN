/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Root from './src/Root';
import TrackPlayer from 'react-native-track-player';

//import LearningReactNative from './LearningReactNative';

AppRegistry.registerComponent(appName, () => Root);
TrackPlayer.registerPlaybackService(() => require('./service'));
