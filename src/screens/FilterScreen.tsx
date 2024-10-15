import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';

const FilterScreen = ({navigation}: {navigation: any}) => {
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState(null);
  const [services, setServices] = useState(null);

  const [openLocation, setOpenLocation] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <View style={styles.container}>
      {/* header */}
      <View className="flex-row items-center gap-2 mb-4">
        <TouchableHighlight
          underlayColor={'#EFEFEF'}
          onPress={() => navigation.goBack()}>
          <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
        </TouchableHighlight>
        <Text className="text-black text-[18px] font-semibold">
          Filter Turfs
        </Text>
      </View>

      {/* dropdown one */}
      <View style={{zIndex: 3000}}>
        <DropDownPicker
          open={openLocation}
          value={location}
          items={[
            {label: 'Mumbai', value: 'mumbai'},
            {label: 'Delhi', value: 'delhi'},
            {label: 'Bangalore', value: 'bangalore'},
          ]}
          setOpen={setOpenLocation}
          setValue={setLocation}
          placeholder="Select Location"
          style={styles.dropdown}
        />
      </View>

      {/* dropdown two */}
      <View style={{zIndex: 2000, marginTop: 20}}>
        <DropDownPicker
          open={openPrice}
          value={price}
          items={[
            {label: 'Below ₹500', value: 'below_500'},
            {label: '₹500-₹1000', value: '500_1000'},
            {label: 'Above ₹1000', value: 'above_1000'},
          ]}
          setOpen={setOpenPrice}
          setValue={setPrice}
          placeholder="Select Price Range"
          style={styles.dropdown}
        />
      </View>

      {/* dropdown three */}
      <View style={{zIndex: 1000, marginTop: 20}}>
        <DropDownPicker
          open={openServices}
          value={services}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Cricket', value: 'cricket'},
            {label: 'Badminton', value: 'badminton'},
          ]}
          setOpen={setOpenServices}
          setValue={setServices}
          placeholder="Select Services"
          style={styles.dropdown}
        />
      </View>

      {/* button */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: 'green',
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
          Apply Filters
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
});

export default FilterScreen;
