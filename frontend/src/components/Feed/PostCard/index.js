import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native"; // Importe useNavigation do React Navigation
import { Quadrado, AlignCircle, Circle } from "./styles"; // Importe os estilos necessários

const QuadradoElement = ({ foto, titulo, dataInicio, username, userfoto, postId, userId, id, status }) => {
  const navigation = useNavigation(); // Obtém o objeto de navegação do React Navigation
  if (postId !== userId) {
    return null;
  }

  if (!foto && !titulo && !dataInicio && !username && !userfoto) {
    return <Text>Nada para exibir :(</Text>;
  }
  if (status !== 'aprovado') {
    return null; // Retorna null se o post não estiver aprovado
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { id })}>
      <Quadrado>
        {foto && <Image source={{ uri: foto }} style={{ width: 200, height: 150, borderRadius: 10, marginTop: 20, marginLeft: 13 }} />}
        {titulo && (
          <Text style={{ color: "black", fontSize: 15, marginLeft: 20, marginTop: 10 }}>
            {titulo}
          </Text>
        )}

        <AlignCircle>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {userfoto && (
              <Circle source={{ uri: userfoto }} style={{ width: 40, height: 40, borderRadius: 20 }} />
            )}
            {username && (
              <View style={{ marginLeft: 5 }}>
                <Text style={{ color: "#00345C", fontSize: 12 }}>
                  {username}
                </Text>
                {dataInicio && (
                  <Text style={{ color: "#00345C", fontSize: 12 }}>
                    {dataInicio}
                  </Text>
                )}
              </View>
            )}
          </View>
        </AlignCircle>
      </Quadrado>
    </TouchableOpacity>

  );
};

export default QuadradoElement;
