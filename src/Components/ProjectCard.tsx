import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type projectProps = NativeStackScreenProps<RootStackParamList, 'ProjectCard'>;

const ProjectCard = ({navigation}: projectProps) => {
  return (
    <View style={styles.projectCointainer}>
      <ScrollView horizontal>
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('Home')}
        />
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('Calculator')}
        />
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('ColorChanger')}
        />
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('Dicee')}
        />
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('Password')}
        />
        <TouchableOpacity
          style={[styles.card, styles.cardOne]}
          onPress={() => navigation.navigate('Tictactoe')}
        />
      </ScrollView>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  projectCointainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 520,
    left: 20,
    backgroundColor: '#ffffff',
    height: 100,
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
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    elevation: 9,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'green',
    shadowOpacity: 0.9,
  },
});
