import React, { useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

interface Props {
  optionOne: string;
  optionTwo: string;
  onSelectionChange: (selectedValue: string) => void; // Callback to pass selected value back to parent
}

const RadioButtons: React.FC<Props> = ({ optionOne, optionTwo, onSelectionChange }) => {
  const radioButtons: RadioButtonProps[] = [
    {
      id: optionOne,
      label: optionOne,
      value: optionOne,
      borderColor: 'white',
      labelStyle: {
        color: 'white',
      },
      color: 'white',
    },
    {
      id: optionTwo,
      label: optionTwo,
      value: optionTwo,
      borderColor: 'white',
      labelStyle: {
        color: 'white',
      },
      color: 'white',
    },
  ];

  const [selectedId, setSelectedId] = useState<string | undefined>();

  const onPressHandler = (selectedId: string) => {
    setSelectedId(selectedId);
    onSelectionChange(selectedId); // Pass selected value back to parent component
  };

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onPressHandler}
      selectedId={selectedId}
      layout="row"
    />
  );
};

export default RadioButtons;
