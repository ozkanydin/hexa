import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES } from '../styles/fonts';

const LOGO_URI = require('../assets/images/result.png');
const backgroundImage = require('../assets/images/back gradient.png');

const STYLE_LABELS: Record<string, string> = {
    'no-style': 'No Style',
    'monogram': 'Monogram',
    'abstract': 'Abstract',
    'mascot': 'Mascot',
    'minimalist': 'Minimalist',
    'vintage': 'Vintage',
};

interface OutputScreenProps {
    onClose?: () => void;
    prompt: string;
    styleId: string;
}

const OutputScreen = ({ onClose, prompt, styleId }: OutputScreenProps) => {
    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleCopy = () => {
        Alert.alert('Copied');
    };

    return (
        <SafeAreaView style={styles.safeArea}>


            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerText}>Your Design</Text>
                        <TouchableOpacity onPress={handleClose} style={styles.closeBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                            <Ionicons name="close" size={28} color={COLORS.text} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logoWrap}>
                        <Image source={LOGO_URI} style={styles.logoImg} resizeMode="contain" />
                    </View>
                    <View style={styles.promptBox}>
                        <View style={styles.promptHeaderRow}>
                            <Text style={styles.promptLabel}>Prompt</Text>
                            <TouchableOpacity onPress={handleCopy} style={styles.copyBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                <Ionicons name="copy-outline" size={16} color={COLORS.text} />
                                <Text style={styles.copyText}>Copy</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.promptText}>{prompt}</Text>
                        <View style={styles.styleTag}>
                            <Text style={styles.styleTagText}>{STYLE_LABELS[styleId] || styleId}</Text>
                        </View>
                    </View>

                </View>
            </ImageBackground>


        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');
const LOGO_SIZE = width - 48;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    headerText: {
        fontFamily: FONT.bold,
        fontSize: 22,
        color: COLORS.textHeading,
        fontWeight: '800',
    },
    closeBtn: {
        padding: 2,
    },
    logoWrap: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: COLORS.text,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        overflow: 'hidden',
    },
    logoImg: {
        width: '80%',
        height: '80%',
        borderRadius: 12,
    },
    promptBox: {
        width: '100%',
        backgroundColor: COLORS.inputBackground,
        borderRadius: 16,
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
    },
    promptHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    promptLabel: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.md,
        color: COLORS.textHeading,
        fontWeight: '700',
        opacity: 0.9,
    },
    copyBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    copyText: {
        fontFamily: FONT.medium,
        fontSize: FONT_SIZES.xs,
        color: COLORS.text,
        marginLeft: 4,
        fontWeight: '400',
        opacity: 0.8,
    },
    promptText: {
        fontFamily: FONT.regular,
        fontSize: FONT_SIZES.md,
        color: COLORS.text,
        marginBottom: 10,
        marginTop: 2,
        fontWeight: '400'
    },
    styleTag: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.outpuStyleButton,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    styleTagText: {
        fontFamily: FONT.medium,
        fontSize: FONT_SIZES.xs,
        color: COLORS.text,
        opacity: 0.8,
        fontWeight: '400'
    },
});

export default OutputScreen; 