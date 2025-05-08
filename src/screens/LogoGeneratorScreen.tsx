import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Platform, ImageBackground, Alert, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { FONT, FONT_SIZES, } from '../styles/fonts';
import CustomTextInput from '../components/CustomTextInput';
import SurpriseMeButton from '../components/SurpriseMeButton';
import LogoStyleSelector from '../components/LogoStyleSelector';
import CreateButton from '../components/CreateButton';
import DesignStatusChip from '../components/DesignStatusChip';
import OutputScreen from './OutputScreen';

const backgroundImage = require('../assets/images/back gradient.png');

const EXAMPLE_PROMPT = "A professional logo for Harrison & Co. Law Firm, using balanced serif fonts";

const LogoGeneratorScreen = () => {
    const [prompt, setPrompt] = useState('');
    const [chipStatus, setChipStatus] = useState<'none' | 'loading' | 'ready'>('none');
    const [modalVisible, setModalVisible] = useState(false);
    const [loadingSeconds, setLoadingSeconds] = useState<number | null>(null);
    const [selectedStyle, setSelectedStyle] = useState('no-style');

    const handleSurpriseMe = () => {
        setPrompt(EXAMPLE_PROMPT);
    };

    const handleCreate = () => {
        setChipStatus('loading');
        const randomMs = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;
        setLoadingSeconds(Math.round(randomMs / 1000));
        setTimeout(() => {
            setChipStatus('ready');
            setLoadingSeconds(null);
        }, randomMs);
    };

    const handleChipPress = () => {
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <View style={styles.contentContainer}>
                        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                            <Text style={styles.logoHeader}>AI Logo</Text>
                            {chipStatus !== 'none' && (
                                <DesignStatusChip
                                    status={chipStatus === 'loading' ? 'loading' : 'ready'}
                                    onPress={chipStatus === 'ready' ? handleChipPress : undefined}
                                    loadingText="Creating Your Design..."
                                    readyText="Your Design is Ready!"
                                    subText={chipStatus === 'loading' && loadingSeconds ? `Ready in ${loadingSeconds} seconds` : undefined}
                                />
                            )}
                            <View style={styles.promptContainer}>
                                <Text style={styles.promptHeader}>Enter Your Prompt</Text>
                                <SurpriseMeButton onPress={handleSurpriseMe} />
                            </View>
                            <CustomTextInput
                                value={prompt}
                                onChangeText={setPrompt}
                                placeholder="A blue lion logo reading 'HEXA' in bold letters"
                                maxLength={500}
                            />
                            <Text style={styles.logoStylesHeader}>Logo Styles</Text>
                            <LogoStyleSelector
                                selectedStyleId={selectedStyle}
                                onSelect={setSelectedStyle}
                            />
                            <View style={styles.spacer} />
                        </ScrollView>
                        <View style={styles.buttonContainer}>
                            <CreateButton onPress={handleCreate}>Create ✨</CreateButton>
                        </View>
                    </View>
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        onRequestClose={() => setModalVisible(false)}
                        presentationStyle="pageSheet"
                        style={{
                            backgroundColor: 'blue',
                        }}

                    >
                        <OutputScreen
                            onClose={() => setModalVisible(false)}
                            prompt={prompt}
                            styleId={selectedStyle}
                        />
                    </Modal>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 18,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 24,
    },
    logoHeader: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.lg, 
        textAlign: 'center',
        color: COLORS.textHeading,
        fontWeight: '800',
        marginBottom: 28,
        letterSpacing: 0.2,
    },
    promptContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    promptHeader: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.xl, 
        color: COLORS.textHeading,
        fontWeight: '800',
        letterSpacing: 0.1,
    },
    logoStylesHeader: {
        fontFamily: FONT.bold,
        fontSize: FONT_SIZES.xl, 
        color: COLORS.textHeading,
        fontWeight: '800',
        marginBottom: 12,
        marginTop: 20,
        letterSpacing: 0.1,
    },
    spacer: {
        flex: 1,
        minHeight: 60,
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: Platform.OS === 'ios' ? 30 : 24,
        marginTop: 'auto',
    },
});

export default LogoGeneratorScreen; 