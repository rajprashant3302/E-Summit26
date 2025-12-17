const { db } = require("../config/firebaseAdmin.js");

async function getEvents(req, res) {
    try {
        const eventsRef = db.collection("events");
        const snapshot = await eventsRef.get();

        if (snapshot.empty) {
            return res.status(200).json({
                success: true,
                message: "No events found",
                events: [],
            });
        }

        const events = [];
        snapshot.forEach((doc) => {
            events.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return res.status(200).json({
            success: true,
            events,
        });

    } catch (error) {
        console.error("Get events error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch events",
        });
    }
}

module.exports = getEvents;
