import LottieView from 'lottie-react-native'
import React from 'react'
import zero from '../../assets/animations/zero.json'

export default function Zero() {
  return (
    <LottieView
    source={zero}
    style={{width: 200, height: 200, alignSelf: 'center'}}
    autoPlay
  />
  )
}