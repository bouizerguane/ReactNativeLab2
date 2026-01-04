import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.subtitle}>About Us</Text>
            <Text style={styles.paragraph} numberOfLines={4}>
                Little Lemon is a charming neighborhood bistro that serves simple food 
                and classic cocktails in a lively but casual environment. We would love 
                to hear more about your experience with us! Little Lemon opened in 1995 
                by two Italian brothers, Adrian and Mario.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F4CE14',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 16,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: '#EAEAEA',
        lineHeight: 24,
        textAlign: 'center',
    },
});

export default AboutScreen;
