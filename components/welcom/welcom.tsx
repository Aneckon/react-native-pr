import React, {FC} from 'react';

import {Pressable, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

interface WelcomProps {
  navigation: NavigationProp<any, any>;
}

export const Welcom: FC<WelcomProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Вітаю у моїй програмі для створення подорожей і туроператорів
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.text}>Дальше</Text>
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
    marginTop: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 50,
    backgroundColor: '#FA541C',
    borderRadius: 20,
  },
});
