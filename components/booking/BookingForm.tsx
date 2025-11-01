import React from "react";

const BookingForm: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>

      <form>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="border p-2 w-full mt-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Payment Information</h2>
        <div className="mt-4">
          <label className="block text-sm font-medium">Card Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="1234 5678 9012 3456" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Expiration Date</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="MM/YY" />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" placeholder="123" />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label className="block text-sm font-medium">Street Address</label>
          <input type="text" className="border p-2 w-full mt-2 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input type="text" className="border p-2 w-full mt-2 rounded" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
