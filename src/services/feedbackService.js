import { db, collection, addDoc, serverTimestamp } from './firebase';

/**
 * Save custom case feedback to Firestore
 * @param {string} email - User's email address
 * @param {string} message - User's feedback message
 * @param {Object} metadata - Optional metadata (archetype, intensity, etc.)
 * @returns {Promise<string>} - Document ID of saved feedback
 */
export const saveCustomCase = async (email, message, metadata = {}) => {
    try {
        if (!db) {
            throw new Error('Firebase is not initialized');
        }

        const customCasesRef = collection(db, 'custom_cases');

        const docRef = await addDoc(customCasesRef, {
            email,
            message,
            timestamp: serverTimestamp(),
            ...metadata
        });

        return docRef.id;
    } catch (error) {
        console.error('Error saving custom case:', error);
        throw error;
    }
};
