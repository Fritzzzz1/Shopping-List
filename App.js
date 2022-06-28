import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ShoppingList from './Components/ShoppingList';
import SearchBar from './Components/SearchBar';
import NavBar from './Components/NavBar';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Header/>
        <ShoppingList/>
        <SearchBar/>
      </View>
      <NavBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8AAAE5',
    alignItems: 'center',
    flex: 1,
  },

  page: {
    marginTop: 40,
    // backgroundColor: '#9dedad',
    // backgroundColor: '#6fffe9',
    height: 500,
    alignItems: 'center',
    justifyContent:'center'
  },

});
