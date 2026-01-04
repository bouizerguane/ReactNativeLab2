import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AboutScreen from './AboutScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Header en haut */}
            <AppHeader />

            {/* Zone de contenu centrale avec flex: 1 */}
            <View style={styles.content}>
                <AboutScreen />
            </View>

            {/* Footer en bas */}
            <AppFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57', // Vert foncé
    },
    content: {
        flex: 1, // Cette propriété permet au contenu de prendre tout l'espace disponible
    },
});
