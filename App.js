import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MenuButton from './Components/MenuButton';
import { example } from './data/exampleList';
import Item from './Components/Item';
import SearchBar from './Components/SearchBar';

export default function App() {
  console.log(example)
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.textmain}> רשימת קניות </Text>
        <ScrollView contentContainerStyle = {styles.frame}>
          {example.map((item) => {
            return (<Item key={item} product={item}/>)
          })}
        </ScrollView>
        <SearchBar/>
        <View style={styles.navbar}>
          <MenuButton title='חדש'/>
          <MenuButton title='רגיל'/>
          <MenuButton title='הסטוריה'/>
          <MenuButton title='עריכה'/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6fffe9',
    alignItems: 'center',
  },
  textmain: {
    fontSize: 30,
    alignItems: 'center',
  },
  textsecond: {
    fontSize: 25,
  },
  page: {
    marginTop: 40,
    // backgroundColor: '#9dedad',
    alignItems: 'center',
    justifyContent:'center'
  },
  frame: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 310,
    height: 420,
    contentOffset: {x:10, y:10},
  },
  navbar: {
    backgroundColor: '#FB836F',
    borderWidth: 1,
    borderColor: 'black',
    height: 150,
    width: 375,
    flex: 1,
    flexDirection: 'row',
    
  },

});
