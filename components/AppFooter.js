import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppFooter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                All rights reserved, 2025
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3E4A59',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});

export default AppFooter;
