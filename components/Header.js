import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header : {
        height: 90,
        width: '100%',
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle : {
        color: 'black',
        fontSize: 18
    }
});