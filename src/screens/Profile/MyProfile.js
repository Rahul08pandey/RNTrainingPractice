import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/common/CustomButton';
import {Calendar} from 'react-native-calendars';
import IMAGES from '../../assets/images';

const MyProfile = ({navigation}) => {
  const [isCalendar, setIsCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleUpdate = () => {
    console.log('first');
  };

  const handleCalendarPress = () => {
    setIsCalendar(!isCalendar);
  };

  const onDayPress = day => {
    const formattedDate = `${day.day}-${day.month}-${day.year}`;
    setSelectedDate(formattedDate);
    setIsCalendar(false);
    console.log('Selected date:', day);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header back={true} drawer={false} />

      <View style={styles.subContainer}>
        <Text style={styles.profileTxt}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Image source={IMAGES.camera} style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput placeholder="Enter Name" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput placeholder="Enter Email" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Date of birth</Text>
          <View style={styles.dobView}>
            <TextInput
              placeholder="Select Date"
              value={selectedDate}
              editable={false}
            />
            <TouchableOpacity onPress={handleCalendarPress}>
              <Image source={IMAGES.calendar} style={styles.img} />
            </TouchableOpacity>
          </View>
          {isCalendar && <Calendar onDayPress={onDayPress} />}
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput placeholder="Enter Phone" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput placeholder="Enter Organization" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>State</Text>
          <TextInput placeholder="Enter State" style={styles.txtInput} />
          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput placeholder="Enter City" style={styles.txtInput} />
        </View>
        <CustomButton title="Update" onPress={handleUpdate} />
      </View>
    </ScrollView>
  );
};

export default MyProfile;
