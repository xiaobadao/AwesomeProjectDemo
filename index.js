import {
    AppRegistry ,
    StyleSheet,
    View,
    TextInput ,
    Text,
    ScrollView,
    Image,
    FlatList,
    SectionList,
    NavigatorIOS

} from 'react-native';

import React , {Component} from 'react'

export default class FlexDirectionBasics extends  Component {

    render(){
        // console.log(getMovieFromApiAsync())
        getMovies()
        return (
            <View style={styles.container}>
                <SectionList
                    sections = {[
                        {title:'d',data:['devin']},
                        {title:'j',data:['jac','jdes','jasd','jsdfs']}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader ={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        )
    }

}

const  styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'red'
    },
    item:{
      padding:10,
      fontSize:18,
      height:44,
    }
})

function getMovieFromApiAsync(){
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.movies)
            return responseJson.movies;
        })
        .catch((error) =>{
            console.error(error)
        })
}

function getMovies() {
    let request = new XMLHttpRequest()


    request.onreadystatechange = (e) => {
        if (request.readyState != 4){
            return;
        }
        if (request.status === 200){
            console.log('success',request.responseText)
        }else {
            console.warn('error')
        }
    }
    request.open('GET', 'https://mywebsite.com/endpoint/')
    request.send()

}
AppRegistry.registerComponent("AwesomeProject",()=>FlexDirectionBasics)