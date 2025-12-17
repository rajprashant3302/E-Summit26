const { db } = require("../config/firebaseAdmin.js");

async function getPasses(req, res) {
    try {
        const passesRef = db.collection("passes");
        const snapshot = await passesRef.get();

        if (snapshot.empty) {
            return res.status(200).json({
                success: true,
                message: "No passes found",
                passes: [],
            });
        }

        const passes = [];
        snapshot.forEach((doc) => {
            passes.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return res.status(200).json({
            success: true,
            passes,
        });

    } catch (error) {
        console.error("Get passes error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch passes",
        });
    }
}

module.exports = getPasses;
