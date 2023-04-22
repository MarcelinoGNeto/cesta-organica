import React from 'react';
import Texto from '../../../components/Texto';
import {FlatList, StyleSheet} from 'react-native';
import Produtor from './Produtor';
import useProdutores from './../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Texto style={styles.titulo}>{titulo}</Texto>
      </>
    );
  };

  const renderItem = ({item}) => <Produtor {...item} />;

  return (
    <FlatList
      data={lista}
      renderItem={renderItem}
      ListHeaderComponent={topoLista}
      keyExtractor={({nome}) => nome}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
