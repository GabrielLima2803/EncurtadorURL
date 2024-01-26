import api from '../plugins/axios';

export default async function shortenURL(originalURL: any) {
    try {
        const response = await api.post('/url', {
            url: originalURL,
        });

        const result = response.data;
        return result.shortURL;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}
