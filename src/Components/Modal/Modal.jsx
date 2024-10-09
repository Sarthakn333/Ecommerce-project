import{ useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


// Set the app element for accessibility
Modal.setAppElement('#root'); // Replace '#yourAppElement' with your app's root element ID
 
// eslint-disable-next-line react/prop-types
export default function Modals({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    const [isOpen, setIsOpen] = useState(false);
    

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset'; // Cleanup on unmount
        };
    }, [isOpen]);

    
  const cartItems = useSelector((state) => state.cart)

  const handleBuyNowClick = () => {
    if (cartItems.length === 0) {
        toast.info("Cart is empty!"); // Show toast notification if cart is empty
    } else {
        openModal(); // Open modal if cart is not empty
    }
};
    return (
        <>
            <div className="text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={handleBuyNowClick}
                    className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
              
                >
                    Buy Now
                </button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="w-full max-w-md mx-auto p-4 mt-20 bg-gray-50 rounded-lg shadow-xl"
                overlayClassName="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center"
            >
                <h2 className="text-lg font-bold mb-4">Enter Your Details</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            name="address"
                            id="address"
                            className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                        <input
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            type="text"
                            name="pincode"
                            id="pincode"
                            className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                        <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="text"
                            name="mobileNumber"
                            id="mobileNumber"
                            className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                            required
                        />
                    </div>
                </form>
                <button
                    onClick={() => {
                       
            buyNow();
            closeModal();
    
                    }}
                    type="button"
                    className="focus:outline-none w-full text-white bg-green-600 hover:bg-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                    disabled={cartItems.length === 0}
                >
                    Order Now
                </button>
            </Modal>
        </>
    );
}
