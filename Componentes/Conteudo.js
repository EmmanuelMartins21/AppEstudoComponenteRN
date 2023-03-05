import React from 'react';
import { View, Text, Image } from 'react-native';

import Album from '../assets/Album.png';
import estilos from '../Estilos';

export default function Conteudo() {
  return (
    <View style={ estilos.containerCorpo }>
      <Text style={ estilos.tituloCorpo }>Sobre o Rapper</Text>

      <Text style={ estilos.subtitulo }>Sua vida</Text>
      <Text style={ estilos.paragrafo }>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
      <Text style={ estilos.paragrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>

      <Text style={ estilos.subtitulo }>Início da carreira</Text>
      <Text style={ estilos.paragrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image source={ Album } style={ estilos.imagem }/>
    </View>
  )
}