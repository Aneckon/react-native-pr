import React, {FC, useState, useEffect} from 'react';

import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {useSetDayApiMutation} from '../../redux/services/daySlice';

interface ToAddTravelProps {
  navigation: NavigationProp<any, any>;
}

export const ToAddTravel: FC<ToAddTravelProps> = ({navigation}) => {
  const [day, setDay] = useState('');
  const [addDay, {error}] = useSetDayApiMutation();
  console.log(error);

  const onChangeNumberDay = (text: string) => {
    setDay(text.replace(/[^0-9]/g, ''));
  };

  const handleAdd = () => {
    if (day.length && day.indexOf(' ')) {
      addDay({day});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, marginBottom: 60}}>Добавити Подорож</Text>

      <View style={{width: '100%'}}>
        {day.indexOf(' ') ? (
          ''
        ) : (
          <Text
            style={{
              ...styles.text,
              marginBottom: 20,
              color: '#FA541C',
            }}>
            Інпут не валідний
          </Text>
        )}
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Номер дня"
          placeholderTextColor="#fff"
          value={day}
          onChangeText={text => onChangeNumberDay(text)}
        />
      </View>

      <View>
        <Pressable style={styles.button} onPress={() => console.log('add')}>
          <Text style={styles.text} onPress={handleAdd}>
            Добавити
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Назад</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 50,
    backgroundColor: '#FA541C',
    borderRadius: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FA541C',
    borderRadius: 10,
    color: '#fff',
  },
});
