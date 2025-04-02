import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load places data
const places = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/places.json'), 'utf-8'));

// Generate itinerary route
router.post('/generate-itinerary', (req, res) => {
    const { budget, availableTime, interests } = req.body;

    const filteredPlaces = places.filter(place => 
        interests.some(interest => place.tags.includes(interest))
    );

    const budgetFilteredPlaces = filteredPlaces.filter(place => 
        place.cost <= budget
    );

    const generatedItinerary = [];
    let remainingTime = availableTime;

    for (const place of budgetFilteredPlaces) {
        if (place.duration && place.duration <= remainingTime) {
            generatedItinerary.push(place);
            remainingTime -= place.duration;
        }
    }

    let currentTime = 9; 
    const formattedItinerary = generatedItinerary.map(place => {
        const timeSlot = `${currentTime}:00 ${currentTime >= 12 ? 'PM' : 'AM'}`;
        currentTime += place.duration || 2;  // Assuming 2 hours if duration not provided
        if (currentTime >= 12) currentTime -= 12;
        return { time: timeSlot, activity: place.name };
    });

    res.json({ itinerary: formattedItinerary });
});

export default router;
