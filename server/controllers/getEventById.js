const { db } = require("../config/firebaseAdmin.js");

async function getEventById(req, res) {
    try {
        const { eventId } = req.params;

        if (!eventId) {
            return res.status(400).json({
                success: false,
                message: "Event ID is required",
            });
        }

        const eventRef = db.collection("events").doc(eventId);
        const eventDoc = await eventRef.get();

        if (!eventDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        return res.status(200).json({
            success: true,
            event: {
                id: eventDoc.id,
                ...eventDoc.data(),
            },
        });

    } catch (error) {
        console.error("Get event by ID error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch event",
        });
    }
}

module.exports = getEventById;
