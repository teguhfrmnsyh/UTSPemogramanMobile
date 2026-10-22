import React, { useState } from 'react';
import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const APP_TITLE = 'TEGUH MAUSER';
const APP_SUBTITLE = 'UTS PEMOGRAMAN MOBILE';

function showMessage(text) {
  if (Platform.OS === 'web') {
    window.alert(text);
    return;
  }

  Alert.alert('', text);
}

function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      showMessage('Email dan password harus diisi');
      return;
    }

    if (!email.includes('@')) {
      showMessage('Format email tidak valid');
      return;
    }

    onLoginSuccess();
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loginContent}>
        <Text style={styles.title}>
          {APP_TITLE}
          {'\n'}
          {APP_SUBTITLE}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
  },
  loginContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 28,
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 48,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 12,
    color: '#000',
  },
  loginButton: {
    minWidth: 110,
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
