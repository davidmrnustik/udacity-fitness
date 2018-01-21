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
  Image,
  Modal,
  Button,
  WebView
} from 'react-native';
import AddEntry from './components/AddEntry';
import data from './components/dummy';

export default class App extends React.Component {
  state = {
    modalVisible: false,
    webViewVisible: false
  }
  openModal = () => {
    this.setState({modalVisible:true})
  }
  closeModal = () => {
    this.setState({modalVisible:false})
  }
  webViewLoad = () => {
    this.setState({webViewVisible:true})
  }
  webViewEnd = () => {
    this.setState({webViewVisible:false})
  }
  render() {
    const { modalVisible, webViewVisible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewContainerCenter}>
          <Modal
            visible={modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={styles.modalText}>This is content inside of modal component</Text>
                <Button
                  onPress={() => this.closeModal()}
                  title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
            onPress={() => this.openModal()}
            title="Open modal"
          />
        </View>
        <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
          style={styles.webView}
          onLoadStart={this.webViewLoad}
          onLoadEnd={this.webViewEnd}
        />
        {webViewVisible && (
          <View style={styles.viewContainerCenter}>
            <Text>Web is loading...</Text>
          </View>
        )}
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
  viewContainerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  webView: {
    flex: 1
  },
  innerContainer: {
    alignItems: 'center',
  },
  modalText: {
    color: '#fff'
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