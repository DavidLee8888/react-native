import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Seperator = () => {
    return (
        <View style={ styles.seperatorContainer } />
    );
}

const styles = StyleSheet.create({
    seperatorContainer: {
        backgroundColor: '#E1E1E1',
        height: 1,
    },
});

export default Seperator;