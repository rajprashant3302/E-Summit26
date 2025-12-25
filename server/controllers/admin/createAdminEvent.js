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

async function createAdminEvent(req, res) {
    try {
        const adminCheck = await verifyAdmin(req);
        if (!adminCheck.isAdmin) {
            return res.status(403).json({
                success: false,
                message: adminCheck.error,
            });
        }

        const { name, description, date, venue, price, capacity, image } = req.body;

        if (!name || !date) {
            return res.status(400).json({
                success: false,
                message: "Event name and date are required",
            });
        }

        const eventData = {
            name,
            description: description || "",
            date,
            venue: venue || "",
            price: price || 0,
            capacity: capacity || null,
            image: image || "",
            createdAt: new Date(),
            createdBy: adminCheck.uid,
        };

        const newEvent = await db.collection("events").add(eventData);

        return res.status(201).json({
            success: true,
            message: "Event created successfully",
            event: {
                id: newEvent.id,
                ...eventData,
            },
        });

    } catch (error) {
        console.error("Create admin event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create event",
        });
    }
}

module.exports = createAdminEvent;
