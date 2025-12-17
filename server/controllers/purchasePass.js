const { auth, db } = require("../config/firebaseAdmin.js");

async function purchasePass(req, res) {
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

        const { passId } = req.params;

        if (!passId) {
            return res.status(400).json({
                success: false,
                message: "Pass ID is required",
            });
        }

        // Check if pass exists
        const passRef = db.collection("passes").doc(passId);
        const passDoc = await passRef.get();

        if (!passDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "Pass not found",
            });
        }

        // Check if user already purchased this pass
        const purchaseRef = db.collection("passPurchases")
            .where("userId", "==", uid)
            .where("passId", "==", passId);
        const existingPurchase = await purchaseRef.get();

        if (!existingPurchase.empty) {
            return res.status(400).json({
                success: false,
                message: "You have already purchased this pass",
            });
        }

        const passData = passDoc.data();

        // Create purchase record
        const purchaseData = {
            userId: uid,
            passId: passId,
            passName: passData.name,
            price: passData.price,
            purchasedAt: new Date(),
            status: "pending", // Will be updated after payment verification
        };

        const newPurchase = await db.collection("passPurchases").add(purchaseData);

        return res.status(201).json({
            success: true,
            message: "Pass purchase initiated",
            purchase: {
                id: newPurchase.id,
                ...purchaseData,
            },
        });

    } catch (error) {
        console.error("Purchase pass error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to purchase pass",
        });
    }
}

module.exports = purchasePass;
