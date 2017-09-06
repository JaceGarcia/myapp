import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Component1 from './app/Components/Component1/component1'

export default class myapp extends Component{
  render(){
      return(
          <View>
              <Component1 />
          </View>
      );
  }
}
AppRegistry.registerComponent('myapp', () => myapp);
