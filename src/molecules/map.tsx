import React from "react"
import { StyleSheet } from "react-native"
import MapView from "react-native-maps"
import { MarkerBuild } from "../atoms/markers"
import { useStore } from "effector-react"
import { $select } from "../model/select-place"

export const Maps = () => {
  const data = useStore($select)
  return (
    <MapView
      style={styles.mapStyle}
      region={{
        latitude: data?.latitude ? data?.latitude : 55.753215,
        longitude: data?.longitude ? data?.longitude : 37.622504,
        latitudeDelta: 0.6,
        longitudeDelta: 0.6,
      }}
    >
      <MarkerBuild data={data} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
})
