import React, {FC} from 'react';

import {Text, View, StyleSheet, Pressable} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {listApi} from '../mokApi';

interface ListProps {
  navigation: NavigationProp<any, any>;
}

export const List: FC<ListProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, marginBottom: 60}}>Список</Text>
      {listApi.map(item => (
        <Pressable
          key={item.id}
          style={styles.button}
          onPress={() => navigation.navigate(item.navigate)}>
          <Text style={styles.text}>{item.name}</Text>
        </Pressable>
      ))}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Назад</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#1E1E1E',
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
});
