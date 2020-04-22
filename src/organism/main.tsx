import React from "react"
import { StyleSheet } from "react-native"
import MapView from "react-native-maps"
import { Input } from "../molecules/input"
import { $toggle } from "../model/places-open"
import { useStore } from "effector-react"
import { Places } from "../molecules/places"

export const Main = () => {
  const toggle = useStore($toggle)
  return (
    <>
      <MapView style={styles.mapStyle} />
      <Input />
      {toggle && <Places />}
    </>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
})
