const { auth, db } = require("../config/firebaseAdmin.js");

// Middleware to check if user is admin
async function verifyAdmin(req) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return { isAdmin: false, error: "Authorization token required" };
    }

    const idToken = authHeader.split("Bearer ")[1];
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists || userDoc.data().role !== "admin") {
        return { isAdmin: false, error: "Admin access required" };
    }

    return { isAdmin: true, uid };
}

async function updateAdminEvent(req, res) {
    try {
        const adminCheck = await verifyAdmin(req);
        if (!adminCheck.isAdmin) {
            return res.status(403).json({
                success: false,
                message: adminCheck.error,
            });
        }

        const { eventId } = req.params;
        const updates = req.body;

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

        // Add updatedAt timestamp
        updates.updatedAt = new Date();
        updates.updatedBy = adminCheck.uid;

        await eventRef.update(updates);

        const updatedDoc = await eventRef.get();

        return res.status(200).json({
            success: true,
            message: "Event updated successfully",
            event: {
                id: updatedDoc.id,
                ...updatedDoc.data(),
            },
        });

    } catch (error) {
        console.error("Update admin event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update event",
        });
    }
}

module.exports = updateAdminEvent;
