import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Button} from 'react-native';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        style={styles.buttonContainer}
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    padding: 10,
    width: 100,
  },
});

export default Login;
