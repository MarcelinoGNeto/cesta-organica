import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import estrela from '../../../assets/estrela.png';
import estrelaCinza from '../../../assets/estrelaCinza.png';

export default function Estrela({onPress, desabilitada, preenchida, grande}) {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  const estilo = estilosFuncao(grande);

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={estilo.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
