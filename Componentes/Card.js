import React from 'react';
import { View, Image, Text } from 'react-native';


import Foto from '../assets/bkFoto.png';
import estilos from '../Estilos';

export default function Card() {
  return (
    <View style={ estilos.container2 }>
      <View style={ estilos.box }>
        <Image source={ Foto } style={ estilos.fotoCapa } />
        <Text style={ estilos.nome }>Abebe Bikila Costa Santos</Text>
        <Text style={ estilos.paragrafo }> Rapper, escritor e compositor brasileiro </Text>
      </View>
    </View>
  );
}