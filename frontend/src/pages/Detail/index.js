import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Body, ImageView, Image, Arrow, BackButton, Body2, Icones, ScrollView } from './styles';
import api from '../../api/api';
import Video from 'react-native-video';
import { useAuth } from '../../contexts/AuthContext'; // Importe useAuth do contexto de autenticação

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth(); // Use o hook useAuth para acessar o contexto de autenticação

  const fetchPostById = async () => {
    try {
      const response = await api.get(`/getPostById/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar o post:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPostById();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchPostById();
  }, [id]);

  if (loading || !post) {
    return (
      <Body>
        <Text>Carregando...</Text>
      </Body>
    );
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/deletePost/${id}`);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Feed' }]
      });
    } catch (error) {
      console.error('Erro ao deletar o post:', error);
    }
  };

  return (
    <>
      <Body>
        <ImageView>
          {post.specificPost.foto && (
            <Image source={{ uri: post.specificPost.foto }} />
          )}
        </ImageView>
        <BackButton onPress={() => navigation.goBack()}>
          <Arrow name="arrowleft" size={25} />
        </BackButton>
      </Body>

      <Body2>
        {user?.role === 'admin' && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 20, position: 'absolute', right: 20, top: -40 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
              <Icones name="edit" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Icones name="delete" size={25} />
            </TouchableOpacity>
          </View>
        )}

        <ScrollView
          style={{ paddingHorizontal: 20 , position: 'relative', top: -20}}
          vertical={true}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
        >
          <View style={{ marginTop: 40, paddingHorizontal: 20  }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19202D', textAlign: 'center' }}>
              {post.specificPost.nome}
            </Text>
          </View>

          {post.user && (
            <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20, marginLeft: 50, marginBottom: 30 }}>
              <Text style={{ fontSize: 16, color: '#19202D' }}>
                {post.user[0].username}
              </Text>
              {post.specificPost.data_inicio && (
                <Text style={{ fontSize: 16, marginLeft: 10, color: '#19202D' }}>
                  {post.specificPost.data_inicio}
                </Text>
              )}
            </View>
          )}

          <View>
            <Text style={{ fontSize: 16, color: '#19202D' }}>
              {post.specificPost.descricao}
            </Text>

            {post.specificPost?.endereco && (
              <Text style={{ fontSize: 16, color: '#19202D', marginTop: 20 }}>
                Endereço: {post.specificPost.endereco}
              </Text>
            )}
            {post.specificPost?.cidade && post.specificPost?.uf && (
              <Text style={{ fontSize: 16, color: '#19202D' }}>
                Cidade: {post.specificPost.cidade}, {post.specificPost.uf}
              </Text>
            )}
            {post.specificPost?.cep && (
              <Text style={{ fontSize: 16, color: '#19202D' }}>
                CEP: {post.specificPost.cep}
              </Text>
            )}
            {post.specificPost?.complemento && (
              <Text style={{ fontSize: 16, color: '#19202D' }}>
                Complemento: {post.specificPost.complemento}
              </Text>
            )}
            {post.specificPost?.email_contato && (
              <Text style={{ fontSize: 16, color: '#19202D' }}>
                Email: {post.specificPost.email_contato}
              </Text>
            )}
          </View>

          {post.specificPost.video && (
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <Video
                source={{ uri: post.specificPost.video }}
                style={{ width: 300, height: 200 }}
                controls={true}
                resizeMode="contain"
                playInBackground={false}
                paused={true}
              />
            </View>
          )}
        </ScrollView>
      </Body2>
    </>
  );
};

export default DetailScreen;
