import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>React Kurs</Text>
      <Button text="Üye Kaydı Oluştur" title="Login" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
});
export default Welcome;
