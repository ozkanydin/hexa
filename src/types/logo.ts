export type LogoStyle = 'no-style' | 'monogram' | 'abstract' | 'mascot' | 'minimalist' | 'vintage';

export interface LogoDesign {
    id?: string;
    prompt: string;
    styleId: LogoStyle;
    createdAt: Date;
    imageUrl?: string;
    status: 'pending' | 'completed' | 'failed';
    userId?: string;
}

export interface CreateLogoDesignDTO {
    prompt: string;
    styleId: LogoStyle;
    userId?: string;
} 