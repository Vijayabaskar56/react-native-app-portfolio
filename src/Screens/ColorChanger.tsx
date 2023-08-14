import {StatusBar} from 'react-native';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// type safety

type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function ColourChanger() {
  const [randomColour, setrandomColour] = useState('#000000');
  const [randomColourBox, setrandomColourBox] = useState('#ffffff');
  const [randomColourRound, setrandomColourRound] = useState('#dddddd');
  const [randomColourTriangle, setrandomColourTriangle] = useState('#010101');
  const [randomColourBtn, setrandomColourBtn] = useState('#010101');

  const generateColor = () => {
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const colorcode = Math.floor(Math.random() * 16);
      color += hexa[colorcode];
    }
    let colorbox = '#';
    for (let i = 0; i < 6; i++) {
      colorbox += hexa[Math.floor(Math.random() * 16)];
    }
    let colorround = '#';
    for (let i = 0; i < 6; i++) {
      colorround += hexa[Math.floor(Math.random() * 16)];
    }
    let colortriangle = '#';
    for (let i = 0; i < 6; i++) {
      colortriangle += hexa[Math.floor(Math.random() * 16)];
    }
    let colorbtn = '#';
    for (let i = 0; i < 6; i++) {
      colorbtn += hexa[Math.floor(Math.random() * 16)];
    }
    setrandomColour(color);
    setrandomColourBox(colorbox);
    setrandomColourRound(colorround);
    setrandomColourTriangle(colortriangle);
    setrandomColourBtn(colorbtn);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColour} />

      <View style={[styles.container, {backgroundColor: randomColour}]}>
        <View style={[styles.box, {backgroundColor: randomColourBox}]}></View>
        <View
          style={[styles.round, {backgroundColor: randomColourRound}]}></View>
        <View
          style={[
            styles.triangle,
            {borderRightColor: randomColourTriangle},
          ]}></View>
        <View>
          <TouchableOpacity onPress={generateColor}>
            <View style={[styles.button, {backgroundColor: randomColourBtn}]}>
              <Text style={[styles.buttontxt]}>Click Me!!</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.boxtwo, {backgroundColor: randomColourBox}]}></View>
        <View
          style={[
            styles.roundtwo,
            {backgroundColor: randomColourRound},
          ]}></View>
        <View
          style={[
            styles.triangletwo,
            {borderTopColor: randomColourTriangle},
          ]}></View>

        <StatusBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 7,
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  buttontxt: {
    color: 'white',
    fontSize: 20,
  },
  box: {
    width: '60%',
    height: '20%',
    position: 'absolute',
    top: 20,
    left: 30,
  },
  boxtwo: {
    width: '60%',
    height: '20%',
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
  round: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 200,
    left: 10,
  },
  roundtwo: {
    width: 100,
    height: 100,
    borderRadius: 50,

    position: 'absolute',
    bottom: 200,
    right: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 170,
    left: 200,
    borderTopWidth: 50,
    borderBottomWidth: 50,
    borderRightWidth: 100,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'yellow',
  },
  triangletwo: {
    width: 0,
    height: 0,
    borderTopWidth: 100,
    borderRightWidth: 50,
    borderLeftWidth: 50,
    backgroundColor: 'transparent',
    borderTopColor: 'green',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    bottom: 170,
    right: 200,
  },
});
