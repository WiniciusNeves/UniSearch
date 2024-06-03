import { Quadrado, AlignCircle, Circle, Text } from "./styles";
import { View } from "react-native";

const QuadradoElement = () => (
    <Quadrado>
      <Text style={{ color: '#00345C', fontSize: 15, marginLeft: 20, marginTop: 10, marginBottom: 120, opacity: 100 }}>
        images
      </Text>
      <Text style={{ color: '#00345C', fontSize: 15, left: 20, opacity: 100 }}>
        Titulo
      </Text>
      <AlignCircle>
        <Circle />
        <View style={{ marginRight: 30}}>
          <Text style={{ color: '#19202D', fontSize: 12, opacity: 100 }}>
            nome de usuario
          </Text>
          <Text style={{ color: '#9397A0', fontSize: 12, fontFamily: 'Poppins-Regular', opacity: 100 }}>
            00/00/0000
          </Text>
        </View>
      </AlignCircle>
    </Quadrado>
  );
  
export default QuadradoElement;