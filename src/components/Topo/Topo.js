import React, {useEffect, useState} from 'react';
import Texto from '../Texto';
import {Image, StyleSheet, View} from 'react-native';
import logoOrgs from '../../../assets/logoOrgs.png';
import {carregaTopo} from '../../services/carregaDados';

export default function Topo() {
  const [boasVindas, setBoasVindas] = useState('');
  const [legenda, setLegenda] = useState('');

  useEffect(() => {
    const retorno = carregaTopo();
    setBoasVindas(retorno.boasVindas);
    setLegenda(retorno.legenda);
  }, []);
  return (
    <View style={styles.topo}>
      <Image source={logoOrgs} style={styles.imagem} />
      <Texto style={styles.boasVindas}>{boasVindas}</Texto>
      <Texto style={styles.legenda}>{legenda}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
