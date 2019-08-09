import React from 'react';
import { View , TextInput, Text} from 'react-native';
import {  responsiveFontSize } from 'react-native-responsive-dimensions';


const InputWrapper = (props) => {

    return (
        <View style={styles.WrapperViewStyle}> 
            <Text style={styles.TextStyle}>{props.children}</Text>
            
            <TextInput 
                style={styles.TextInputStyle}
                onChangeText = {props.onChangeText}
                value = {props.value}
                autoCorrect = {props.autoCorrect}
                secureTextEntry = {props.secureTextEntry}
                placeholder = {props.placeholder}
                
            />
        </View>
    );

};

const styles = {
    WrapperViewStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
        
    },
    TextStyle: {
        flex: 1,
        fontSize: responsiveFontSize(2)
    },
    TextInputStyle: {
        
        flex: 2,
        height: 35,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#FCE443'
        
    },
    
};

export default InputWrapper;