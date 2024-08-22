// api/google-maps.js
export default function handler(req, res) {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: 'Google Maps API key is not set.' });
    }
  
    res.status(200).json({ apiKey });
  }