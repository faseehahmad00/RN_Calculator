import React, { useState } from 'react';
import {
  StatusBar,
  Vibration,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default function App() {
  let [scr1, Setscr1] = useState('');
  let [scr2, Setscr2] = useState('');

  function input(value) {
    return () => {
      Setscr1(scr1 + value);
      try {
        Setscr2('= ' + eval(scr1+value));
      } catch (err) {
        Setscr2('')
      }
    }
  }

  function equals() {
    if (scr1.length > 0) {
      try {
        Vibration.vibrate(50);
        Setscr1(eval(scr1));
        Setscr2('');
      } catch (err) {
        Setscr1('');
        Setscr2('E');
      }
    }
  }

  function clear() {
    Vibration.vibrate(50);
    Setscr1('');
    Setscr2('');
  }

  function backspace(){
    if(scr1.length){
      Setscr2('')
    }
    if(scr1.length>0){
      Setscr1(
          scr1.slice(0,scr1.length-1)
      )
      try {
        if(scr2.length==1){
          Setscr2='';
        }
        if(scr1.length>1){
          Setscr2('= ' + eval(scr1.slice(0,scr1.length-1)));
        }
      } catch (err) {
        Setscr2('')
      }
    }
  }
  function percent() {
    try {
      Setscr1('= ' + eval(scr1) / 100);
      Setscr2('');
    } catch (err) {
      Setscr1('');
      Setscr2('E');
    }
  }
  return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.body}>
          {/*<View style={styles.topbar}>*/}
          {/*  <Text style={styles.topbartext}>CALCULATOR</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.line}/>*/}
          <View style={styles.screen}>
            <Text style={styles.screentext}> {scr1} </Text>
          </View>
          <View style={styles.screen}>
            <Text style={styles.screentext}> {scr2} </Text>
          </View>
          <View style={styles.line}/>

          <View style={styles.topbuttonbar}>
            <TouchableOpacity style={styles.clearbutton} onPress={clear}>
              <Text style={styles.clearButtonText}> C </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearbutton} onPress={backspace}>
              <Text style={styles.clearButtonText}> [--x </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonbar}>
            <TouchableOpacity style={styles.button} onPress={input('7')}>
              <Text style={styles.buttontext}> 7 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('8')}>
              <Text style={styles.buttontext}> 8 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('9')}>
              <Text style={styles.buttontext}> 9 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('/')}>
              <Text style={styles.functionbuttontext}> / </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbar}>
            <TouchableOpacity style={styles.button} onPress={input('4')}>
              <Text style={styles.buttontext}> 4 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('5')}>
              <Text style={styles.buttontext}> 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('6')}>
              <Text style={styles.buttontext}> 6 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('*')}>
              <Text style={styles.functionbuttontext}> * </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbar}>
            <TouchableOpacity style={styles.button} onPress={input('1')}>
              <Text style={styles.buttontext}> 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('2')}>
              <Text style={styles.buttontext}> 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('3')}>
              <Text style={styles.buttontext}> 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('-')}>
              <Text style={styles.functionbuttontext}> - </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbar}>
            <TouchableOpacity style={styles.button} onPress={percent}>
              <Text style={styles.buttontext}> % </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('0')}>
              <Text style={styles.buttontext}> 0 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('.')}>
              <Text style={styles.buttontext}> . </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={input('+')}>
              <Text style={styles.functionbuttontext}> +</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.individualButton} onPress={equals}>
            <Text style={styles.equalButtonText}> = </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  body:{
    flex:1,
    justifyContent:"flex-start",
  },
  // topbar: {
  //   paddingHorizontal: 10,
  //   flex: 0.05,
  //   backgroundColor: '#000',
  //   justifyContent:"flex-start",
  // },
  // topbartext: {
  //   color: '#eee',
  //   fontSize: 26,
  //   fontWeight: 'bold',
  //   marginLeft:7,
  // },
  button: {
    flex: 1,
    backgroundColor: '#181818',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal:5,
    borderRadius:50,
  },
  individualButton: {
    flex: 0.09,
    backgroundColor: '#181818',
    marginVertical: 2,
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:25,
  },
  buttontext: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  functionbuttontext: {
    color: '#00AA00',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  clearButtonText: {
    color: '#f00',
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  equalButtonText: {
    color: 'goldenrod',
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  buttonbar: {
    flex: 0.11,
    flexDirection: 'row',
    marginVertical:2,
    marginHorizontal:6,
  },
  topbuttonbar:{
    flex:0.09,
    flexDirection:"row",

  },
  clearbutton:{
    flex:1,
    backgroundColor: '#181818',
    marginVertical: 2,
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:25,
  },
  screen: {
    flex: 0.189,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  screentext: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  line:{
    flex:0.002,
    backgroundColor:"#aaa",
    marginHorizontal:18,
    marginBottom:10,
  }
});

