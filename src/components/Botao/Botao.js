import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../Texto";


const Botao = ({ title, onPress  }) => {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Texto style={styles.textoBotao}>{title}</Texto>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
      },
      textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
      }
})

export default Botao;