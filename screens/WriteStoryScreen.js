import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header, SearchBar} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{

constructor(){
    super();
    this.state = {
        author: '',
        title: '',
        story: ''
    }
}

submitStory = async ()=>{
    db.collection("stories").add({
        'author': this.state.author,
        'title': this.state.title,
        'story': this.state.story
    })
    var submittedMessage = "Book submitted";
    ToastAndroid.show(submittedMessage, ToastAndroid.SHORT)
}

render(){
    return(
        <View>
            <Header 
                backgroundColor = {'#E6E6FA'}
                centerComponent = {{
                    text: 'Write a Story',
                    style: {fontSize: 20, color: '#fff'}
                }}
            />

            <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>

            <TextInput
                value = {this.state.author}
            />
            <TextInput
                value = {this.state.title}
            />
            <TextInput
                value = {this.state.story}
            />
            <TouchableOpacity style = {styles.buttonStyle}>
                onPress = {this.submitStory}
                <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            
            </KeyboardAvoidingView>
            
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
    }
})
