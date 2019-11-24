import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Pinball extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('../assets/Fonts/Roboto.ttf'),
            Roboto_medium: require('../assets/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {

        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Container>
                <Text>Pinball !</Text>
                <Button info><Text>Baka !</Text></Button>
            </Container>
        );

    }
}
