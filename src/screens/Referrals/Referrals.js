import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';

const Referrals = () => {
  const data = [
    {
      name: 'Rajesh T',
      email: 'rajesh@gmail.com',
      date: '12/10/22',
      contact: '9876543210',
    },
    {
      name: 'Mahesh K',
      email: 'mahesh@gmail.com',
      date: '07/10/22',
      contact: '9876543210',
    },
    {
      name: 'Rajan K',
      email: 'rajan@gmail.com',
      date: '24/09/22',
      contact: '9876543210',
    },
    {
      name: 'Murthy S',
      email: 'murthy@gmail.com',
      date: '20/09/22',
      contact: '9876543210',
    },
  ];

  const handleSubmit = () => {
    console.log('first');
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
            placeholder="Enter Name"
            placeholderTextColor="#000000"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#000000"
            style={styles.txtInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput
            placeholder="Enter Phone"
            placeholderTextColor="#000000"
            style={styles.txtInput}
          />
        </View>
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.referralHeading}>My Referrals</Text>

        {data.map((item, index) => (
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
                <Image
                  source={require('../../assets/images/calendar-small.png')}
                />
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
                <Image source={require('../../assets/images/email.png')} />
                <Text style={styles.referralData}>{item.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={require('../../assets/images/contact.png')} />
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
