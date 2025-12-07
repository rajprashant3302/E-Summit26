const { db } = require("../config/firebaseAdmin.js");

async function storePayment(req, res) {
  const { userId, email, amount, orderId, paymentId, signature } = req.body;

  try {
    await db.collection("users").doc(userId).collection("eventRegistered").add({
      userId,
      email,
      amount,
      orderId,
      paymentId,
      signature,
      createdAt: new Date(),
    });

    res.json({ success: true, message: "Saved in Firestore!" });
  } catch (err) {
    console.error("🔥 Firestore error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = storePayment;
