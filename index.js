const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// .env 파일 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// API 키를 HTML에 전달
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});