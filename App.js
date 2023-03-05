import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Componentes/Cabecalho';
import Card from './Componentes/Card';
import Conteudo from './Componentes/Conteudo';

import estilos from './Estilos';

export default function App() {
  return (
    <View style={ estilos.viewGeral }>
      <Cabecalho/>
      <Card/>
      <Conteudo/>
    </View>
    
  );
}
