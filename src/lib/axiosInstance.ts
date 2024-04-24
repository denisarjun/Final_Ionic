import axios from 'axios';

const axiosInstance = axios.create({
    // Atur konfigurasi axiosInstance di sini
    baseURL: 'https://64f6e35b9d7754084952b88c.mockapi.io/', // Atur baseURL sesuai kebutuhan Anda
    timeout: 10000, // Atur timeout sesuai kebutuhan Anda
    headers: {
        'Content-Type': 'application/json',
        // Anda dapat menambahkan header lain jika diperlukan
    }
});

export default axiosInstance;
