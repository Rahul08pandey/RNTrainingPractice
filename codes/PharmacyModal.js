import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default PharmacyModal = ({isVisible, onClose, onAddUser}) => {
  const [pharmacyData, setPharmacyData] = useState([
    {
      pharmacyName: '',
      medicineCategory: [
        {
          medicineCategoryType: '',
          medicineNames: [{name: ''}],
        },
      ],
    },
  ]);

  const handleSavePharmacyData = () => {
    const updateData = pharmacyData.medicineCategory || [];
    const pharmaObj = {
      pharmacyName: pharmacyData.pharmacyName,
      medicineCategory: updateData.map(pharma => ({
        medicineCategoryType: pharma.medicineCategoryType,
      })),
    };
    console.log('pharmaObj', pharmaObj);
    onAddUser(pharmaObj);
    onClose();
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={{flex: 1, padding: 10}}>
        <View style={styles.headContainer}>
          <Text style={styles.heading}>Pharmacy Data:</Text>
        </View>
        <View
          style={{
            flex: 0.8,
            // backgroundColor: 'blue'
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Medicine Name :
          </Text>
          <TextInput
            style={styles.pharmacyNameInput}
            placeholder="Enter Medicine Name"
            // value={pharmacyData.pharmacyName}
            onChangeText={text =>
              setPharmacyData(prevName =>
                Object.assign({}, prevName, {pharmacyName: text}),
              )
            }
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor:'green'
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontFamily: 'PlaypenSans-Medium',
              }}>
              Enter Medicine Category:
            </Text>
            <TouchableOpacity
            // style={{backgroundColor:'red'}}
            // onPress={addMedicineCategory}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 18,
                }}>
                Add More
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.medicineCategoryContainer}>
            <TextInput
              //   key={index}
              style={styles.medicineCategoryInput}
              placeholder="Enter Your Medicine Category "
              // value={hobby.name}
              onChangeText={text => {
                const updateMedicineCategory = [
                  ...pharmacyData.medicineCategory,
                ];
                updateMedicineCategory[index].name = text;
                setMedicineData(prevMedicineType =>
                  Object.assign({}, prevMedicineType, {
                    medicineCategory: updateMedicineCategory,
                  }),
                );
              }}
            />
            <View
              style={{
                flex: 0.15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
                color: 'white',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              {/* {index === pharmacyData.medicineCategory.length - 1 && ( */}
              <TouchableOpacity
              // onPress={addMedicineCategory}
              >
                <Text style={{fontSize: 18, color: 'black'}}>Add</Text>
              </TouchableOpacity>
              {/* )} */}
            </View>
          </View>
          {pharmacyData.medicineNames.map((med, index) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: 'green',
              }}>
              <TextInput
                style={{
                  // flex: 0.82,
                  marginLeft: 50,
                  width: '70%',
                  backgroundColor: '#d3d3d3',
                  borderRadius: 10,
                  fontSize: 16,
                  borderWidth: 2,
                  paddingLeft: 10,
                }}
                placeholder="Enter "
                value={med.name}
                onChangeText={text => {
                  const updateMedicine = [...pharmacyData.medicineNames];
                  updateMedicine[index].name = text;
                  setPharmacyData(prevMedicine =>
                    Object.assign({}, prevMedicine, {Medicine: updateMedicine}),
                  );
                }}></TextInput>
              {index === userData.hobbies.length - 1 && (
                <TouchableOpacity>
                  <Icon name="plus-circle" size={50} color="blue" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
        <View
          style={{
            flex: 0.05,
            // backgroundColor: 'green'
          }}>
          <TouchableOpacity
            onPress={handleSavePharmacyData}
            style={styles.savePharmacyDataButton}>
            <Text style={styles.btnTxt}>Save Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },

  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: 'green',
    fontFamily: 'Lugrasimo-Regular',
    // backgroundColor: 'red',
  },

  pharmacyNameInput: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: '#d3d3d3',
    // width: '100%',
  },

  medicineCategoryInput: {
    flex: 0.82,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    paddingLeft: 10,
    // borderRadius: 10,
    // fontSize: 16,
    // width: '80%',
    // borderWidth: 2,
    // paddingLeft: 10,
    // backgroundColor: '#d3d3d3',
  },

  medicineCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    // alignItems: 'center',
  },

  savePharmacyDataButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    // backgroundColor: 'green',
  },

  btnTxt: {
    color: 'black',
    fontSize: 18,
  },
});
