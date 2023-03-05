import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    padding: 15,
  },
  viewGeral: {
    paddingTop: 5,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: "center",
    flex: 1,
    backgroundColor: '#0c4491',
  },
  titulo: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: "bold",
    color: '#fff'
  },
   container2: {
    alignItems: "center",
    backgroundColor: '#0a1c35',
    paddingVertical: 20,
  },
  box: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,

  },
  fotoCapa: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nome: {
    marginTop: 10,
    fontSize: 22,
  },
  paragrafo: {
    margin: 10,
  },
  containerCorpo: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 480
  },
  tituloCorpo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragrafo: {
    marginTop: 6,
  },
  imagem: {
    width: 250,
    height: 250,
    marginTop: 10,
  }
});

export default estilos;
