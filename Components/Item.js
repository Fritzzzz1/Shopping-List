import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const Item = ({product}) => {
    const [marked, setMarked] = useState(false)
  return (
    <View style={styles.line}>
        <BouncyCheckbox
        size={15}
        fillColor="lightgreen"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "green" }}
        onPress={() => {setMarked(!marked)}}
        />
        <Text style={marked ? styles.marked : styles.product}>{product}</Text>
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
    product: {
        fontSize: 15,
        height: 30,
        margin: 2,
    },
    marked: {
        fontSize: 15,
        height: 30,
        margin: 2,

        textDecorationLine: 'line-through'
    },
    line: {
        flex:1,
        flexDirection: 'row',
        height: 30,
        lineHeight: 30,
    }
})