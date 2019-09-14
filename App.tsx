import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Welcome from './src/components/welcome';
import Router from './src/components/router';

export default class App extends React.Component {
  render() {
    return (
      <Router></Router>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
