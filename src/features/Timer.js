import React,{useState} from 'react';
import { View, Text, StyleSheet ,Vibration} from 'react-native';
import {ProgressBar}from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import {sizes,spacing}from '../utils/sizes';
import {colors}from '../utils/colors';
import {Timing} from './Timing';
import { useKeepAwake } from 'expo-keep-awake';


export const Timer = ({ focusSubject,clearSubject,onTimerEnd}) => {
   useKeepAwake();
   const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    
  ];
  const onEnd=(reset)=>{
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset();
  onTimerEnd(focusSubject)
  }
  const[isStarted,setIsStarted]=useState(false);   
  const[progress,setProgress]=useState(1);
  const[minutes,setMinutes]=useState(0.1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
        minutes={minutes} 
        isPaused={!isStarted} 
        onProgress={(progress) => {setProgress(progress)}} 
        onEnd={onEnd} />
      <View style={{marginTop:40}}>
      <Text style={styles.title}>Focusing on :</Text>
      <Text style={styles.task}>{focusSubject}</Text>
      </View>
      </View>
      <View>
      <ProgressBar color={colors.progress} progress={progress} style={{height:8,margin:10}}/>
      </View>
      <View style={styles.timingWrapper}>
      <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonWrapper}>
      {!isStarted&&(<RoundedButton title="Start" onPress={()=>{setIsStarted(true)}}/>)}
      {isStarted&&(<RoundedButton title="Pause" onPress={()=>{setIsStarted(false)}}/>)}
     </View>
     <View style={styles.clearSubjectWrapper}>
     <RoundedButton title="-" size={50} onPress={clearSubject}/>
     </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'green'
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    //backgroundColor:'yellow',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
   paddingTop:40
  },
  title:{
   color:'white',
   fontWeight:'bold',
   textAlign:'center',
  },
  task:{
  color:'white',
  textAlign:'center'
  },
  timingWrapper:{
  flexDirection:'row',
  flex:0.1,
  paddingTop:spacing.xxl,
  },
  clearSubjectWrapper:{
  flexDirection:'row',
  justifyContent:'center'
  }
  
});
  