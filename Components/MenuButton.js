import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const MenuButton = ({onPress, title}) => {
    
    return (
        <TouchableOpacity style={styles.menubutton} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
      )
};

export default MenuButton;

const styles = StyleSheet.create({
    menubutton: {
      borderWidth: 1,
      borderColor: 'black',
      width: 94,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttontext: {
        color: 'darkblue',
        fontSize: 15,
    }
  });

