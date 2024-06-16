import React from 'react';
import { Text, Recentes, Retangulo, ImageView } from "./styles";
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Recents = ({ foto, title, id , postId}) => {
    const navigation = useNavigation();
    if (!title) {
        return <Text>Nenhum título para exibir</Text>;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id })}>
            <Recentes>
                <Retangulo>
                    <ImageView>
                        {foto && <Image source={{ uri: foto }} style={{ width: 70, height: 70, borderRadius: 10 }} />}
                    </ImageView>
                    <Text style={{ color: "#626262", fontWeight: 'bold', fontSize: 12, marginLeft: 100, width: 180, height: 20, position: 'absolute', left: 10 }} numberOfLines={1} ellipsizeMode="tail">{title}</Text>

                </Retangulo>
            </Recentes>
        </TouchableOpacity>
    );
};

export default Recents;

