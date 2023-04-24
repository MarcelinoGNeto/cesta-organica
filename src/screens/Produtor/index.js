import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Cesta from './componentes/Cesta';
import useTextos from '../../hooks/useTextos';
import Texto from '../../components/Texto';
import VoltarSVG from '../../assets/voltar.svg';

export default function Produtor() {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const {tituloProdutor, tituloCesta} = useTextos;
  const {nome, imagem, cestas} = route.params;

  const goBack = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {/* <Texto>voltar</Texto> */}
        <VoltarSVG color="black" style={styles.voltar} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={goBack}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={(nome, imagem)} />}
      style={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});
