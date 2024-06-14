import React from 'react';
import { Text, Recentes, Retangulo, ImageView } from "./styles";
import { Image, TouchableOpacity } from 'react-native';

const Recents = ({ foto, title, id }) => {
    if (!title) {
        return <Text>Nenhum título para exibir</Text>;
    }

    return (
        <TouchableOpacity onPress={() => console.log(id)}>
            <Recentes>
                <Retangulo>
                    <ImageView>
                        {foto && <Image source={{ uri: foto }} style={{ width: 70, height: 70, borderRadius: 10 }} />}
                    </ImageView>
                    <Text style={{ color: "#626262", fontWeight: 'bold', fontSize: 12, marginLeft: 100, width: 240 }}>{title}</Text>
                </Retangulo>
            </Recentes>
        </TouchableOpacity>
    );
};

export default Recents;

