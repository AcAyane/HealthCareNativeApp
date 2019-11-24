import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Text } from 'native-base';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text>hi</Text>
                <Button title="Baka's Home" onPress={() => this.props.navigation.navigate("Pinball")}> </Button>
            </View>
        );
    }
}


export default Home;
