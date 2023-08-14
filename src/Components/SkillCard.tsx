import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
const SkillCard = () => {
  return (
    <View style={styles.skillCointainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.card]}>
          <FontAwesome name="html5" color="#246959" size={48} />
        </View>
        <View style={[styles.card]}>
          <FontAwesome name="css3-alt" color="#246959" size={48} />
        </View>
        <View style={[styles.card]}>
          <FontAwesome name="js" color="#246959" size={48} />
        </View>
        <View style={[styles.card]}>
          <FontAwesome name="react" color="#246959" size={48} />
        </View>
        <View style={[styles.card]}>
          <FontAwesome name="node-js" color="#246959" size={48} />
        </View>
        <View style={[styles.card]}>
          <Fontisto name="mysql" color="#246959" size={48} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  skillCointainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: 100,
    marginLeft: 20,
    marginTop: 120,
    marginBottom: 30,
    borderRadius: 20,
    padding: 10,
    width: '90%',
    elevation: 9,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  card: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillheadingtext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#246959',
  },
});
