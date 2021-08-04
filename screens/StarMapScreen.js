import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'




export default class SpacecraftScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            latitude:'',
            longitude:''
        }
    }
    
  
   
   render(){
        return(
           
                  <WebView
                  scalesPageToFit={true}
                  source = {{uri:'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=false'}}
                  style = {{marginTop:20,marginBottom:20}}
                  >

                      </WebView>
                      
                 
            
        )
    }
}