import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [valor, setValor] = useState("");
  const [cont, setCont] = useState(""); 
  const [resultado, setResultado] = useState(0);

  function adicionar(n) {
    setValor((v) => v + n);
  }

  function limpar() {
    setValor("");
    setNum1("");
    setNum2("");
    setCont("");
    setResultado(0);
  }

  function apagar() {
    setValor((v) => v.slice(0, -1));
  }

  function escolherOperacao(op) {
    if (valor === "") return;
    setNum1(valor);
    setCont(op);
    setValor("");
  }

  function porcentagem() {
    if (valor === "") return;
    const p = Number(valor) / 100;
    if (Number.isNaN(p)) return;
    setValor(String(p));
  }

  function calcular() {
    if (num1 === "" || valor === "" || cont === "") return;

    setNum2(valor);

    let res = 0;
    const a = Number(num1);
    const b = Number(valor);

    if (cont === "+") res = a + b;
    if (cont === "-") res = a - b;
    if (cont === "*") res = a * b;
    if (cont === "/") res = a / b;

    if (res === Infinity || Number.isNaN(res)) {
      setResultado(0);
      setValor("Erro");
      return;
    }

    setResultado(res);
    setValor(String(res));
    setNum1("");
    setCont("");
    setNum2("");
  }

  function Botao({ label, onPress, variante, largo }) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        style={[
          styles.botao,
          variante === "cinza" && styles.cinza,
          variante === "laranja" && styles.laranja,
          variante === "escuro" && styles.escuro,
          largo && styles.largo,
        ]}
      >
        <Text
          style={[
            styles.textoBotao,
            variante === "cinza" && styles.textoPreto,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  const visor = valor !== "" ? valor : String(resultado);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.visorArea}>
        <Text style={styles.visorTexto} numberOfLines={1}>
          {visor}
        </Text>

        {cont !== "" && num1 !== "" ? (
          <Text style={styles.subTexto}>
            {num1} {cont === "*" ? "×" : cont === "/" ? "÷" : cont}
          </Text>
        ) : null}
      </View>

      <View style={styles.teclado}>
        <View style={styles.linha}>
          <Botao label="C" variante="cinza" onPress={limpar} />
          <Botao label="⌫" variante="cinza" onPress={apagar} />
          <Botao label="%" variante="cinza" onPress={porcentagem} />
          <Botao label="÷" variante="laranja" onPress={() => escolherOperacao("/")} />
        </View>

        <View style={styles.linha}>
          <Botao label="7" variante="escuro" onPress={() => adicionar("7")} />
          <Botao label="8" variante="escuro" onPress={() => adicionar("8")} />
          <Botao label="9" variante="escuro" onPress={() => adicionar("9")} />
          <Botao label="×" variante="laranja" onPress={() => escolherOperacao("*")} />
        </View>

        <View style={styles.linha}>
          <Botao label="4" variante="escuro" onPress={() => adicionar("4")} />
          <Botao label="5" variante="escuro" onPress={() => adicionar("5")} />
          <Botao label="6" variante="escuro" onPress={() => adicionar("6")} />
          <Botao label="-" variante="laranja" onPress={() => escolherOperacao("-")} />
        </View>

        <View style={styles.linha}>
          <Botao label="1" variante="escuro" onPress={() => adicionar("1")} />
          <Botao label="2" variante="escuro" onPress={() => adicionar("2")} />
          <Botao label="3" variante="escuro" onPress={() => adicionar("3")} />
          <Botao label="+" variante="laranja" onPress={() => escolherOperacao("+")} />
        </View>

        <View style={styles.linha}>
          <Botao label="0" variante="escuro" largo onPress={() => adicionar("0")} />
          <Botao label="." variante="escuro" onPress={() => adicionar(".")} />
          <Botao label="=" variante="laranja" onPress={calcular} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const SIZE = 78;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 14,
    justifyContent: "flex-end",
  },

  visorArea: {
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 18,
  },

  visorTexto: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "300",
  },

  subTexto: {
    color: "#777",
    fontSize: 18,
    marginTop: 6,
  },

  teclado: {
    paddingBottom: 18,
    gap: 12,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  botao: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  largo: {
    width: SIZE * 2 + 12, 
    borderRadius: SIZE / 2,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 28,
  },

  escuro: {
    backgroundColor: "#333333",
  },
  cinza: {
    backgroundColor: "#A5A5A5",
  },
  laranja: {
    backgroundColor: "#FF9F0A",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
  },
  textoPreto: {
    color: "#000",
  },
});
