/* eslint-disable no-useless-catch */
import axios from "axios";



const API_URL = 'https://67951992aad755a134eb34d4.mockapi.io/api/'

export const authServices = {
    async register(userData) {
        try {
            const response = await axios.post(`${API_URL}/Users`, userData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    async login(credentials) {
        try {
            const users = await axios.get(`${API_URL}/Users`);
            const user = users.data.find(
                u => u.email === credentials.email && u.password === credentials.password
            );
            if (user) {
                const token = this.generateToken(user);
                localStorage.setItem('token', token);
                return { token, user};

            }
            throw new Error('Invalid credentials');
        } catch (error) {
            throw error;
        }
    },

    generateToken(user) {
        const payload = {
            id: user.id,
            username:user.username,
            email: user.email,
        };
        return btoa(JSON.stringify(payload));
    },

    getCurrentUser() {
        const token = localStorage.getItem('token');
        if (token) {
            return JSON.parse(atob(token));
        }
        return null;
    },

    logout() {
        localStorage.removeItem('token');
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }

}