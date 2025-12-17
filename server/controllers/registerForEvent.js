const { auth, db } = require("../config/firebaseAdmin.js");

async function registerForEvent(req, res) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
            });
        }

        const idToken = authHeader.split("Bearer ")[1];
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;

        const { eventId } = req.params;

        if (!eventId) {
            return res.status(400).json({
                success: false,
                message: "Event ID is required",
            });
        }

        // Check if event exists
        const eventRef = db.collection("events").doc(eventId);
        const eventDoc = await eventRef.get();

        if (!eventDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Check if user is already registered
        const registrationRef = db.collection("eventRegistrations")
            .where("userId", "==", uid)
            .where("eventId", "==", eventId);
        const existingRegistration = await registrationRef.get();

        if (!existingRegistration.empty) {
            return res.status(400).json({
                success: false,
                message: "You are already registered for this event",
            });
        }

        // Register user for the event
        await db.collection("eventRegistrations").add({
            userId: uid,
            eventId: eventId,
            registeredAt: new Date(),
            status: "registered",
        });

        return res.status(201).json({
            success: true,
            message: "Successfully registered for the event",
        });

    } catch (error) {
        console.error("Event registration error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to register for event",
        });
    }
}

module.exports = registerForEvent;
