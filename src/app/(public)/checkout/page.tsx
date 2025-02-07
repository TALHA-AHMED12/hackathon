'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
// import { PaymentElement } from "@stripe/react-stripe-js";
// import { useStripe, useElements } from "@stripe/react-stripe-js";
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';
// type PaymentMethod = 'Cash on Delivery' | 'Online Payment';

interface OrderData {
  orderId: string;
  items: any[];
  shippingInfo: ShippingInfo;
  totalAmount: number;
  paymentMethod: "Cash On Delivery";
  orderDate: string;
  status: string;
  paymentStatus?: string;
}

interface ShippingInfo {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

export default function Checkout() {
  // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  // const [errors, setErrors] = useState("")
  //   const [clientSecret, setClientSecret] = useState("")
    // const stripe = useStripe()
    // const elements = useElements()
  const { cart, getTotalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash on Delivery');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: ''
  });
  const [orderConfirmation, setOrderConfirmation] = useState<OrderData | null>(null);

  const handleContinueShopping = () => {
    clearCart();
    window.location.href = '/product';
  };

  const generateOrderId = () => {
    return 'ORD' + Date.now().toString().slice(-8) + Math.random().toString(36).slice(-4).toUpperCase();
  };
    
    // const handleStripePayment = async () => {
    //   useEffect(() => {
    //     const getPaymentIntent = async () => {
    //       const response = await fetch("/api/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ amount: getTotalPrice() })
    //       });
    //       const json = await response.json();
    //       setClientSecret(json.client_secret);
    //     };
    //     getPaymentIntent();
    //   }, [getTotalPrice()]);

    //   const handleFormSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     if (!stripe || !elements) {
    //       setErrors("invalid operation");
    //       return;
    //     }

    //     const { error: submitError } = await elements.submit();
    //     if (submitError) {
    //       setErrors(submitError.message || "An unknown error occurred");
    //       return;
    //     }

    //     const { error } = await stripe.confirmPayment({
    //       clientSecret,
    //       elements,
    //       confirmParams: {
    //         return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`
    //       }
    //     });

    //     if (error) {
    //       setErrors(error.message || "An unknown error occurred");
    //       return;
    //     }
    //   };

    //   return (
    //     <form onSubmit={handleFormSubmit}>
    //       {clientSecret && <PaymentElement />}
    //       <button className="mt-4 bg-blue-500 rounded-2xl px-6 py-2 text-white font-semibold">Pay ${getTotalPrice()}</button>
    //       {errors && <p>{errors}</p>}
    //     </form>
    //   );
    // };

  const createOrder = async () => {
    const orderData: OrderData = {
      orderId: generateOrderId(),
      items: cart.map(item => ({
        id: item._id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.price * item.quantity
      })),
      shippingInfo,
      totalAmount: getTotalPrice(),
      paymentMethod: "Cash On Delivery",
      orderDate: new Date().toISOString(),
      status: 'Pending',
      paymentStatus: selectedPaymentMethod === 'Online Payment' ? 'Payment Successfully Received' : undefined
    };

    console.log('Order created:', orderData);
    setOrderConfirmation(orderData);
    clearCart();
    return orderData;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPaymentMethod === 'Online Payment') {
      await handleStripePayment();
    } else {
      await createOrder();
      setCurrentStep('confirmation');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'shipping':
        return (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={shippingInfo.fullName}
                onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded"
                value={shippingInfo.email}
                onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded"
                value={shippingInfo.phone}
                onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={shippingInfo.postalCode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-[#028a96]"
            >
              Continue to Payment
            </button>  
          </form>
        );

      case 'payment':
        return (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  checked={selectedPaymentMethod === 'Cash on Delivery'}
                  onChange={() => setSelectedPaymentMethod('Cash on Delivery')}
                  className="h-4 w-4 text-[#029FAE]"
                />
                <label htmlFor="cod" className="font-medium">
                  Cash on Delivery
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-500 ml-7">
                Pay with cash upon delivery. Please ensure someone is available to receive the package and make the payment.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                {/* <input
                  type="radio"
                  id="online"
                  name="payment"
                  checked={selectedPaymentMethod === 'Online Payment'}
                  onChange={() => setSelectedPaymentMethod('Online Payment')}
                  className="h-4 w-4 text-[#029FAE]"
                /> */}
                <label htmlFor="online" className="font-medium">
                  Online Payment
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-500 ml-7">
                Coming soon! This feature is currently under development.
              </p>
            </div> 
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-[#028a96]"
              >
                {selectedPaymentMethod === 'Online Payment' ? 'Proceed to Payment' : 'Place Order'}
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep('shipping')}
                className="w-full mt-2 text-[#029FAE] underline"
              >
                Back to Shipping
              </button>
            </div>
          </form>
        );

      case 'confirmation':
        return (
          <div className="text-center space-y-4">
            <div className="text-green-500 text-5xl">✓</div>
            <h2 className="text-2xl font-bold">Order Confirmed!</h2>
            <p>Thank you for your purchase.</p>
            {orderConfirmation && (
              <div className="text-left bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium">Order ID: {orderConfirmation.orderId}</p>
                <p>Order confirmation has been sent to: {orderConfirmation.shippingInfo.email}</p>
                <p className="mt-2">Delivery Address:</p>
                <p className="text-sm text-gray-600">
                  {orderConfirmation.shippingInfo.fullName}<br />
                  {orderConfirmation.shippingInfo.address}<br />
                  {orderConfirmation.shippingInfo.city}, {orderConfirmation.shippingInfo.postalCode}
                </p>
                 <p className="mt-2">Payment Method:{"Cash On Delivery"}</p> 
                 {/* <p className="font-medium mt-2">
                  {orderConfirmation.paymentMethod === 'Online Payment' 
                    ? 'Payment Successfully Received'
                    : `Total Amount: $${orderConfirmation.totalAmount.toFixed(2)}`}
                </p>  */}
              </div>
            )}
            <button
              onClick={handleContinueShopping}
              className="mt-6 bg-[#029FAE] text-white py-3 px-6 rounded-lg hover:bg-[#028a96] transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <div className="flex items-center mt-4">
                <div className={`h-2 flex-1 ${currentStep === 'shipping' ? 'bg-[#029FAE]' : 'bg-gray-200'}`} />
                <div className={`h-2 flex-1 ${currentStep === 'payment' ? 'bg-[#029FAE]' : 'bg-gray-200'}`} />
                <div className={`h-2 flex-1 ${currentStep === 'confirmation' ? 'bg-[#029FAE]' : 'bg-gray-200'}`} />
              </div>
            </div>
            {renderStep()}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="flex gap-4">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



           

function handleStripePayment() {
  throw new Error('Function not implemented.');
}
 