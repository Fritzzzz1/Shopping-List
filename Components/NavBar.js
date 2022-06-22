import { View } from "react-native";
import MenuButton from "./MenuButton";
import { StyleSheet } from "react-native";
const NavBar = () => {
  return (
    <View style={styles.navbar}>
        <MenuButton title='הסטוריה'/>
        <MenuButton title='עריכה'/>
        <MenuButton title='ברגיל'/>
        <MenuButton title='נקה'/>
    </View>
  )
}

export default NavBar;

const styles = StyleSheet.create({

    navbar: {
      backgroundColor: '#FB836F',
      borderWidth: 1,
      borderColor: 'black',
      height: 30,
      width: 375,
      flex: 1,
      flexDirection: 'row',
      
    },
  
  });