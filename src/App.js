import React, {Component} from 'react';
import { Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import Header from './components/Header';
import InputWrapper from './components/InputWrapper';
import Button from './components/Button';
import * as firebase from 'firebase';


class App extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyD4c5_BI9itbbMqe7ObqQUaYcMo8fhPvQ0",
      authDomain: "auth-21596.firebaseapp.com",
      databaseURL: "https://auth-21596.firebaseio.com",
      projectId: "auth-21596",
      storageBucket: "auth-21596.appspot.com",
      messagingSenderId: "357096555657",
      appId: "1:357096555657:web:aff4f032b642757c"
    }
    firebase.initializeApp(firebaseConfig);
  }

  state = {
    email: '',
    password: '',
    isLoading: false,
    error: ''
  }

  renderIndicator() {
  
    if(this.state.isLoading) {
     return(
      <ActivityIndicator size="small" style={ styles.ActivityIndicatorStyle} />
     ) 
    }else{
      return(
      <Button
      onPress = {this.onButtonPress.bind(this)}
     >
       Login
     </Button>
      )
    }
  
};

  onChangeEmail(email) {
    this.setState({email})
  }

  onChangePassword(password) {
    this.setState({password})
  }

  onButtonPress() {
    this.setState({
      isLoading: true
    })
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onSignupSuccess.bind(this) )
      .catch(error => this.setState({ error: error.message }))
  }

  onSignupSuccess() {
    this.setState({
      isLoading: false
    });
    this.setState({ email: '', password: ''})
  }
  render() {
    return(
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <Header>auth</Header>
        
        <InputWrapper 
          onChangeText = {this.onChangeEmail.bind(this)}
          value = {this.state.email}
          autoCorrect = {false}
          secureTextEntry = {false}
          placeholder = "asdf@gmail.com"
        >
            Email
        </InputWrapper>
        <InputWrapper 
          onChangeText = {this.onChangePassword.bind(this)}
          value = {this.state.password}
          autoCorrect = {false}
          secureTextEntry = {true}
          placeholder = "password"
        >
          Password
        </InputWrapper>
        
        {this.renderIndicator()}
         
        <Text>{this.state.error}</Text>
      </SafeAreaView>
      );
  
  
  }
};



const styles = {
  SafeAreaViewStyle: {
      flex: 1,
      backgroundColor: '#FFFFFF'
  },
  ActivityIndicatorStyle: {
    marginTop: 10
  }
  
}

export default App;