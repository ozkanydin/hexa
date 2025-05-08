import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, DocumentData, doc, updateDoc } from 'firebase/firestore';
import { LogoDesign, CreateLogoDesignDTO } from '../types/logo';

const firebaseConfig = {
    apiKey: "-",
    authDomain: "-",
    databaseURL: "-",
    projectId: "-",
    storageBucket: "-",
    messagingSenderId: "-",
    appId: "-",
    measurementId: "-"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const logoDesignsCollection = collection(db, 'logoDesigns');

/**
 * 
 * @param data 
 * @returns 
 */
export const createLogoDesign = async (data: CreateLogoDesignDTO): Promise<DocumentData> => {
    try {
        const docRef = await addDoc(logoDesignsCollection, {
            ...data,
            status: 'pending',
            createdAt: serverTimestamp(),
        });
        return docRef;
    } catch (error) {
        console.error('Logo tasarımı kaydedilirken hata oluştu:', error);
        throw error;
    }
};

/**
 * 
 * @param designId 
 * @param status 
 * @param imageUrl 
 */
export const updateLogoDesignStatus = async (
    designId: string,
    status: 'pending' | 'completed' | 'failed',
    imageUrl?: string
): Promise<void> => {
    try {
        const designRef = doc(db, 'logoDesigns', designId);
        const updateData: { status: string; imageUrl?: string } = { status };

        if (imageUrl) {
            updateData.imageUrl = imageUrl;
        }

        await updateDoc(designRef, updateData);
    } catch (error) {
        console.error('Logo tasarımı güncellenirken hata oluştu:', error);
        throw error;
    }
};

export default db; 