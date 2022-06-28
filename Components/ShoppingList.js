import { ScrollView } from "react-native";
import Item from "./Item";
import { example } from "../data/exampleList";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const ShoppingList = () => {
  return (
<View style={styles.container}>
    <ScrollView contentContainerStyle = {styles.frame}>
    {example.map((item) => {
      return (<Item key={item} product={item}/>)
    })}
    </ScrollView>
  </View>
  )
}

export default ShoppingList;

const styles = StyleSheet.create({
  container:{
    height:350,
  },
  frame: {
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
    width: 310,
  },
  
  });