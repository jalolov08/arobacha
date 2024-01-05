import LottieView from 'lottie-react-native'
import React from 'react'
import error from '../../assets/animations/error.json'
export default function Error() {
  return (
    <LottieView
    source={error}
    style={{width: 200, height: 200, alignSelf: 'center'}}
    autoPlay
  />
  )
}