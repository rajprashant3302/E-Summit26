const Razorpay=require("razorpay");
const dotenv=require("dotenv");
dotenv.config();


// Razorpay credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,      
  key_secret: process.env.SECRET_KEY       
});

async function createRazorpayOrder(req, res) {
  try {
    const { amount } = req.body; 

    const order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      payment_capture: 1,  
    });

    return res.json({ success: true, order });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, error: err });
  }
};

module.exports= createRazorpayOrder;
