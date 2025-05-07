import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES } from '../styles/fonts';

interface SurpriseMeButtonProps {
    onPress?: () => void;
}

const SurpriseMeButton = ({ onPress }: SurpriseMeButtonProps) => (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Ionicons name="dice" size={18} color={COLORS.icon} style={styles.icon} />
        <Text style={styles.text}>Surprise me</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
    },
    icon: {
        marginRight: 4,
        marginTop: 1,
    },
    text: {
        color: COLORS.text,
        fontSize: FONT_SIZES.sm,
        fontFamily: FONT.medium,
        fontWeight: '400',
    },
});

export default SurpriseMeButton; 