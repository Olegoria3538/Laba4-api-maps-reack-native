import React from "react"
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native"
import Constants from "expo-constants"
import { Place } from "../atoms/place"
import { $result } from "../model/request"
import { useStore } from "effector-react"
import { setToggle } from "../model/places-open"

export const Places = () => {
  const { arrayAnswer, info } = useStore($result)
  if (!info) return null
  const formatArray = arrayAnswer.map(
    (x) => x.GeoObject.metaDataProperty.GeocoderMetaData.text
  )
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.header}>
          <Text>Результаты: {info.request}</Text>
          <TouchableWithoutFeedback onPress={() => setToggle(false)}>
            <Text style={styles.close}>×</Text>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          {[...formatArray, ...formatArray].map((x, i) => (
            <Place key={i} title={x} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: 10,
    paddingBottom: 100,
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  block: {
    flex: 0,
    marginTop: Constants.statusBarHeight + 15,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    position: "relative",
    justifyContent: "center",
    paddingLeft: 20,
  },
  close: {
    position: "absolute",
    right: 0,
    height: "100%",
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
})
