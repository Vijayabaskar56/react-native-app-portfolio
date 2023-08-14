import React from 'react';
import userImg from '../assert/passport.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// type safety

type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import SkillCard from '../Components/SkillCard';
import ContactCard from '../Components/ContactCard';
// import ProjectCard from '../Components/ProjectCard';

const Home = ({navigation}: homeProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.scroll}>
        <View style={styles.backgroundStyle}></View>
        <View style={styles.profile}>
          <Image style={styles.userImg} source={userImg} />
          <View>
            <Text style={styles.nametext}>VijayaBaskar</Text>
            <Text style={styles.profiletext}>Full Stack Developer</Text>
          </View>
        </View>

        <View style={styles.bioCointainer}>
          <View>
            <Text style={styles.infoheadingtext}>Bio</Text>
            <Text style={styles.infotext}>
              Hi, myself Vijayabaskar , Aspiring Software Developer with
              hands-on experience in Web and Mobile Devlopment. I have the
              Strong ability to learn and grasp new technologies quickly.
            </Text>
          </View>
        </View>
        <SkillCard />
        <View style={styles.projectCointainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.card, styles.cardOne]}>
              <Icon
                name="currency-exchange"
                size={100}
                color="#ffffff"
                allowFontScaling
              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Calculator')}>
                <Text style={styles.btnText}>Currency Calculator</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, styles.cardOne]}>
              <FoundationIcon
                name="background-color"
                size={100}
                color="#ffffff"
              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('ColorChanger')}>
                <Text style={styles.btnText}>Color Change</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, styles.cardOne]}>
              <MaterialIcon name="movie-roll" size={100} color="#ffffff" />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Dicee')}>
                <Text style={styles.btnText}>Dice Roll</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, styles.cardOne]}>
              <MaterialIcon
                name="form-textbox-password"
                size={100}
                color="#ffffff"
              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Password')}>
                <Text style={styles.btnText}>Pass Gen</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, styles.cardOne]}>
              <Entypo name="circle-with-cross" size={100} color="#ffffff" />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Tictactoe')}>
                <Text style={styles.btnText}>Tic Tac Toe</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <ContactCard />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
  },
  backgroundStyle: {
    height: 300,
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: '#246959',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profile: {
    width: '90%',
    height: 70,
    position: 'absolute',
    top: 50,
    left: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#111111',
    // elevation: 9,
  },
  userImg: {
    width: 60,
    height: 60,
    marginEnd: 30,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  nametext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
  profiletext: {
    color: '#ffffff',
    fontSize: 12,
  },
  bioCointainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 220,
    left: 20,
    backgroundColor: '#ffffff',
    width: '90%',
    height: 150,
    borderRadius: 20,
    padding: 10,
    elevation: 9,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  infoheadingtext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#246959',
  },
  infotext: {
    color: '#246959',
    fontSize: 12,
    textAlign: 'justify',
  },
  projectCointainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ffffff',
    // height: 400,
    // borderRadius: 20,
    // padding: 10,
    // width: '90%',
    // marginLeft: 20,
    // marginTop: 50,
    // elevation: 9,
    // shadowOffset: {
    //   width: 3,
    //   height: 3,
    // },
    // shadowColor: 'black',
    // shadowOpacity: 0.9,
  },
  card: {
    width: 280,
    height: 280,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#246959',
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
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  btn: {
    width: '80%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    marginTop: 80,
  },
  btnText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#246959',
  },
});

export default Home;
