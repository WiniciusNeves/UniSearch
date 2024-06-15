import React, { useState, useEffect } from "react";
import { Image, View, Text, RefreshControl, ScrollView as RNScrollView } from "react-native";
import { Body, ImageView, Input, Container, ScrollViewBaixo, SearchIcon, ScrollView } from "./styles";
import ButtonElement from "../../components/Feed/HashtagButtons/index";
import QuadradoElement from "../../components/Feed/PostCard/index"; // Certifique-se de que o caminho está correto
import Recents from "../../components/Feed/Recents/index";
import Menu from "../../components/Feed/MenuFeed/index";
import { useAuth } from '../../contexts/AuthContext';
import api from "../../api/api";

export default function Feed() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/getAllPosts');
      if (response.status === 200) {
        setPosts(response.data || []);
        setLoading(false); // Marca o carregamento como completo após a carga dos dados
      } else {
        throw new Error('Received status other than 200 when fetching posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      setError('Error fetching posts. Please check your connection and try again.');
      setLoading(false); // Importante marcar o carregamento como completo mesmo em caso de erro
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts();
  };

  return (
    <Body>
      <ImageView>
        <Image
          source={require('../../assets/images/unicuritiba.png')}
          style={{ width: 266, height: 47 }}
          resizeMode="cover"
        />
      </ImageView>
      <View>
        <Input placeholder="Clique para pesquisar..." placeholderTextColor="#A7A7A7" style={{ textAlign: 'left', paddingLeft: 20, paddingRight: 70 }} />
        <SearchIcon name="search" style={{ position: 'absolute', right: 45, top: -135, color: '#35B6B4' }} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', paddingLeft: 20 }}>
        <Container>
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#avisos'} />
          <ButtonElement backgroundColor={'#A09FC3'} text={'#eventos'} />
          <ButtonElement backgroundColor={'#DECBB5'} text={'#comodidades'} />
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#atléticas'} />
        </Container>
      </ScrollView>
      <ScrollViewBaixo vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column' }} style={{ maxHeight: 450 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        {user && (
          <Text style={{ color: '#00345C', fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 20, marginBottom: 10 }}>
            Meu Post
          </Text>
        )}
        {user && (
          <RNScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }} style={{ position: 'relative', top: 1, left: -20, maxWidth: 9999 }}>
            {posts.length > 0 && posts.map(post => (
              Array.isArray(post.postType) && post.postType.map(item => (
                <QuadradoElement
                  key={`${post.id}-${item.id}`}
                  id={post.id}
                  foto={item.foto}
                  titulo={item.nome}
                  dataInicio={item.dataInicio}
                  username={user.username}
                  userFoto={user.foto}
                />
              ))
            ))}
          </RNScrollView>
        )}
        <Text style={{ color: '#00345C', fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 20, marginBottom: 10 }}>
          Recentes
        </Text>
        {posts.length > 0 && posts.map(post => (
          Array.isArray(post.postType) && post.postType.map(item => (
            <Recents 
              key={`${post.id}-${item.id}`} 
              foto={item.foto} 
              title={item.nome} 
              id={post.id} 
            />
          ))
        ))}
      </ScrollViewBaixo>
      <Menu />
    </Body>
  );
}
