import React from "react";
import Texto from "../../../components/Texto";
import { Image, StyleSheet, View } from "react-native";
import Botao from "../../../components/Botao/Botao";

const Detalhes = ({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
  //paramentros de detalhes {...detalhes} na chamada do componente em Cesta.js
}) => {
  
  const cliquei = () => {
    alert('Cliquei')
  }

  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <Botao title={botao} onPress={cliquei}/>
    </>
  );
};

const styles = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "bold",
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

export default Detalhes;
