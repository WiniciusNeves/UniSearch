import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from "../../api/api";
import { Input } from '../Auth/styles';
import { BackButton } from '../MenuResgister/styles';
import { Arrow } from '../Suporte/styles';
import { Button } from '../Load/styles';

const Edit = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email_contato, setEmail_Contato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');
    const [data_inicio, setDataInicio] = useState('');
    const [data_fim, setDataFim] = useState('');
    const [mediaUri, setMediaUri] = useState(null);
    const [videoUri, setVideoUri] = useState(null);


    useEffect(() => {
        const fetchPostById = async () => {
            try {
                const response = await api.get(`/getPostById/${id}`);
                const fetchedPost = response.data;
                setPost(fetchedPost);

                if (fetchedPost && fetchedPost.specificPost && fetchedPost.specificPost.nome) {
                    setTitle(fetchedPost.specificPost.nome);
                    setDescricao(fetchedPost.specificPost.descricao);
                    setEmail_Contato(fetchedPost.specificPost.email_contato);
                    setEndereco(fetchedPost.specificPost.endereco);
                    setCidade(fetchedPost.specificPost.cidade);
                    setCep(fetchedPost.specificPost.cep);
                    setUf(fetchedPost.specificPost.uf);
                    setComplemento(fetchedPost.specificPost.complemento);
                    setDataInicio(fetchedPost.specificPost.data_inicio);
                    setDataFim(fetchedPost.specificPost.data_fim);
                    setMediaUri(fetchedPost.specificPost.media);
                    setVideoUri(fetchedPost.specificPost.video);
                } else {
                    console.warn('Nome não encontrado em specificPost');
                }
            } catch (error) {
                console.error('Erro ao carregar o post:', error);
                setError(error);
            }
        };

        fetchPostById();
    }, [id]);

    const handleUpdate = async () => {
        try {
            const response = await api.put(`/updatePost/${id}`, {
                nome: title,
                name: title,
                descricao: descricao,
                email_contato: email_contato,
                endereco: endereco,
                uf: uf,
                complemento: complemento,
                cidade: cidade,
                cep: cep,
                data_inicio: data_inicio,
                data_fim: data_fim,
                media: mediaUri,
                video: videoUri
            });
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao atualizar o post:', error);
            setError(error);
        }
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Erro ao carregar o post: {error.message}</Text>
            </View>
        );
    }

    if (!post) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <>
            <BackButton>
                <Arrow onPress={() => navigation.goBack()} name="arrowleft" size={30} color="#318280" />
            </BackButton>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Input
                        placeholder="Digite um título"
                        placeholderTextColor="#318280"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite uma descrição"
                        placeholderTextColor="#318280"
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                        style={styles.input}
                    />
                    {email_contato !== null && (
                        <Input
                            placeholder="Digite um email"
                            placeholderTextColor="#318280"
                            value={email_contato}
                            onChangeText={(text) => setEmail_Contato(text)}
                            style={styles.input}
                        />
                    )}
                    {endereco !== null && (
                        <Input
                            placeholder="Digite um endereço"
                            placeholderTextColor="#318280"
                            value={endereco}
                            onChangeText={(text) => setEndereco(text)}
                            style={styles.input}
                        />
                    )}
                    {uf !== null && (
                        <Input
                            placeholder="Digite uma UF"
                            placeholderTextColor="#318280"
                            value={uf}
                            onChangeText={(text) => setUf(text)}
                            style={styles.input}
                        />
                    )}
                    {complemento !== null && (
                        <Input
                            placeholder="Digite um complemento"
                            placeholderTextColor="#318280"
                            value={complemento}
                            onChangeText={(text) => setComplemento(text)}
                            style={styles.input}
                        />
                    )}
                    {data_inicio !== null && (
                        <Input
                            placeholder="Digite uma data de início"
                            placeholderTextColor="#318280"
                            value={data_inicio}
                            onChangeText={(text) => setDataInicio(text)}
                            style={styles.input}
                        />
                    )}
                    {data_fim !== null && (
                        <Input
                            placeholder="Digite uma data de fim"
                            placeholderTextColor="#318280"
                            value={data_fim}
                            onChangeText={(text) => setDataFim(text)}
                            style={styles.input}
                        />
                    )}



                    <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                        <Text style={styles.buttonText}>Atualizar Postagem</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        backgroundColor: '#FFF',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
        color: '#19202D',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#DDDDDD',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#19202D',
    },
});

export default Edit;
