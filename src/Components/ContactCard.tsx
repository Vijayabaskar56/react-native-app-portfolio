import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ContactCard = () => {
  function openSite(Link: string): void {
    Linking.openURL(Link);
  }

  return (
    <View style={styles.skillCointainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => openSite('https://twitter.com/VJBass1')}>
          <FontAwesome name="twitter" color="#246959" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card]}
          onPress={() => openSite('mailto:vj2k02@gmail.com')}>
          <MaterialCommunityIcons name="gmail" color="#246959" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card]}
          onPress={() =>
            openSite('https://www.linkedin.com/in/vijaya-baskar/')
          }>
          <FontAwesome name="linkedin" color="#246959" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card]}
          onPress={() => openSite('https://github.com/Vijayabaskar56')}>
          <FontAwesome name="github" color="#246959" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card]}
          onPress={() => openSite('https://www.instagram.com/vijayabaskar56/')}>
          <FontAwesome name="instagram" color="#246959" size={24} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  skillCointainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 60,
    borderRadius: 20,
    width: '90%',
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    elevation: 9,
  },
  card: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillheadingtext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#246959',
  },
  cardOne: {
    marginLeft: 10,
  },
});
