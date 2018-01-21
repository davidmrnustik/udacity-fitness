import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider,
  ScrollView,
  FlatList,
  SectionList,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import AddEntry from './components/AddEntry';
import data from './components/dummy';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./me.png')}/>
        <View style={{margin:50}}/>
        <Image style={styles.img} source={{uri: 'https://lh3.googleusercontent.com/-NmIa6CbaCqQ/UosZWgrcPcI/AAAAAAAAHwA/--WrXKVydmw/w424-h318-n/20131116_095639.jpg'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  },
  inputText: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    marginTop: 60,
    width: 250,
    height: 40
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})