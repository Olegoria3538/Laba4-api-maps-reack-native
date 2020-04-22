import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"

interface PlaceType {
  title: string
}

export const Place: React.FC<PlaceType> = ({ title }) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert("Страна", title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
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
