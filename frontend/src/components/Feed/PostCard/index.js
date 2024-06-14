import React from "react";
import { View, Image } from "react-native";
import { Quadrado, AlignCircle, Circle, Text } from "./styles"; 

const QuadradoElement = ({ foto, titulo, dataInicio, username, userfoto }) => {
  if (!foto && !titulo && !data && !username && !userfoto) {
    return <Text>Nada para exibir :(</Text>;
  }

  return (
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
  );
};

export default QuadradoElement;
