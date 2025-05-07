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
 * CustomTextInput - Özelleştirilmiş, gradyan arkaplanı olan metin giriş alanı
 * 
 * @param value - Metin değeri
 * @param onChangeText - Metin değiştiğinde çağrılacak fonksiyon
 * @param placeholder - Giriş alanı boşken gösterilecek placeholder metni
 * @param maxLength - Maksimum karakter sayısı (varsayılan: 500)
 * @param style - Ek stil eklemek için (isteğe bağlı)
 * @param autoFocus - Otomatik fokus olsun mu (isteğe bağlı)
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
        height: '25%', // Daha uzun input alanı
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: COLORS.inputBackground,
        // Android blur efekti için
        ...Platform.select({
            android: {
                elevation: 3,
            },
            ios: {
                // iOS için özel gölge efekti
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
        paddingBottom: 32, // Karakter sayacına yeteri kadar yer bırak
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