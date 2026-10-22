import React from 'react';
import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

const NAMA_USER = 'TEGUH MAUSER';
const POPUP_MESSAGE = 'SILAHKAN TANYA BAAK';

function showMessage(text) {
  if (Platform.OS === 'web') {
    window.alert(text);
    return;
  }

  Alert.alert('', text);
}

function HomeScreen({ onLogout }) {
  const menuItems = ['CEK NILAI', 'CEK JADWAL', 'CEK KELAS', 'CEK MATKUL'];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.homeContent}>
        <Text style={styles.homeTitle}>HOME PAGE</Text>

        <View style={styles.profileBox}>
          <View style={styles.profilePhoto}>
            <Image
              source={require('../assets/foto.jpeg')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.userName}>{NAMA_USER}</Text>
        </View>

        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.menuItem}
              onPress={() => showMessage(POPUP_MESSAGE)}
            >
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
  },
  homeContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  homeTitle: {
    marginBottom: 18,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  profileBox: {
    width: '100%',
    minHeight: 210,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profilePhotoText: {
    color: '#000',
    fontSize: 11,
    textAlign: 'center',
  },
  userName: {
    marginTop: 12,
    color: '#000',
    fontSize: 16,
  },
  menuGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  menuItem: {
    width: '48%',
    height: 72,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    color: '#000',
    textAlign: 'center',
  },
  logoutButton: {
    minWidth: 110,
    marginTop: 6,
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
