import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from "../../api/api";
import { Input } from '../Auth/styles';
import { BackButton } from '../MenuResgister/styles';
import { Arrow } from '../Suporte/styles';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

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

                if (fetchedPost && fetchedPost.specificPost) {
                    const sp = fetchedPost.specificPost;
                    setTitle(sp.nome || '');
                    setDescricao(sp.descricao || '');
                    setEmail_Contato(sp.email_contato || '');
                    setEndereco(sp.endereco || '');
                    setCidade(sp.cidade || '');
                    setCep(sp.cep || '');
                    setUf(sp.uf || '');
                    setComplemento(sp.complemento || '');
                    setDataInicio(sp.data_inicio || '');
                    setDataFim(sp.data_fim || '');
                    setMediaUri(sp.foto || null);
                    setVideoUri(sp.video || null);
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

   const pickImage = () => {
     launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
       if (response.didCancel) {
         console.log('User cancelled image picker');
       } else if (response.errorCode) {
         console.log('ImagePicker Error: ', response.errorMessage);
       } else if (response.assets && response.assets.length > 0) {
         setMediaUri(response.assets[0].uri);
       }
     });
   };
   
   const pickVideo = () => {
     launchImageLibrary({ mediaType: 'video', quality: 1 }, (response) => {
       if (response.didCancel) {
         console.log('User cancelled video picker');
       } else if (response.errorCode) {
         console.log('VideoPicker Error: ', response.errorMessage);
       } else if (response.assets && response.assets.length > 0) {
         setVideoUri(response.assets[0].uri);
       }
     });
   };

    const handleUpdate = async () => {
      try {
        const formData = new FormData();
        formData.append('nome', title);
        formData.append('descricao', descricao);
        formData.append('email_contato', email_contato);
        formData.append('endereco', endereco);
        formData.append('uf', uf);
        formData.append('complemento', complemento);
        formData.append('cidade', cidade);
        formData.append('cep', cep);
        formData.append('data_inicio', data_inicio);
        formData.append('data_fim', data_fim);
    
        if (mediaUri) {
          formData.append('foto', {
            uri: mediaUri,
            type: 'image/jpeg',
            name: 'image.jpg',
          });
        }
        if (videoUri) {
          formData.append('video', {
            uri: videoUri,
            type: 'video/mp4',
            name: 'video.mp4',
          });
        }
    
        const response = await api.put(`/updatePost/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        if (response.status === 200) {
          console.log('Resposta da API:', response.data);
          navigation.navigate('Feed');
        } else {
          console.error('Erro na API:', response);
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status code other than 2xx
          console.error('Erro na API:', error.response.data);
          console.error('Status da resposta:', error.response.status);
          console.error('Headers da resposta:', error.response.headers);
        } else if (error.request) {
          // No response was received
          console.error('Nenhuma resposta recebida:', error.request);
        } else {
          // Error in setting up the request
          console.error('Erro na configuração da solicitação:', error.message);
        }
        console.error('Configuração da solicitação:', error.config);
      }
    };

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
                    <Input
                        placeholder="Digite um email"
                        placeholderTextColor="#318280"
                        value={email_contato}
                        onChangeText={(text) => setEmail_Contato(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite um endereço"
                        placeholderTextColor="#318280"
                        value={endereco}
                        onChangeText={(text) => setEndereco(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite uma cidade"
                        placeholderTextColor="#318280"
                        value={cidade}
                        onChangeText={(text) => setCidade(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite um CEP"
                        placeholderTextColor="#318280"
                        value={cep}
                        onChangeText={(text) => setCep(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite uma UF"
                        placeholderTextColor="#318280"
                        value={uf}
                        onChangeText={(text) => setUf(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite um complemento"
                        placeholderTextColor="#318280"
                        value={complemento}
                        onChangeText={(text) => setComplemento(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite uma data de início"
                        placeholderTextColor="#318280"
                        value={data_inicio}
                        onChangeText={(text) => setDataInicio(text)}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Digite uma data de fim"
                        placeholderTextColor="#318280"
                        value={data_fim}
                        onChangeText={(text) => setDataFim(text)}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={pickImage} style={styles.button}>
                      <Text style={styles.buttonText}>Selecionar Imagem</Text>
                    </TouchableOpacity>
                    {mediaUri && <Image source={{ uri: mediaUri }} style={styles.mediaPreview} />}
                    <TouchableOpacity onPress={pickVideo} style={styles.button}>
                      <Text style={styles.buttonText}>Selecionar Vídeo</Text>
                    </TouchableOpacity>
                    {videoUri && <Text source={{ uri: videoUri }} style={styles.videoPreview} />}
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
    mediaPreview: {
        marginTop: 10,
        width: 100,
        height: 100,
    },
});

export default Edit;
