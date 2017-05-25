/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    Button,
    Image,
    ListView,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    name: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        borderWidth: 2,
    }
});
let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            count: 0
        };
    }

    onButtonPress() {
        // Alert.alert('Button has been pressed!');
        this.getMoviesFromApi().then(data => {
            Alert.alert(JSON.stringify(data));
        })
    }
    getMoviesFromApi() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.name}> hello xj  xmt </Text>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Button
                    onPress={this.onButtonPress.bind(this)}
                    title="get data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/*<TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>*/}
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({ text: '正在登录...', waiting: true })
                        setTimeout(() => {
                            this.setState({ text: '网络不流畅', waiting: false })
                        }, 2000);
                    }}
                    onLongPress={() => {
                        Alert.alert('长按', '确认删除', [
                            { text: '取消', onPress: () => { }, style: 'cancel' },
                            { text: '确定', onPress: () => { } },
                        ]);
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> 我是TouchableWithoutFeedback,单击我 </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonText}>{this.state.text}</Text>
            </View>
        );
    }
}


