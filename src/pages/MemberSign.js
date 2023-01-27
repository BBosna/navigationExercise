import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userCity, setUserCity] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userCity) {
      Alert.alert('Hata', 'Lütfen Üye Bilgileri Giriniz!', [
        {
          text: 'Tamam',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]);
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userCity,
    };
    navigation.navigate('MemberResultScreen', {user});
  }
  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üyenin İsmini Giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyisim"
        placeholder="Üyenin soyismini Giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin Yaşını Giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-Posta"
        placeholder="Üyenin E-Postası Giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye İl"
        placeholder="Üyenin il Bilgisini Giriniz..."
        onChangeText={setUserCity}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
