import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import IMAGES from '../../assets/images';

const Home = ({navigation}) => {
  const data = [
    {
      name: 'Jerry Imfotech',
      text: 'On demand food delivery startup',
      MRP: 'INR 1.50 lakhs',
      roundSize: 'INR 50 lakhs',
      valuation: 'INR 3.5 Cr',
      commitment: 'INR 20 lakhs',
    },
    {
      name: 'Chaiwala',
      text: 'Authentic Indian Tea',
      MRP: 'INR 1.50 lakhs',
      roundSize: 'INR 50 lakhs',
      valuation: 'INR 3.5 Cr',
      commitment: 'INR 20 lakhs',
    },
    {
      name: 'DX Drones',
      text: 'Robotics, drones',
      MRP: 'INR 50 lakhs',
      roundSize: 'INR 3.5 Cr',
      valuation: 'INR 5.50 Cr',
      commitment: 'INR 50 lakhs',
    },
  ];

  const agendaData = [
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          title: 'Startup World Cup 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'Virtual',
        },
      ],
    },
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          title: 'Web Summit PITCH 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'Virtual',
        },
      ],
    },
    {
      date: '18',
      month: 'NOV',
      events: [
        {
          title: 'Next Founders Event',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'The Lalit, Chd',
        },
      ],
    },
  ];

  const renderItem = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.itemData}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/images/jerry.png')} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.details}>
            <Text style={styles.txt}>MRR:</Text> {item.MRP}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.txt}>Round Size:</Text> {item.roundSize}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 2,
          }}>
          <Text style={styles.details}>
            <Text style={styles.txt}>Valuation:</Text> {item.valuation}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.txt}>Commitment:</Text> {item.commitment}
          </Text>
        </View>
      </View>
    ));
  };

  const renderAgendaData = () => {
    return agendaData.map((item, index) => (
      <View key={index} style={styles.agendaData}>
        <View style={styles.dateMonthContainer}>
          <Text style={styles.dM}>{item.date}</Text>
          <Text style={styles.dM}>{item.month}</Text>
        </View>

        {item.events.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventAgenda}>{event.agenda}</Text>

            <View style={styles.eventImgContainer}>
              <View
                style={{
                  marginBottom: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.clock} style={{marginTop: 2}} />
                <Text style={styles.imgTxt}>{event.time}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 30,
                  marginBottom: 2,
                }}>
                <Image source={IMAGES.location} style={{marginTop: 2}} />
                <Text style={styles.imgTxt}>{event.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    ));
  };

  const openDrawer = () => {
    navigation.navigate('DrawerNavigator');
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header onPress={openDrawer} renderImage={true} />

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Active Mandate</Text>
          {/* <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          /> */}
          <View style={{flex: 1}}>{renderItem()}</View>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Calendar</Text>
          {/* <FlatList
            data={agendaData}
            renderItem={renderAgendaData}
            keyExtractor={(item, index) => index.toString()}
          /> */}
          {renderAgendaData()}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
