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

async function getAdminUserById(req, res) {
    try {
        const adminCheck = await verifyAdmin(req);
        if (!adminCheck.isAdmin) {
            return res.status(403).json({
                success: false,
                message: adminCheck.error,
            });
        }

        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const userRef = db.collection("users").doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Get user's event registrations
        const registrationsRef = db.collection("eventRegistrations")
            .where("userId", "==", userId);
        const registrationsSnapshot = await registrationsRef.get();

        const registrations = [];
        registrationsSnapshot.forEach((doc) => {
            registrations.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        // Get user's pass purchases
        const purchasesRef = db.collection("passPurchases")
            .where("userId", "==", userId);
        const purchasesSnapshot = await purchasesRef.get();

        const purchases = [];
        purchasesSnapshot.forEach((doc) => {
            purchases.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return res.status(200).json({
            success: true,
            user: {
                id: userDoc.id,
                ...userDoc.data(),
            },
            registrations,
            purchases,
        });

    } catch (error) {
        console.error("Get admin user by ID error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch user",
        });
    }
}

module.exports = getAdminUserById;
