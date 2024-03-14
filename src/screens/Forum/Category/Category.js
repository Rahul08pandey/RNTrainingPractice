import {FlatList, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {forumCategory} from '../../../redux/services/api';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [forumData, setForumData] = useState([]);
  // const forumData = useSelector(state => state.forum.category);
  // console.log('forumData......////', forumData);

  useEffect(() => {
    const fetchForum = async () => {
      try {
        setLoading(true);
        const forumResponse = await forumCategory();
        console.log('forumResponse:', forumResponse);
        // dispatch(forumCategory(data));
      } catch (err) {
        console.error('Error fetching forum Data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchForum();
  }, [dispatch]);

  const infoData = () => {
    navigation.navigate('Details');
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={infoData}>
        <Text style={styles.category_name}>{item.category_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Forum Category</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={forumData}
            renderItem={renderForumData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Category;
