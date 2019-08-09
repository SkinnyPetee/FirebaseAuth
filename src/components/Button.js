import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


const Button = (props) => {
    return(
    <View style={styles.buttonWrapperStyle}>
                    <TouchableOpacity onPress = {props.onPress}
                        style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}> {props.children}</Text>
                    </TouchableOpacity>
    </View>
    );
}

const styles = {
    buttonWrapperStyle: {
        paddingHorizontal: 30,
        marginTop: 5
    },

    buttonStyle: {
        
            alignItems: 'center',
            backgroundColor: '#2d89ef',
            padding: 10
          
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase'
    }
}

export default Button;