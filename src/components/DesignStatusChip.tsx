import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES } from '../styles/fonts';


interface DesignStatusChipProps {
    status: 'loading' | 'ready';
    onPress?: () => void;
    logoUri?: string;
    loadingText?: string;
    readyText?: string;
    subText?: string;
}

const DesignStatusChip = ({
    status,
    onPress,
    loadingText = 'Creating Your Design...',
    readyText = 'Your Design is Ready!',
    subText = 'Ready in 2 minutes',
}: DesignStatusChipProps) => {
    return (
        <View style={styles.outerWrap}>
            <TouchableOpacity
                style={styles.chipRow}
                activeOpacity={status === 'ready' && onPress ? 0.8 : 1}
                onPress={status === 'ready' && onPress ? onPress : undefined}
                disabled={status !== 'ready'}
            >
                {status === 'ready' ? (
                    <View style={styles.leftSectionReady}>
                        <View style={styles.logoReadyWrap}>
                            <Image
                                source={require('../assets/images/result.png')}
                                style={styles.logoReady}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                ) : (
                    <View style={styles.leftSectionLoading}>
                        <View style={styles.loadingCircle}>
                            <ActivityIndicator size={22} color={COLORS.buttonText} />
                        </View>
                    </View>
                )}
                {status === 'ready' ? (
                    <LinearGradient
                        colors={[COLORS.chipReadyGradientStart, COLORS.chipReadyGradientEnd]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.rightSectionReady}
                    >
                        <Text style={styles.titleReady} numberOfLines={1}>{readyText}</Text>
                        <Text style={styles.subTextReady} numberOfLines={1}>Tap to see it.</Text>
                    </LinearGradient>
                ) : (
                    <View style={styles.rightSectionLoading}>
                        <Text style={styles.titleLoading} numberOfLines={1}>{loadingText}</Text>
                        <Text style={styles.subTextLoading} numberOfLines={1}>{subText}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    outerWrap: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 25
    },
    chipRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',

        height: 70,
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: COLORS.chipShadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 2,
        overflow: 'hidden',
    },
    leftSectionLoading: {
        width: 70,
        height: '100%',
        backgroundColor: COLORS.chipLeftBg,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    loadingCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.chipLeftBg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSectionLoading: {
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.chipRightBg,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingLeft: 16,
        justifyContent: 'center',
    },
    titleLoading: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.md,
        color: COLORS.chipTitle,
        fontWeight: '700',
        marginBottom: 2,
    },
    subTextLoading: {
        fontFamily: FONT.medium,
        fontSize: FONT_SIZES.sm,
        color: COLORS.chipSub,
        fontWeight: '400',
    },
    leftSectionReady: {
        width: 70,
        height: '100%',
        backgroundColor: COLORS.text,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    logoReadyWrap: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: COLORS.text,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    logoReady: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: COLORS.text,
    },
    rightSectionReady: {
        flex: 1,
        height: '100%',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingLeft: 16,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    titleReady: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.md,
        color: COLORS.chipTitleReady,
        fontWeight: '800',
        marginBottom: 2,
    },
    subTextReady: {
        fontFamily: FONT.medium,
        fontSize: FONT_SIZES.sm,
        color: COLORS.chipTitleReady,
        fontWeight: '500',
        opacity: 0.8,
    },
});

export default DesignStatusChip; 