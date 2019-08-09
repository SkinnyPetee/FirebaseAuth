import React from 'react';
import {View, Text} from 'react-native' ; 


const Header = (props)  =>  {
    return(
    <View style={styles.wrapperViewStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
    </View>
    );
}

const styles = {
    wrapperViewStyle: {
        
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#456',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        
    },
    textStyle: {
        textTransform: 'capitalize',
        fontSize: 35
    },
    
}

export default Header;