import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: DetailScreen
  }
});

const App = createAppContainer(navigator);
export default App;
