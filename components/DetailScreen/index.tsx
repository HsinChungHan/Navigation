import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {}

interface State {}

export default class DetailScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'DetailScreen'
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail screen!</Text>
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
