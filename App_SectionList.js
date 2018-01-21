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
  SectionList
} from 'react-native';
import AddEntry from './components/AddEntry';
import data from './components/dummy';

function Review ({ name, body }) {
  return (
    <View style={{ marginBottom: 15}}>
      <Text style={{ fontWeight: 'bold' }}>{name}</Text>
      <Text>{body}</Text>
    </View>
  )
}

export default class App extends React.Component {
  state = {
    value: 0
  }
  renderItem = ({ item }) => {
    return <Review {...item} />
  }
  handlePress = () => {
    alert('Hello!');
  }
  render() {
    return (
      <View>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
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
  }
})