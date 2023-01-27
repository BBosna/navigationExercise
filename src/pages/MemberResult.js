import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>Üyenin Adı : {user.userName} </Text>
        <Text>Üyenin Soyadı:{user.userSurame} </Text>
        <Text>Üyenin Yaşı: {user.userAge} </Text>
        <Text>Üyenin E-Posta: {user.userMail} </Text>
        <Text>Üyenin Yaşadğı Yer: {user.userCity} </Text>
      </View>
    </SafeAreaView>
  );
}

export default MemberResult;
