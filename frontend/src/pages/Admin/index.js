import React, { useEffect, useState } from "react";
import { Body, Body2, ImageView, Icone } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView as RNScrollView, RefreshControl, View } from "react-native";
import { Arrow } from "../Suporte/styles";
import { BackButton } from "../MenuResgister/styles";
import api from '../../api/api';
import { Text } from "../Load/styles";

const Admin = () => {
    const navigation = useNavigation();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await api.get('/getAllPosts');
            if (response.status === 200) {
                setPosts(response.data || []);
            } else {
                setError('Failed to fetch posts');
            }
        } catch (error) {
            setError('Error fetching posts: ' + error.message);
            console.error('Error fetching posts:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleRefresh();
    }, []);

    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchPosts();
        setRefreshing(false);
    };

    const handlePostLike = async (postId) => {
        try {
            const response = await api.put(`/updatePost/${postId}`, { status: 'aprovado' });
            if (response.status === 200) {
                handleRefresh();
            } else {
                setError('Failed to approve post');
            }
        } catch (error) {
            setError('Error approving post: ' + error.message);
            console.error('Error approving post:', error.message);
        }
    };

    const handlePostDesLike = async (postId) => {
        try {
            const response = await api.put(`/updatePost/${postId}`, { status: 'desaprovado' });
            if (response.status === 200) {
                handleRefresh();
            } else {
                setError('Failed to disapprove post');
            }
        } catch (error) {
            setError('Error disapproving post: ' + error.message);
            console.error('Error disapproving post:', error.message);
        }
    };

    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.goBack()}>
                    <Arrow name="arrowleft" />
                </BackButton>
                <ImageView>
                    <Image
                        source={require('../../assets/images/unicuritiba.png')}
                        resizeMode="cover"
                    />
                </ImageView>
            </Body>
            <Body2>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#424242', opacity: 100 }}>Menu do Admin</Text>
                <RNScrollView
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'column' }}
                    style={{ maxHeight: 450, width: '100%' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                >
                    <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {posts.map((post, index) => (
                            <View key={post.id} style={{ marginBottom: 20, width: '100%', paddingHorizontal: 20 }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#424242', opacity: 100 }}>
                                    Titulo: {post.postType[0].nome}
                                </Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#424242', opacity: 100 }}>
                                    Descrição: {post.postType[0].descricao}
                                </Text>
                                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#424242', opacity: 100 }}>
                                    Status: {post.status}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 , marginLeft: 80, marginRight: 80}}>
                                    <View style={{ borderWidth: 1, borderColor: '#2CC13A', padding: 10, borderRadius: 10, backgroundColor: '#2CC13A' }}>
                                        <Icone name="like2" style={{ color: 'white' }} onPress={() => handlePostLike(post.id)} />
                                    </View>
                                    <View style={{ borderWidth: 1, borderColor: 'red', padding: 10, borderRadius: 10, backgroundColor: '#FF0000' }}>
                                        <Icone name="dislike2" style={{ color: 'white' }} onPress={() => handlePostDesLike(post.id)} />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </RNScrollView>
            </Body2>
        </>
    );
}

export default Admin;
