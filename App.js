import  React,{useState} from 'react';
import { Text, View, StyleSheet,Button,Alert,Platform,StatusBar,SafeAreaView } from 'react-native';
import {TextInput} from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files
import {colors}from './src/utils/colors';
import {Focusf}from './src/features/Focusf';
import {Timer}from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';
// or any pure javascript modules available in npm


export default function App() {
  const[currentSubject,setCurrentSubject]=useState(null);
  const[history,setHistory]=useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {
        !currentSubject?(
        <>
        <Focusf addSubject={(currentSubject)=>{setCurrentSubject(currentSubject)}}/>
        <FocusHistory history={history}/>
        </>
        )
        :
        <Timer focusSubject={currentSubject}    onTimerEnd={(subject)=>{setHistory([...history,subject])}} clearSubject={()=>setCurrentSubject(null)}/>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0,
    backgroundColor:colors.darkblue
    },
   
});
