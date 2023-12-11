import {View, FlatList, Text, StyleSheet, TouchableOpacity, TextComponent} from 'react-native';
import {useState, React} from 'react';
import PharmacyModal from './modal/Pharamcy Modal';

const PharmacyData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allPharmacyData, setAllPharmacyData] = useState([
    // {
    //   pharmacyName: 'WellCare Chemists',
    //   medicineCategory: [
    //     {
    //       medicineCategoryType: 'Acid Reflux',
    //       medicineNames: [{name: 'Omeprazole'}, {name: 'Ranitidine'}],
    //     },
    //   ],
    // },
    // {
    //   pharmacyName: 'MedLife Apothecary',
    //   medicineCategory: [
    //     {
    //       medicineCategoryType: 'Infections',
    //       medicineNames: [{name: 'Amoxicillin'}, {name: 'Ciprofloxacin'}],
    //     },
    //   ],
    // },
  ]);

  const renderPharmacyData = ({item}) => (
    <View
      style={{
        borderColor: 'grey',
        borderWidth: 5,
        marginBottom: 10,
        backgroundColor: '#dddddd',
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
        {item.pharmacyName}
      </Text>
      <FlatList
        data={item.medicineCategory}
        renderItem={renderMedicineCategory}
        // keyExtractor={(item,index) => Math.random()}
      />
    </View>
  );

  const renderMedicineCategory = ({item}) => (
    // console.log('renderMedicineNames', item)
    <View style={{padding: 10}}>
      <Text style={styles.userTxt}>{item.medicineCategoryType}</Text>
      <FlatList
        data={item.medicineNames}
        renderItem={renderMedicineNames}
        // keyExtractor={(item,index) => Math.random()}
      />
    </View>
  );

  const renderMedicineNames = ({item}) => (
    <View style={{marginLeft: 50}}>
      <Text style={{fontSize: 20}}> - {item.name}</Text>
    </View>
  );

  const addMore = () => {
    setModalVisible(true);
  };

  const handleAddPharmacyData = newPharmacyData => {
    setAllPharmacyData([...allPharmacyData, newPharmacyData]);
    setModalVisible(false);
  };

  const emptyRecord = () => (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, color: 'white'}}>No Record Found!!</Text>
      <Text style={{fontSize: 18, color: 'white'}}>
        Please Fill Data first..
      </Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.heading1}>Pharmacy Data</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.heading2}>Pharmacies and their Types :</Text>
        <FlatList
          data={allPharmacyData}
          keyExtractor={(item, index) => Math.random()}
          renderItem={renderPharmacyData}
          ListEmptyComponent={emptyRecord}
        />
      </View>
      <View style={styles.subContainer3}>
        <TouchableOpacity style={styles.btn} onPress={addMore}>
          <Text style={styles.btnTxt}>Add more user</Text>
        </TouchableOpacity>
      </View>
      <PharmacyModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddPharmacy={handleAddPharmacyData}
      />
    </View>
  );
};

export default PharmacyData;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },

  subContainer1: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },

  heading1: {
    fontSize: 46,
    color: 'green',
    fontFamily: 'PlaypenSans-Bold',
    textDecorationLine: 'underline',
  },

  subContainer2: {
    flex: 0.8,
    // backgroundColor: 'green',
  },

  heading2: {
    fontSize: 34,
    color: 'red',
    fontFamily: 'DancingScript-Regular',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  subContainer3: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },

  btn: {
    // flex: 1,
    width: '40%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'orange',
  },

  btnTxt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

  userTxt: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'GreyQo-Regular',
  },
});
