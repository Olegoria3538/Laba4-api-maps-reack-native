import React from "react"
import { Input } from "../molecules/input"
import { $toggle } from "../model/places-open"
import { useStore } from "effector-react"
import { Places } from "../molecules/places"
import { Maps } from "../molecules/map"

export const Main = () => {
  const toggle = useStore($toggle)
  return (
    <>
      <Maps />
      {toggle && <Places />}
      <Input />
    </>
  )
}
