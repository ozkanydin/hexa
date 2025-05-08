import { createLogoDesign, updateLogoDesignStatus } from './firebase';
import { CreateLogoDesignDTO, LogoDesign } from '../types/logo';


class LogoService {
    /**
     * 
     * @param data 
     * @returns 
     */
    async createDesign(data: CreateLogoDesignDTO): Promise<LogoDesign> {
        try {
            const docRef = await createLogoDesign(data);
            return {
                id: docRef.id,
                ...data,
                status: 'pending',
                createdAt: new Date(),
            };
        } catch (error) {
            console.error('Logo tasarımı oluşturulurken hata:', error);
            throw new Error('Logo tasarımı oluşturulamadı');
        }
    }

    /**
     * 
     * @param designId 
     * @param status 
     * @param imageUrl 
     */
    async updateDesignStatus(
        designId: string,
        status: 'pending' | 'completed' | 'failed',
        imageUrl?: string
    ): Promise<void> {
        try {
            await updateLogoDesignStatus(designId, status, imageUrl);
        } catch (error) {
            console.error('Logo tasarımı güncellenirken hata:', error);
            throw new Error('Logo tasarımı güncellenemedi');
        }
    }
}

export const logoService = new LogoService(); 