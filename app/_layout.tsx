import { useRootNavigationState } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Calculadora() {

  const [num1, setNum1] = useState ("");
  const [num2, setNum2] = useState ("");
  const [ valor, setValor] = useState ("");
  const [cont, setCont] = useState (0);
  const [resultado, setResultado] = useState (0);

  function adicionar(numero){
    setValor(valor + numero)
  }

  function numero(somar){
    const somar = valor;
    const string = valor.toString();
  }
  

  const somar = () => setCont(Number(valor) + Number(valor));

  const diminuir = () => setCont (Number(valor) - Number(valor));

  const multiplicar = () => setCont (Number(valor) * Number(valor));

  const dividir = () => setCont (Number(valor) / Number(valor));

  const raiz = () => setCont (Number(valor) * Number(valor));


  return(

    <SafeAreaView> 

      <View>
     <TouchableOpacity onPress={() => adicionar('0')}>
        <Text> 0 </Text>
      </TouchableOpacity>
      </View> 

      <View>
     <TouchableOpacity onPress={() => adicionar('1')}>
        <Text> 1 </Text>
      </TouchableOpacity>
      </View> 

      <View>
     <TouchableOpacity onPress={() => adicionar('2')}>
        <Text> 2 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('3')}>
        <Text> 3 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('4')}>
        <Text> 4 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('5')}>
        <Text> 5 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('6')}>
        <Text> 6 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('7')}>
        <Text> 7 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('8')}>
        <Text> 8 </Text>
      </TouchableOpacity>
      </View>

      <View>
     <TouchableOpacity onPress={() => adicionar('9')}>
        <Text> 9 </Text>
      </TouchableOpacity>
      </View>


      <View>
      <TouchableOpacity onPress={(somar) => adicionar('+')}>
        <Text> + </Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={(diminuir) => adicionar('-')}>
        <Text> - </Text>
      </TouchableOpacity>
      </View>

        <View>
      <TouchableOpacity onPress={(multiplicar) => adicionar('*')}>
        <Text> * </Text>
      </TouchableOpacity>
      </View>

        <View>
      <TouchableOpacity onPress={(dividir) => adicionar('/')}>
        <Text> / </Text>
      </TouchableOpacity>
      </View>

        <View>
      <TouchableOpacity onPress={(raiz) => adicionar('r')}>
        <Text> r </Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={() => adicionar('=')}>
        <Text> = </Text>
      </TouchableOpacity>
      </View>

      <Text>Resultado: {valor} </Text>

      
    </SafeAreaView>
  )



}


