import React from 'react';
import {Text, View, Button} from 'react-native';

const WindFarm = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>WindFarm</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default WindFarm;
