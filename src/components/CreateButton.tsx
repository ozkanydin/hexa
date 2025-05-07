import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { FONT } from '../styles/fonts';

interface Props {
    onPress?: () => void;
    style?: ViewStyle;
    children: React.ReactNode;
}

const CreateButton = ({ onPress, style, children }: Props) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.85}>
        <LinearGradient
            colors={[COLORS.buttonGradientStart, COLORS.buttonGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
        >
            <Text style={styles.text}>{children}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 999,
        overflow: 'hidden',
        marginTop: 36,
        shadowColor: '#5F2EEA',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.22,
        shadowRadius: 16,
        elevation: 8,
    },
    gradient: {
        width: '100%',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
    },
    text: {
        color: COLORS.buttonText,
        fontSize: 18,
        fontFamily: FONT.bold,
        fontWeight: '600',
        letterSpacing: 0.2,
    },
});

export default CreateButton; 