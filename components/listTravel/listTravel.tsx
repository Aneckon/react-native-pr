import React, {FC, useState} from 'react';

import {Text, View, StyleSheet, Pressable, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

import {NavigationProp} from '@react-navigation/native';

interface ListTravelProps {
  navigation: NavigationProp<any, any>;
}

export const ListTravel: FC<ListTravelProps> = ({navigation}) => {
  const [tableDate, setTableDate] = useState({
    tableHead: ['Дата'],
    tableBoddy: [['432']],
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.content}>
          <Text style={{...styles.text, marginBottom: 60}}>
            Список Подорожей
          </Text>

          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: '#fff',
              width: '100%',
            }}>
            <Row
              data={tableDate.tableHead}
              style={styles.tableHead}
              textStyle={{color: '#FA541C', margin: 10, fontSize: 12}}
            />
            <Rows
              data={tableDate.tableBoddy}
              textStyle={{color: '#bfbfbf', margin: 10, fontSize: 12}}
            />
          </Table>

          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Назад</Text>
          </Pressable>
        </View>
      </ScrollView>
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
  content: {
    width: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
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
  tableHead: {
    width: '100%',
    height: 50,
  },
});
