import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const Item = ({product}) => {
    const [marked, setMarked] = useState(false)
  return (
    <View style={styles.line}>
        <Text style={marked ? styles.marked : styles.product}>{product}</Text>
        <BouncyCheckbox
        size={30}
        fillColor="lightblue"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "lightblue" }}
        onPress={() => {setMarked(!marked)}}
        />
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
    product: {
        fontSize: 30,
        margin: 2,
        marginRight: 10,
    },
    marked: {
        fontSize: 30,
        margin: 2,

        textDecorationLine: 'line-through'
    },
    line: {
        flex:1,
        flexDirection: 'row',
        height: 50,
        marginRight: 5,
        alignItems: 'center',
       }
})