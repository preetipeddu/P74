import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allStories: [],
            search: '',
            lastVisibleStory: null
        }
    }

    retrieveStories = async ()=>{
     var text = this.state.search.toUpperCase()
     var enteredText = text.split()
     var query = await db
     .where('title','==',text)
     .startAfter(this.state.lastVisibleStory).limit(10).get()
     query.docs.map((doc)=>{
         this.setState({
             allStories: [...this.state.allStories, doc.data()],
             lastVisibleStory: doc
         })
     })
    }

    searchStories = async (text)=>{
       var enteredText = text.split("")
       const story = await db
       .collection("stories")
        .where('title','==',text).get()
        story.docs.map((doc)=>{
            this.setState({
                allStories: [...this.state.allStories, doc.data()],
                lastVisibleStory: doc
            })
        })
    }

    componentDidMount = async ()=>{
        const query = await db
        .collection("stories")
        .limit(10).get()
        this.setState({
            allStories: [],
            lastVisibleStory: doc
        })
    }

    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.searchBar}>
                <TextInput style = {styles.bar}
                    placeholder = "Enter the story name here..."
                    onChangeText = {(text)=>{this.setState({search: text})}}
                />
                <TouchableOpacity style = {styles.searchButton}>
                    onPress = {()=>{this.searchStories(this.state.search)}}
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
                <FlatList
                    data = {this.state.allStories}
                    renderItem = {({item})=>{
                        <View key = {index} style = {{borderBottomWidth: 2}}>
                            <Text>{"Title: " + story.title}</Text>
                            <Text>{"Author: " + story.author}</Text>
                            <Text>{"Story: " + story.story}</Text>
                        </View>
                    }}
                    onEndReached = {this.retrieveStories}
                    keyExtractor = {(item, index)=>{index.toString()}}
                    onEndThreshold = {0.7}
                />
            </View>
        )
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        },
        searchBar: {
            flexDirection: 'row',
            backgroundColor: 'grey',
            height: 40,
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
        },
        bar: {
            borderWidth: 1,
            height: 30,
            width: 300,
            paddingLeft: 10
        },
        searchButton: {
            borderWidth: 1,
            height: 30,
            width: 50,
            alignItems: 'center',
            backgroundColor: 'blue'
        }
    })
