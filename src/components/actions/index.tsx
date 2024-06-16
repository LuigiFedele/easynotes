import { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

interface Props{
  filter: boolean;
  setFilter: (status: boolean) => void;
}

export default function Actions( { filter, setFilter }: Props) {
const [status,setStatus] = useState(filter)

  function handleAction(item: boolean){
    setStatus(item);
    setFilter(item);
  }

 return (
   <View style={styles.buttons}>
    <Pressable 
      style={[styles.button, !status && {backgroundColor: '#22c55e'}]} 
      onPress={ ()=> handleAction(false)}
    >
      <Text style={styles.buttonText}>Abertas</Text>
    </Pressable>

    <Pressable 
      style={[styles.button, status && {backgroundColor: '#22c55e'}]}
      onPress={ ()=> handleAction(true)}
    >
      <Text style={styles.buttonText}>Completas</Text>
    </Pressable>

   </View>
  );
}

const styles= StyleSheet.create({
  buttons: {
    flexDirection:'row',
    gap:8,
    marginTop:14,
    marginBottom:8,
  },
  button:{
    padding:4,
    borderRadius:4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonText:{
    color:'#FFF'
  },
})