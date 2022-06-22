import { StyleSheet, Text } from "react-native";


const Header = () => {
  return (
    <Text style={styles.textmain}> רשימת קניות </Text>
  )
}

export default Header;

const styles = StyleSheet.create({

    textmain: {
      fontSize: 30,
      alignItems: 'center',
    },
  
  });
