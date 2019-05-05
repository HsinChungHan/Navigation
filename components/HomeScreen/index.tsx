import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {}

interface State {}

export class HomeScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'HomeScreen'
  };
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
