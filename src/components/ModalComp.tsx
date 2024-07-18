import {View, Text, Modal, TouchableHighlight} from 'react-native';
import React from 'react';

const ModalComp = ({openHandler, modalVisible, handler, textData}:any) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={openHandler}>
        <View className="w-[90%] mx-auto my-auto items-center border-[3px] bg-white border-[#ff1414] rounded-2xl py-6 px-6">
          <Text
            className="w-[80%] font-semibold text-black text-center"
            style={{fontSize: 16}}>
            Are you sure you want to {textData}?
          </Text>
          <View className="w-[100%] flex-row justify-between mt-6">
            <TouchableHighlight
              underlayColor={'white'}
              onPress={handler}
              className="border-2 border-[#ff1414] w-[45%] py-[6px] rounded-full items-center">
              <Text className="text-black text-lg font-semibold">{textData}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={openHandler}
              className="border-2 border-[#ff1414] w-[45%] py-[6px] rounded-full items-center">
              <Text className="text-black text-lg font-semibold">Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;
