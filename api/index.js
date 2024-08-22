const dotenv = require('dotenv');

// .env 파일 로드
dotenv.config();

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}