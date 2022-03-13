import React ,{useState}from 'react';
import {View,StyleSheet,Text}from 'react-native';
import {colors}from'../utils/colors';
import {TextInput}from'react-native-paper';
import {RoundedButton}from '../components/RoundedButton';
import {spacing} from '../utils/sizes';


export const Focusf=({addSubject})=>{
  const [subject,setSubject]=useState(null);
  console.log(subject);
  return(
     <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput onChangeText={(val)=>{setSubject(val)}} label="What would you like to focus on ?" style={styles.textInput}/>
      <View style={styles.button}>
      <RoundedButton title="+" size={50} onPress={()=>{addSubject(subject)}} />
      </View>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
   
  },
  inputContainer:{
    padding:spacing.sm,
    justifyContent:'top',
    flexDirection:'row'
  },
  textInput:{
     flex:1,
     marginRight:spacing.sm
  },
  button:{
  justifyContent:'center'
  }
});
