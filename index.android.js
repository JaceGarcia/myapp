import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Component2 from './app/Components/component2/component2'

export default class myapp extends Component{
  render(){
      return(
          <View>
              <Component2 />
          </View>
      );
  }
}
AppRegistry.registerComponent('myapp', () => myapp);
