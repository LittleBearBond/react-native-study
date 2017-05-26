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
    TouchableWithoutFeedback,
    View
} from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        borderWidth: 2,
    }
});

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            count: 0
        };
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
            <View>
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


