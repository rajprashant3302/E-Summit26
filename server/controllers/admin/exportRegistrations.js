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

async function exportRegistrations(req, res) {
    try {
        const adminCheck = await verifyAdmin(req);
        if (!adminCheck.isAdmin) {
            return res.status(403).json({
                success: false,
                message: adminCheck.error,
            });
        }

        // Get all event registrations
        const registrationsRef = db.collection("eventRegistrations");
        const registrationsSnapshot = await registrationsRef.get();

        if (registrationsSnapshot.empty) {
            return res.status(200).json({
                success: true,
                message: "No registrations found",
            });
        }

        // Collect all registrations with user and event details
        const registrations = [];
        
        for (const doc of registrationsSnapshot.docs) {
            const registration = doc.data();
            
            // Get user details
            let userName = "";
            let userEmail = "";
            const userDoc = await db.collection("users").doc(registration.userId).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                userName = userData.name || "";
                userEmail = userData.email || "";
            }

            // Get event details
            let eventName = "";
            const eventDoc = await db.collection("events").doc(registration.eventId).get();
            if (eventDoc.exists) {
                eventName = eventDoc.data().name || "";
            }

            registrations.push({
                registrationId: doc.id,
                userId: registration.userId,
                userName,
                userEmail,
                eventId: registration.eventId,
                eventName,
                registeredAt: registration.registeredAt?.toDate?.() || registration.registeredAt,
                status: registration.status || "",
            });
        }

        // Generate CSV
        const csvHeaders = [
            "Registration ID",
            "User ID",
            "User Name",
            "User Email",
            "Event ID",
            "Event Name",
            "Registered At",
            "Status"
        ];

        const csvRows = registrations.map(reg => [
            reg.registrationId,
            reg.userId,
            `"${reg.userName}"`,
            reg.userEmail,
            reg.eventId,
            `"${reg.eventName}"`,
            reg.registeredAt instanceof Date ? reg.registeredAt.toISOString() : reg.registeredAt,
            reg.status
        ].join(","));

        const csvContent = [csvHeaders.join(","), ...csvRows].join("\n");

        // Set headers for CSV download
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=registrations.csv");

        return res.status(200).send(csvContent);

    } catch (error) {
        console.error("Export registrations error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to export registrations",
        });
    }
}

module.exports = exportRegistrations;
