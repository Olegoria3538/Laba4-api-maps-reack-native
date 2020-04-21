import React, { useState } from "react"
import { StyleSheet, Dimensions, View, TextInput } from "react-native"
import MapView from "react-native-maps"

export default function App() {
  const [text, setText] = useState<string>("")
  const [focus, setFocus] = useState<boolean>(false)
  return (
    <>
      <MapView style={styles.mapStyle} />
      <TextInput
        style={{ ...styles.input, bottom: focus ? 50 : 0 }}
        placeholder="Поиск"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        onFocus={() => setFocus(true)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    position: "absolute",
    height: 50,
    width: "100%",
    paddingLeft: 20,
  },
  mapStyle: {
    flex: 1,
  },
})
