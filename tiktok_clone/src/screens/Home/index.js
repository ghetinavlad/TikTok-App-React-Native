import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

import Post from '../../components/Post';
import posts from '../../data/posts';

const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect( () =>{
        const fetchPost = async () => {
            try{
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
                //console.log(response);
            }
            catch(e){
                console.error(e);
            }
        };
        fetchPost();
    }, []);

    return (
        <View>
            <FlatList
                data = {posts}
                renderItem={({item}) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height-130}
                snapToAlignment={"start"}
                decelerationRate={"fast"}

            />
        </View>
    );
};

export default Home;