import React, {useMemo, useReducer} from 'react';
import Texto from '../../../components/Texto';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({
  nome,
  imagem,
  distancia,
  estrelas,
  aoPrecionar,
}) {
  const [selecionado, inverterSelecionado] = useReducer(
    seleciona => !seleciona,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={styles.cartao} onPress={aoPrecionar}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.informacoes}>
        <View>
          <Texto style={styles.nome}>{nome}</Texto>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Texto style={styles.distancia}>{distanciaTexto}</Texto>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //sombra android
    elevation: 4,

    //sombra iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
