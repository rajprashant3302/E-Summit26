const Razorpay=require("razorpay");
const dotenv=require("dotenv");
const crypto = require('crypto');
dotenv.config();


async function verifyRazorpayOrder (req, res) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.SECRET_KEY)
      .update(sign)
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false, message: "Invalid signature" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
};

module.exports=verifyRazorpayOrder;

