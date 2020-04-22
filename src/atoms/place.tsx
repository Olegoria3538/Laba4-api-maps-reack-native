import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"

interface PlaceType {
  text: string
  onClick: Function
}

export const Place: React.FC<PlaceType> = ({ text, onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: "#DADCE0",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 12,
  },
})
