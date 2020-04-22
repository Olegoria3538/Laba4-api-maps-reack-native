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
import { Preloader } from "../atoms/preloader"
import { setSelect } from "../model/select-place"

export const Places = () => {
  const { arrayAnswer, info } = useStore($result)
  if (!info) return <Preloader />
  const formatArray = arrayAnswer.map((x) => ({
    description: x.GeoObject.metaDataProperty.GeocoderMetaData.text,
    title: x.GeoObject.name,
    pos: x.GeoObject.Point.pos,
  }))
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.header}>
          <Text>Результаты по: {info.request}</Text>
          <TouchableWithoutFeedback onPress={() => setToggle(false)}>
            <Text style={styles.close}>×</Text>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          {Number(info.found) ? (
            formatArray.map((x, i) => (
              <Place
                key={i}
                text={x.description}
                onClick={() => {
                  setSelect({
                    description: x.description,
                    title: x.title,
                    pos: x.pos,
                  })
                  setToggle(false)
                }}
              />
            ))
          ) : (
            <Text style={{ padding: 20 }}>Мы ничего не нашли</Text>
          )}
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
