import React from 'react';
import { View, Text } from 'react-native';

import estilos from '../Estilos';

export default function Cabecalho() {
  return (
    <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Rapper Brasileiro</Text>
    </View>
  )
}