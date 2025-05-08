import React from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES } from '../styles/fonts';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    maxLength?: number;
    style?: object;
    autoFocus?: boolean;
}

/**
 * 
 * 
 * @param value 
 * @param onChangeText 
 * @param placeholder 
 * @param maxLength
 * @param style 
 * @param autoFocus 
 */
const CustomTextInput = ({
    value,
    onChangeText,
    placeholder,
    maxLength = 500,
    style,
    autoFocus = false
}: Props) => {
    return (
        <View style={[styles.container, style]}>
            <LinearGradient
                colors={[COLORS.inputGradientStart, COLORS.inputGradientEnd]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradient}
            >
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.placeholder}
                    multiline
                    maxLength={maxLength}
                    value={value}
                    onChangeText={onChangeText}
                    textAlignVertical="top"
                    autoFocus={autoFocus}
                    selectionColor={COLORS.selected}
                />
                <Text style={styles.counter}>{value.length}/{maxLength}</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '25%',
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: COLORS.inputBackground,
        ...Platform.select({
            android: {
                elevation: 3,
            },
            ios: {
                shadowColor: COLORS.background,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            }
        }),
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32, 
        color: COLORS.text,
        fontSize: FONT_SIZES.md,
        fontFamily: FONT.regular,
        fontWeight: '400',
    },
    counter: {
        position: 'absolute',
        left: 16,
        bottom: 12,
        color: COLORS.counter,
        fontSize: FONT_SIZES.sm,
        fontFamily: FONT.regular,
    },
});

export default CustomTextInput; 