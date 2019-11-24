import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Pinball from './screens/Pinball';



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container />
    )
  }
}
const Screens = createStackNavigator({
  Home: Home,
  Pinball: Pinball
});

const Container = createAppContainer(Screens);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 100 / 2,
    backgroundColor: "black"
  }
});

export default App
