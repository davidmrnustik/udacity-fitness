import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddEntry from './components/AddEntry';
import data from './components/dummy';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import styled from 'styled-components';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 20;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <CenterView>
          <WelcomeBtn onPress={() => alert('Hello')}>
            <WelcomeText>PUSH ME</WelcomeText>
          </WelcomeBtn>
        </CenterView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})