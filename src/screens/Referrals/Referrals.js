import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import IMAGES from '../../assets/images/index';

const Referrals = () => {
  const [submitData, setSubmitData] = useState([]);
  const [data, setData] = useState([
    {
      name: '',
      email: '',
      date: '',
      contact: '',
    },
  ]);

  const handleInputChange = (key, value) => {
    setData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData = {...data, date: currentDate};

    setSubmitData(prevData => [...prevData, newData]);
    setData({name: '', email: '', date: '', contact: ''});
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />

      <View style={styles.subContainer}>
        <Text style={styles.heading}>
          Refer someone whom you think can be part of CAN
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            value={data.name}
            style={styles.txtInput}
            placeholder="Enter Name"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('name', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            value={data.email}
            style={styles.txtInput}
            placeholder="Enter Email"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('email', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput
            value={data.contact}
            style={styles.txtInput}
            placeholder="Enter Phone"
            placeholderTextColor="rgba(0, 0, 0, 0.27)"
            onChangeText={text => handleInputChange('contact', text)}
          />
        </View>
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.referralHeading}>My Referrals</Text>

        {submitData.map((item, index) => (
          <View key={index} style={styles.dataContainer}>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
              }}>
              <Text style={styles.name}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.calendarSmall} />
                <Text style={styles.referralData}>{item.date}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.email} />
                <Text style={styles.referralData}>{item.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.contact} />
                <Text style={styles.referralData}>{item.contact}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Referrals;
