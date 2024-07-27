import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableHighlight, View} from 'react-native';
import {
  default as CalendarIcon,
  default as FavouriteIcon,
  default as LeftArrowIcon,
  default as ShareIcon,
} from 'react-native-vector-icons/AntDesign';
import {useAppSelector} from '../redux/hooks';
import {API_SERVER} from '../../envVar';
import {Calendar} from 'react-native-calendars';
// import { format, parseISO } from 'date-fns';

type FlattenedSlot = {
  date: string;
  time: string;
  booked: boolean;
};

const BookCourtPage = () => {
  const [calendarState, setCalendarState] = useState(false);
  const [selectedDate, setSeletedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  const [flattenedSlots, setFlattenedSlots] = useState<FlattenedSlot[]>([]);

  const [currentDay, setCurrentDay] = useState('today');

  // console.log(calendarState);

  const navigation = useNavigation<any>();
  const route = useRoute();
  const {court} = route.params as {court: string};

  const courtNumber = Number(court.split(' ')[1]);

  const userData = useAppSelector(state => state.turf);
  console.log(userData, 'userData on booking page');

  const selectedCourt = userData.turf.slot.find(
    court => court.courtNumber === courtNumber,
  );

  // if(selectedCourt) {
  //   const selectedDate = userData.turf.slot.find(
  //     court => court.days === days,
  //   );
  // }

  // console.log(selectedCourt);

  const today = new Date().toISOString().split('T')[0];

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  // Format tomorrow's date in YYYY-MM-DD format
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  useEffect(() => {
    const newFlattenedSlots: FlattenedSlot[] =
      selectedCourt?.days.reduce<FlattenedSlot[]>((acc, day) => {
        const dayDate = new Date(day.date).toISOString().split('T')[0];

        if (dayDate === selectedDate) {
          // console.log(today);
          // console.log(dayDate);

          day.slots.forEach(slot => {
            acc.push({
              date: day.date,
              time: slot.time,
              booked: slot.booked,
            });
          });
        }
        return acc;
      }, []) || [];
    // console.log(flattenedSlots);
    setFlattenedSlots(newFlattenedSlots);
  }, [selectedDate]);

  // const flattenSlots = (userData: any) => {
  //   const slots = [];

  //   userData.forEach((court: any) => {
  //     court.days.forEach((day: any) => {
  //       day.slots.forEach((slot: any) => {
  //         slots.push({
  //           courtNumber: court.courtNumber,
  //           date: day.date,
  //           time: slot.time,
  //           booked: slot.booked,
  //         });
  //       });
  //     });
  //   });
  // };

  const selectDateHandler = () => {
    setCalendarState(true);
  };

  const todaySelectDateHandler = () => {
    setSeletedDate(today);
    setCurrentDay('today');
  };

  const tomorrowSelectDateHandler = () => {
    setSeletedDate(tomorrow);
    setCurrentDay('tomorrow');
  };

  return (
    <View className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            underlayColor={'#EFEFEF'}
            onPress={() => navigation.navigate('TurfInformation')}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">
            Book Court
          </Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <TouchableHighlight>
            <ShareIcon name="sharealt" size={23} color="black" />
          </TouchableHighlight>
          <TouchableHighlight>
            <FavouriteIcon name="hearto" size={23} color="black" />
          </TouchableHighlight>
        </View>
      </View>

      {/* turf image */}
      <View className="max-w-fit mx-auto mt-[20px] drop-shadow-md">
        <Image
          source={{uri: `${API_SERVER}/${userData.turf.image}`}}
          style={{
            width: 364,
            height: 172.86,
            borderRadius: 12,
          }}
        />
      </View>

      {/* date and calender section */}
      <View className="flex-row pt-4 gap-2 max-w-fit mx-auto">
        <TouchableHighlight
          underlayColor="#36D759"
          onPress={todaySelectDateHandler}
          className="border-[1px] border-slate-400 px-4 py-1 rounded-xl"
          style={{
            backgroundColor: currentDay === 'today' ? '#49B114' : '#e0e0e0',
          }}>
          <View>
            <Text
              className="text-white text-base font-semibold"
              style={{
                color: currentDay === 'today' ? 'white' : 'black',
              }}>
              Today
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#D0D0D0"
          onPress={tomorrowSelectDateHandler}
          className="border-[1px] border-slate-400 px-4 py-1 rounded-xl"
          style={{
            backgroundColor: currentDay === 'tomorrow' ? '#49B114' : '#e0e0e0',
          }}>
          <View>
            <Text
              className="text-black text-base font-semibold"
              style={{
                color: currentDay === 'tomorrow' ? 'white' : 'black',
              }}>
              Tomorrow
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#D0D0D0"
          onPress={selectDateHandler}
          className="flex-row items-center border-[1px] border-slate-400 px-3 py-1 rounded-xl"
          style={{
            backgroundColor:
              currentDay === 'selectedDay' ? '#49B114' : '#e0e0e0',
          }}>
          <View className="flex-row items-center">
            <Text
              className="text-black mr-1 font-semibold"
              style={{
                color: currentDay === 'selectedDay' ? 'white' : 'black',
              }}>
              Select Date
            </Text>
            <CalendarIcon name="calendar" size={20} color="#000000" />
          </View>
        </TouchableHighlight>
      </View>

      {/* price per hour wala section */}
      <View className="pt-4 pb-2 mx-2">
        <Text className="text-black text-base font-semibold">
          Price - 1000 hourly
        </Text>
        <View className="pt-3 flex-row flex-wrap gap-3 mx-auto">
          {/* <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl">
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:11 AM</Text>
            </View>
          </TouchableHighlight> */}
          {flattenedSlots?.map((slot, index) => (
            <TouchableHighlight
              key={index}
              underlayColor={'transparent'}
              onPress={() => Alert.alert('Slot selected', `Time: ${slot.time}`)}
              className="border-2 border-slate-300 rounded-xl"
              style={{
                backgroundColor: slot.booked === true ? 'grey' : 'transparent',
              }}
              disabled={slot.booked === true}>
              <View className="px-2 py-3">
                <Text className="text-xs font-semibold">{slot.time}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>

      {/* button section */}
      <TouchableHighlight
        underlayColor="#4141eb"
        className="bg-[#1D1CA3] mt-3 rounded-xl"
        onPress={() => navigation.navigate('BookCourtReciept')}>
        <Text className="text-lg text-center text-white py-3">
          Proceed to Pay ₹1000
        </Text>
      </TouchableHighlight>

      {/* calendar */}
      {calendarState && (
        <View className="w-80 absolute top-40 left-10">
          <Calendar
            minDate={today}
            maxDate={today + 8}
            onDayPress={(day: any) => {
              // console.log('selected day', day);
              setCurrentDay('selectedDay');
              setSeletedDate(day.dateString);
              setCalendarState(false);
            }}
            // onDayPress={() => setCalendarState(false)}
          />
        </View>
      )}
    </View>
  );
};

export default BookCourtPage;
