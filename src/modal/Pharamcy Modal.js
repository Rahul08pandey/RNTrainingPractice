import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {React, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default PharmacyModal = ({isVisible, onAddPharmacy, onClose}) => {
  const [pharmacyData, setPharmacyData] = useState({
    pharmacyName: '',
    medicineCategory: [
      {
        medicineCategoryType: '',
        medicineNames: [{name: ''}],
      },
    ],
  });

  const handleAddMedicineType = () => {
    setPharmacyData(prevMedicineType => ({
      ...prevMedicineType,
      medicineCategory: [
        ...prevMedicineType.medicineCategory,
        {
          medicineCategoryType: '',
          medicineNames: [{name: ''}],
        },
      ],
    }));
  };

  const handleAddMedicine = addMedIndex => {
      const updateMedicine = [...pharmacyData.medicineCategory];
      updateMedicine[addMedIndex].medicineNames.push({ name: '' });
      setPharmacyData(prevMed=>
      Object.assign({},prevMed,{medicineCategory:updateMedicine}))
    };

  const handleSavePharmacy = () => {
    // console.log('setPharmacyData', setPharmacyData);
    setPharmacyData({
      pharmacyName: '',
      medicineCategory: [
        {
          medicineCategoryType: '',
          medicineNames: [{name: ''}],
        },
      ],
    });

    const updatedMedType = pharmacyData.medicineCategory
      .map(medType => ({
        medicineCategoryType: medType.medicineCategoryType.trim(),
        medicineNames: medType.medicineNames.filter(
          medicineNames => medicineNames.name.trim() !== '',
        ),
      }))
      .filter(medType => medType.medicineNames.length > 0);

    const newPharmacyData = {
      pharmacyName: pharmacyData.pharmacyName.trim(),
      medicineCategory: updatedMedType,
    };
    onAddPharmacy(newPharmacyData);
    onClose();
    console.log('pharmacyData', newPharmacyData);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View
        style={{
          flex: 1,
          padding: 10,
          // backgroundColor: 'green'
        }}>
        <View style={styles.headContainer}>
          <Text style={styles.heading}>Pharmacy Data:</Text>
        </View>

        <ScrollView
          style={
            {
              flex: 0.8,
              // backgroundColor: 'blue'
            }
          }>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Pharmacy Name:
          </Text>

          <TextInput
            style={styles.pharmacyNameInput}
            placeholder="Enter Pharmacy Name"
            value={pharmacyData.pharmacyName}
            onChangeText={text =>
              setPharmacyData(
                Object.assign({}, pharmacyData, {pharmacyName: text}),
              )
            }
          />

          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'PlaypenSans-Medium',
            }}>
            Enter Medicine Category:
          </Text>

          {/* {pharmacyData.medicineCategory.map((item, index) => ( */}
          {pharmacyData.medicineCategory.map((medCategory, index) => (
            <View key={index} style={{marginBottom: 10}}>
              <View style={styles.medicineCategoryContainer}>
                <TextInput
                  style={styles.medicineCategoryInput}
                  placeholder="Enter Medicine Category Type"
                  value={medCategory.medicineCategoryType}
                  // value={pharmacyData.medicineCategoryType}
                  onChangeText={text => {
                    const updateCategoryType = [
                      ...pharmacyData.medicineCategory,
                    ];
                    updateCategoryType[index].medicineCategoryType = text;
                    setPharmacyData(prevMedType =>
                      Object.assign({}, prevMedType, {
                        medicineCategory: updateCategoryType,
                      }),
                    );
                  }}
                />

                <View
                  style={{
                    // flex: 0.15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'orange',
                    color: 'white',
                    // borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  {index === pharmacyData.medicineCategory.length - 1 && (
                    <TouchableOpacity onPress={handleAddMedicineType}>
                      <Text style={styles.buttonText}>Add More</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {medCategory.medicineNames.map((item, medNameIndex) => (
                <View style={styles.medicineName} key={medNameIndex}>
                  <TextInput
                    style={styles.medicineNameInput}
                    placeholder="Enter Medicine Name"
                    value={item.name}
                    onChangeText={text =>
                      setPharmacyData(prevMedName => {
                        const updatedMed = [...prevMedName.medicineCategory];
                        updatedMed[index].medicineNames[medNameIndex].name =
                          text;
                        return {
                          ...prevMedName,
                          medicineCategory: updatedMed,
                        };
                      })
                    }
                  />
                  <View style={styles.iconButton}>
                    {medNameIndex === medCategory.medicineNames.length - 1 && (
                      <TouchableOpacity
                        onPress={() => handleAddMedicine(index)}>
                        <Icon
                          name="plus-circle-outline"
                          size={40}
                          color="black"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>

        <View style={styles.savePharmacyDataButton}>
          <TouchableOpacity onPress={handleSavePharmacy} style={styles.saveBtn}>
            <Text style={styles.btnTxt}>Save</Text>
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
    fontSize: 36,
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
  },

  medicineCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  medicineCategoryInput: {
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 2,
    paddingLeft: 10,
    width: '80%',
    backgroundColor: '#d3d3d3',
  },

  medicineName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  medicineNameInput: {
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    marginLeft: 40,
    width: '70%',
    backgroundColor: '#d3d3d3',
  },

  iconButton: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  savePharmacyDataButton: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },

  saveBtn: {
    width: '30%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'green',
  },

  btnTxt: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
