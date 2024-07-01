import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

interface Props {
  optionOne: string;
  optionTwo: string;
}

const RadioButtons: React.FC<Props> = ({optionOne, optionTwo}) => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: optionOne,
        value: 'option1',
        borderColor: 'white',
        labelStyle: {
          color: 'white',
        },
        color:"white"
      },
      {
        id: '2',
        label: optionTwo,
        value: 'option2',
        borderColor: 'white',
        labelStyle: {
          color: 'white',
        },
        color:"white"
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  console.log(selectedId);
  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
      layout="row"
    />
  );
};

export default RadioButtons;
