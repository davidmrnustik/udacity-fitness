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
  KeyboardAvoidingView
} from 'react-native';
import AddEntry from './components/AddEntry';
import data from './components/dummy';

export default class App extends React.Component {
  state = {
    input: 'david.mrnustik@hotmail.com',
    showInput: false
  }
  handlePress = () => {
    alert('Hello!');
  }
  onValueChange = input => {
    this.setState(() => ({
      input
    }))
  }
  onSwitchChange = () => {
    this.setState(state => ({
      showInput: !state.showInput
    }))
  }
  render() {
    const { input, showInput } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Switch
          value={showInput}
          onValueChange={this.onSwitchChange}
        />
        {showInput &&
          <TextInput
            value={input}
            onChangeText={this.onValueChange}
            style={styles.inputText}
          />}
      </KeyboardAvoidingView>
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
  }
})