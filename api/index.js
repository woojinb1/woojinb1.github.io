export default function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'GET') {
        // Public browser key: restrict websites and APIs in Google Cloud.
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        if (!apiKey) return res.status(503).json({ message: 'Map is temporarily unavailable' });
        res.status(200).json({ apiKey });
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
