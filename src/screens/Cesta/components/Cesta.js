import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Texto from '../../../components/Texto';
import Detalhes from './Detalhes';
import Topo from './Topo';
import Item from './Item';

const Cesta = ({topo, detalhes, itens}) => {
  //paramentros de mocks 'cesta' {...mocks} na chamada do componente em App.js
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;
