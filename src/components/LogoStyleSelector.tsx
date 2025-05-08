import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES } from '../styles/fonts';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width * 0.25, 86);
const SPACING = 10;

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        width: '100%',
    },
    scrollContainer: {
        paddingHorizontal: 8,
    },
    cardContainer: {
        alignItems: 'center',
        marginHorizontal: SPACING / 2,
        width: CARD_WIDTH,
        marginBottom: 8,
    },
    styleCard: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden',
        marginBottom: 8,
    },
    selectedCard: {
        borderColor: COLORS.selected,
        borderWidth: 2,
    },
    noStyleCard: {
        backgroundColor: COLORS.logoNoStyle,
        borderColor: COLORS.logoNoStyleBorder,
        borderWidth: 1.5,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    noStyleIconContainer: {
        borderRadius: 100,
        backgroundColor: 'transparent',
    },
    styleLabel: {
        fontSize: FONT_SIZES.xs,
        fontFamily: FONT.medium,
        textAlign: 'center',
        color: COLORS.logoLabelUnselected,
        marginTop: 5,
        fontWeight: '500',
    },
    selectedLabel: {
        color: COLORS.text,
        fontWeight: '600',
    },
    // Monogram stili için
    monogramIcon: {
        fontSize: 42,
        fontWeight: 'bold',
        color: COLORS.logoMonogramText,
        fontStyle: 'italic',
    },
    // Abstract stili için
    abstractIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    star1: {
        position: 'absolute',
        width: 4,
        height: 4,
        backgroundColor: COLORS.logoStarColor,
        borderRadius: 4,
        top: '25%',
        left: '30%',
    },
    star2: {
        position: 'absolute',
        width: 6,
        height: 6,
        backgroundColor: COLORS.logoStarColor,
        borderRadius: 6,
        top: '20%',
        right: '25%',
    },
    star3: {
        position: 'absolute',
        width: 4,
        height: 4,
        backgroundColor: COLORS.logoStarColor,
        borderRadius: 4,
        bottom: '35%',
        right: '30%',
    },
    // Mascot stili için
    mascotIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.logoMascotOverlay,
    },
});

// Logo stil seçenekleri
const logoStyles = [
    {
        id: 'no-style',
        label: 'No Style',
        icon: <Ionicons name="ban-outline" size={42} color={COLORS.text} />,
        backgroundColor: COLORS.logoNoStyle,
        borderColor: COLORS.logoNoStyleBorder,
    },
    {
        id: 'monogram',
        label: 'Monogram',
        icon: <Text style={styles.monogramIcon}>𝔍𝔯</Text>,
        backgroundColor: COLORS.logoMonogram,
        borderColor: 'transparent',
    },
    {
        id: 'abstract',
        label: 'Abstract',
        icon: (
            <View style={styles.abstractIconContainer}>
                <Ionicons name="planet-outline" size={32} color={COLORS.text} />
                <View style={styles.star1} />
                <View style={styles.star2} />
                <View style={styles.star3} />
            </View>
        ),
        backgroundColor: COLORS.logoAbstract,
        borderColor: 'transparent',
    },
    {
        id: 'mascot',
        label: 'Mascot',
        icon: <View style={styles.mascotIcon} />,
        backgroundColor: COLORS.logoMascot,
        borderColor: 'transparent',
    },
    {
        id: 'minimalist',
        label: 'Minimalist',
        icon: <Ionicons name="square-outline" size={32} color={COLORS.text} />,
        backgroundColor: COLORS.logoMinimalist,
        borderColor: 'transparent',
    },
    {
        id: 'vintage',
        label: 'Vintage',
        icon: <Ionicons name="compass-outline" size={32} color={COLORS.text} />,
        backgroundColor: COLORS.logoVintage,
        borderColor: 'transparent',
    },
];

interface LogoStyleSelectorProps {
    onSelect?: (styleId: string) => void;
    selectedStyleId?: string;
}

/**
 * 
 * 
 * 
 * 
 * @param onSelect 
 * @param selectedStyleId 
 */
const LogoStyleSelector = ({ onSelect, selectedStyleId = 'no-style' }: LogoStyleSelectorProps) => {
    const [selectedStyle, setSelectedStyle] = useState(selectedStyleId);

    const handleSelect = (styleId: string) => {
        setSelectedStyle(styleId);
        if (onSelect) {
            onSelect(styleId);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                snapToInterval={CARD_WIDTH + SPACING}
                decelerationRate="fast"
                keyboardShouldPersistTaps="handled"
            >
                {logoStyles.map((style) => (
                    <View key={style.id} style={styles.cardContainer}>
                        <TouchableOpacity
                            style={[
                                styles.styleCard,
                                { backgroundColor: style.backgroundColor },
                                selectedStyle === style.id && styles.selectedCard,
                                style.id === 'no-style' && styles.noStyleCard,
                            ]}
                            onPress={() => handleSelect(style.id)}
                            activeOpacity={0.7}
                        >
                            <View style={[
                                styles.iconContainer,
                                style.id === 'no-style' && styles.noStyleIconContainer,
                            ]}>
                                {style.icon}
                            </View>
                        </TouchableOpacity>

                        <Text
                            style={[
                                styles.styleLabel,
                                selectedStyle === style.id && styles.selectedLabel,
                            ]}
                        >
                            {style.label}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default LogoStyleSelector; 