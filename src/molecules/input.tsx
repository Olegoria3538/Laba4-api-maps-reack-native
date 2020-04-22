import React, { useState, useEffect } from "react"
import { StyleSheet, View, TextInput, Keyboard, Button } from "react-native"
import { getData } from "../model/request"
import { setToggle } from "../model/places-open"

export const Input = () => {
  const [text, setText] = useState<string>("")
  const [focus, setFocus] = useState<boolean>(false)

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardShow)
    Keyboard.addListener("keyboardDidHide", keyboardHide)

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardShow)
      Keyboard.removeListener("keyboardDidHide", keyboardHide)
    }
  }, [])

  const keyboardShow = () => setFocus(true)
  const keyboardHide = () => setFocus(false)

  return (
    <View style={styles.downBar}>
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      {focus && (
        <View style={styles.button}>
          <Button
            title="Поиск"
            onPress={() => {
              getData(text)
              setToggle(true)
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    paddingTop: 10,
  },
  downBar: {
    backgroundColor: "#fff",
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  input: {
    height: 50,
    paddingLeft: 20,
  },
  mapStyle: {
    flex: 1,
  },
})
