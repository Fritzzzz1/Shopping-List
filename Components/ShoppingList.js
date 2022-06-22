import { ScrollView } from "react-native";
import Item from "./Item";
import { example } from "../data/exampleList";
import { StyleSheet } from "react-native";

const ShoppingList = () => {
  return (
    <ScrollView contentContainerStyle = {styles.frame}>
    {example.map((item) => {
      return (<Item key={item} product={item}/>)
    })}
  </ScrollView>
  )
}

export default ShoppingList;

const styles = StyleSheet.create({

    frame: {
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      marginTop: 20,
      borderWidth: 1,
      borderColor: 'black',
      width: 310,
      height: 420,
      padding: 10,
    },
  
  });