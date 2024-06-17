import React, { useState, useEffect } from "react";
import { Image, View, Text, RefreshControl, ScrollView as RNScrollView } from "react-native";
import { Body, ImageView, Input, Container, ScrollViewBaixo, SearchIcon, ScrollView } from "./styles";
import ButtonElement from "../../components/Feed/HashtagButtons/index";
import QuadradoElement from "../../components/Feed/PostCard/index";
import Recents from "../../components/Feed/Recents/index";
import Menu from "../../components/Feed/MenuFeed/index";
import { useAuth } from '../../contexts/AuthContext';
import api from "../../api/api";

export default function Feed() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [searchTerm, posts, selectedFilter]);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/getAllPosts');
      if (response.status === 200) {
        setPosts(response.data || []);
        setFilteredPosts(response.data || []);
        setLoading(false);
      } else {
        throw new Error('Received status other than 200 when fetching posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      setError('Error fetching posts. Please check your connection and try again.');
      setLoading(false);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts();
  };

  const filterPosts = () => {
    let filtered = posts;

    if (searchTerm !== '') {
      filtered = filtered.filter(post =>
        post.postType.some(item =>
          item.nome.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedFilter !== '') {
      filtered = filtered.filter(post =>
        post.post_type.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    setFilteredPosts(filtered);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedFilter('');
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
        <Input placeholder="Clique para pesquisar..." placeholderTextColor="#A7A7A7" style={{ paddingLeft: 20, paddingRight: 70, color: '#A7A7A7' }} onChangeText={setSearchTerm} value={searchTerm} />
        <SearchIcon name="search" style={{ position: 'absolute', right: 45, top: -135, color: '#35B6B4' }} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', paddingLeft: 20 }}>
        <Container>
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#avisos'} onPress={() => handleFilterChange('Aviso')} />
          <ButtonElement backgroundColor={'#A09FC3'} text={'#eventos'} onPress={() => handleFilterChange('Eventos')} />
          <ButtonElement backgroundColor={'#DECBB5'} text={'#comodidades'} onPress={() => handleFilterChange('Comodidades')} />
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#atléticas'} onPress={() => handleFilterChange('Atletica')} />
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
                  status={post.status}
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
        {filteredPosts.length > 0 && filteredPosts.map(post => (
          Array.isArray(post.postType) && post.postType.map(item => (
            <Recents
              key={`${post.id}-${item.id}`}
              status={post.status}
              foto={item.foto}
              title={item.nome}
              id={post.id}
            />
          ))
        ))}
      </ScrollViewBaixo>
      <Menu resetFilters={resetFilters} />
    </Body>
  );
}
