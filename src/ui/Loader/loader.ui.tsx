import LottieView from 'lottie-react-native';
import React from 'react';
import car from '../../assets/animations/loader.json';
export default function Loader() {
  return (
    <LottieView
      source={car}
      style={{width: 200, height: 200, alignSelf: 'center'}}
      autoPlay
    />
  );
}
