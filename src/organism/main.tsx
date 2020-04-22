import React from "react"
import { StyleSheet } from "react-native"
import MapView from "react-native-maps"
import { Input } from "../molecules/input"

export const Main = () => {
  return (
    <>
      <MapView style={styles.mapStyle} />
      <Input />
    </>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
})
