import axios from "axios";
import React from "react";
import { useAuth } from "../../context/AuthUserContext";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Payment = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const loadRazorpay = (url) => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src='${url}']`)) return resolve(true);

      const script = document.createElement("script");
      script.src = url;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const loaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!loaded) {
      toast.error("Failed to load Razorpay SDK.");
      return navigate("/event/error-message", { replace: true });
    }

    try {
      // create-order
      const { data } = await axios.post(`${BACKEND_URL}/api/create-order`, {
        amount: 10000,
      });

      const order = data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Event Registration",
        order_id: order.id,

        handler: async (paymentResponse) => {
          try {
            //verify -order
            const verifyRes = await axios.post(`${BACKEND_URL}/api/verify-order`, {
              ...paymentResponse,
              amount: 100,
            });

            if (!verifyRes.data.success) {
               toast.error("Payment verification failed");
               return navigate("/error-message", { replace: true });
            }

            // store-paymnet
            await axios.post(`${BACKEND_URL}/api/store-payment`, {
              userId: authUser?.uid,
              email: authUser?.email,
              amount: 100,
              orderId: paymentResponse.razorpay_order_id,
              paymentId: paymentResponse.razorpay_payment_id,
              signature: paymentResponse.razorpay_signature,
            });

            navigate('/event/success-message', { replace: true })
            toast.success("Payment Successful !");
          } catch (err) {
            console.error(err);
            toast.error("Server error storing payment");
            navigate("/error-message", { replace: true });
          }
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      toast.error("Order creation failed");
      navigate("/error-message", { replace: true });
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="py-2.5 px-4 bg-[#222] text-white rounded-md"
    >
      Pay Rs100
    </button>
  );
};

export default Payment;
