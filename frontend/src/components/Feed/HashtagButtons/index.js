import { Element, Button } from "./styles";
import { Text } from "react-native";

const ButtonElement = ({ onPress, backgroundColor, text }) => (
  
    <Button onPress={onPress}>
      <Element activeOpacity={0.5} style={{ backgroundColor }}>
        <Text style={{ fontFamily:'Poppins-Medium', fontSize: 14, color: '#424242', opacity: 100 }}>{text}</Text>
      </Element>
    </Button>
  );

export default ButtonElement;