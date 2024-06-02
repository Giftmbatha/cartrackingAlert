import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={22} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={22} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome name="facebook" size={22} color="#fff" />
          <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome name="google" size={22} color="#fff" />
          <Text style={styles.socialButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
    <Text style={styles.buttonText}>Go to Map</Text>
    </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1824',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Roboto_700Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#1f2b38',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1eca6c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
  },
  socialLoginContainer: {
    width: '100%',
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto_500Medium',
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#1eca6c',
    fontFamily: 'Roboto_400Regular',
  },
});
