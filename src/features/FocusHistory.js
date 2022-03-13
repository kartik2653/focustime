import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {colors} from '../utils/colors';

export const FocusHistory=({history})=>
{
  if(!history||!history.length)
 {
  return(
    <Text style={styles.title}>
    We haven't focused on anything yet !
    </Text>
  );
 }

 const renderItem = ({ item }) => (
    <Text style={styles.item}>-{item}</Text>
  );
  
 
 return(
  <View style={{flex:1}}>
  <Text style={styles.title}>
  Focused items will be shown here
  </Text>
  <FlatList
  data={history}
  renderItem={renderItem}
  
  />

  </View>
 );
}

const styles=StyleSheet.create({
  title:{
    color:colors.white,
    fontSize:16,
    padding:8,
    fontWeight:'bold',
   },
  item:{
    fontSize:16,
    color:'white',
    padding:8,
    flex:  0.3,
  }
});