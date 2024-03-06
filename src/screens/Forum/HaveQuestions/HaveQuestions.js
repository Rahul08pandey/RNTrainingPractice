import React, {useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header/Header';
import {Text, View, TextInput} from 'react-native';
import CustomButton from '../../../components/common/CustomButton';
import {Dropdown} from 'react-native-element-dropdown';

const HaveQuestions = ({navigation}) => {
  const [dbButton, setdbButton] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCancel = () => {
    navigation.navigate('Details');
  };

  const handlePost = () => {
    navigation.navigate('Details');
  };

  const list = [
    {
      label: 'General Guideline',
      value: 'General Guideline',
    },
    {
      label: 'Pitch Session',
      value: 'Pitch Session',
    },
    {
      label: 'Valuations & MRR',
      value: 'Valuations & MRR',
    },
    {
      label: 'Go',
      value: 'Go',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Have Questions</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Category</Text>
            <Dropdown
              data={list}
              labelField="label"
              valueField="value"
              // value={value}
              onChange={item => setSelectedCategory(item)}
              style={styles.dropDown}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Questions</Text>
            <TextInput
              placeholder="Type your questions"
              style={styles.txtInput}
            />
          </View>
          <Text style={styles.helpTxt}>
            If you have already asked similar question in the past please wait
            for others to send in their response instead of asking it again.
          </Text>
        </View>

        <CustomButton
          title="Post"
          twoButton={dbButton}
          onPress={handlePost}
          cancelPress={handleCancel}
        />
      </View>
    </View>
  );
};

export default HaveQuestions;