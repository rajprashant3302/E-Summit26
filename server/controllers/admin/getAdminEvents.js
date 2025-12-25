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

async function getAdminEvents(req, res) {
    try {
        const adminCheck = await verifyAdmin(req);
        if (!adminCheck.isAdmin) {
            return res.status(403).json({
                success: false,
                message: adminCheck.error,
            });
        }

        const eventsRef = db.collection("events");
        const snapshot = await eventsRef.get();

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
        console.error("Get admin events error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch events",
        });
    }
}

module.exports = getAdminEvents;
