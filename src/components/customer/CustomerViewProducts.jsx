// import  { useEffect, useState } from "react";
// import axios from "axios";
// import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
// import { Navigate } from 'react-router-dom';

// function CustomerViewProducts() {
//     const [viewRequests, setViewRequests] = useState([]);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(true);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3; // Number of results per page
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />;
//   }

//     // Fetch product data
//     useEffect(() => {
//         const fetchViewAllRequests = async () => {
//             try {
//                 const response = await axios.get("https://xperienceauto-backend.onrender.com/customer/viewProducts");
//                 console.log("Fetched Data:", response.data);

//                 setViewRequests(response.data);
//             } catch (err) {
//                 console.error("Error fetching requests:", err.message);
//                 setError(err.response?.data?.message || "Failed to fetch requests.");
//             } finally {
//                 setTimeout(() => {
//                     setLoading(false);
//                 }, 1500);
//             }
//         };
//         fetchViewAllRequests();
//     }, []);

//     // Pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

//     return (
//         <div className="centered">
//             <div className="login-container">
//                 <br />
//                 <center>
//                     <h2 style={{ marginTop: "50px" }}>products</h2>
//                     {loading ? (
//                         <div>
//                             <img src={loadingGif} alt="Loading..." style={{ width: "100px", height: "100px", borderRadius: "60px" }} />
//                         </div>
//                     ) : error ? (
//                         <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
//                     ) : (
//                         <>
//                             <table className="custom-table" style={{ width: "100%", border: "1px solid #ddd", borderCollapse: "collapse" }}>
//                                 <thead>
//                                     <tr style={{ textAlign: "center" }}>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Name</th>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Manufacturer</th>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Name</th>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Email</th>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
//                                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentItems.length > 0 ? (
//                                         currentItems.map((product, index) => (
//                                             <tr key={index}>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }} >{product.productName}</td>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.manufacturer}</td>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.sellerName}</td>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.sellerEmail}</td>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{product.productPrice}</td>
//                                                 <td style={{ border: "1px solid #ddd", padding: "8px" }} >
//                                                     <img
//                                                         src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
//                                                         alt="Product"
//                                                         style={{ width: "140px", height: "100px", borderRadius: "5px" }}
//                                                     />
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan="6" style={{ textAlign: "center", padding: "8px" }}>No products found.</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>

//                             {/* Pagination */}
//                             {viewRequests.length > 0 && (
//                                 <div style={{ marginTop: "20px" }}>
//                                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                                         <button
//                                             key={page}
//                                             onClick={() => setCurrentPage(page)}
//                                             style={{
//                                                 margin: "0 5px",
//                                                 padding: "2px 8px",
//                                                 height: "40px",
//                                                 width: "40px",
//                                                 backgroundColor: page === currentPage ? "#4CAF50" : "#ddd",
//                                                 color: page === currentPage ? "#fff" : "#000",
//                                                 border: "none",
//                                                 borderRadius: "4px",
//                                                 cursor: "pointer",
//                                             }}
//                                         >
//                                             {page}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </>
//                     )}
//                 </center>
//             </div>
//         </div>
//     );
// }

// export default CustomerViewProducts;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
// import { Navigate } from 'react-router-dom';
// import '../customer/customercss/CustomerViewProducts.css';

// function CustomerViewProducts() {
//     const [viewRequests, setViewRequests] = useState([]);
//     const [error, setError] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 20; // Number of results per page
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//     if (!isLoggedIn) {
//         return <Navigate to="/" replace />;
//     }

//     // Fetch product data
//     useEffect(() => {
//         const fetchViewAllRequests = async () => {
//             try {
//                 const response = await axios.get("https://xperienceauto-backend.onrender.com/customer/viewProducts");
//                 console.log("Fetched Data:", response.data);
//                 setViewRequests(response.data);
//             } catch (err) {
//                 console.error("Error fetching requests:", err.message);
//                 setError(err.response?.data?.message || "Failed to fetch requests.");
//             } 
            
//         };
//         fetchViewAllRequests();
//     }, []);

//     // Pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

//     const addToCart = (name, price) => {
//         setCartItems(prevItems => [...prevItems, { name, price }]);
//         setTotalAmount(prevTotal => prevTotal + price);
//     };

//     const scrollToCart = () => {
//         const cartSection = document.getElementById('shopping-cart');
//         cartSection.scrollIntoView({ behavior: 'smooth' });
//     };

//     const pay = () => {
//         var options = {
//             key: "rzp_test_KTwnx4fuZ0Wy80",
//             amount: totalAmount * 100,
//             currency: "INR",
//             name: "XperienceAuto",
//             description: "Payment for Order",
//             image: "img/logo.jpeg",
//             handler: function (response) {
//                 var paymentId = response.razorpay_payment_id;
//                 window.location.href = "paymentsuccessful";
//             },
//             prefill: {
//                 name: "",
//                 email: "",
//                 contact: "+"
//             },
//             notes: {
//                 address: "Razorpay Corporate Office"
//             },
//             theme: {
//                 color: "#808000"
//             }
//         };
//         var rzp1 = new Razorpay(options);
//         rzp1.open();
//     };

//     return (
//         <div className="centered">
//             <div className="products-container">
//                 <h1>Welcome to the Automobile Store</h1>
//                 <h2 className="centered-title">Available Automobile Products</h2>

//                 {/* Search Bar */}
//                 <div className="search-container">
//                     <input
//                         type="search"
//                         id="searchInput"
//                         placeholder="Type Here"
//                         className="search-input"
//                     />
//                     <button className="search-btn"><i className="glyphicon glyphicon-search"></i></button>
//                 </div>

                
//                     <>
//                         <div className="product-list">
//                             {currentItems.map((product, index) => (
//                                 <div className="product" key={index}>
//                                     <h2>{product.productName}</h2>
//                                     <img
//                                         src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
//                                         alt="Product"
//                                         className="product-image"
//                                     />
//                                     <p>Manufacturer: {product.manufacturer}</p>
//                                     <p>Price: ₹{product.productPrice}</p>
//                                     <button className="btn-custom" onClick={() => addToCart(product.productName, product.productPrice)}>Add to Cart</button>
//                                     <button className="btn-custom" onClick={scrollToCart}>Go to Cart</button>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Pagination */}
//                         <div className="pagination">
//                             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                                 <button
//                                     key={page}
//                                     onClick={() => setCurrentPage(page)}
//                                     className={page === currentPage ? "active-page" : "page-btn"}
//                                 >
//                                     {page}
//                                 </button>
//                             ))}
//                         </div>
//                     </>
                
//             </div>

//             {/* Shopping Cart */}
//             <div id="shopping-cart" className="shopping-cart-container">
//                 <h2>Your Shopping Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p className="empty-cart-message">😔 Your cart is Empty !!</p>
//                 ) : (
//                     <>
//                         <table className="cart-items-table">
//                             <thead>
//                                 <tr>
//                                     <th>Item</th>
//                                     <th>Price</th>
//                                     <th>Quantity</th>
//                                     <th>Total</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cartItems.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.name}</td>
//                                         <td>₹{item.price}</td>
//                                         <td>1</td>
//                                         <td>₹{item.price}</td>
//                                         <td><button className="remove-btn">Remove</button></td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         <div className="cart-footer">
//                             <strong>Total: ₹{totalAmount}</strong>
//                             <button className="btn-custom" onClick={pay}>Pay Now</button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CustomerViewProducts;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
// import { Navigate } from 'react-router-dom';
// import '../customer/customercss/CustomerViewProducts.css';

// function CustomerViewProducts() {
//     const [viewRequests, setViewRequests] = useState([]);
//     const [error, setError] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchQuery, setSearchQuery] = useState("");
//     const itemsPerPage = 20; // Number of results per page
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//     if (!isLoggedIn) {
//         return <Navigate to="/" replace />;
//     }

//     // Fetch product data
//     useEffect(() => {
//         const fetchViewAllRequests = async () => {
//             try {
//                 const response = await axios.get("https://xperienceauto-backend.onrender.com/customer/viewProducts");
//                 console.log("Fetched Data:", response.data);
//                 setViewRequests(response.data);
//             } catch (err) {
//                 console.error("Error fetching requests:", err.message);
//                 setError(err.response?.data?.message || "Failed to fetch requests.");
//             }
//         };
//         fetchViewAllRequests();
//     }, []);

//     // Pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const filteredItems = viewRequests.filter(product =>
//         product.productName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//     const addToCart = (name, price) => {
//         setCartItems(prevItems => [...prevItems, { name, price }]);
//         setTotalAmount(prevTotal => prevTotal + price);
//     };

//     const scrollToCart = () => {
//         const cartSection = document.getElementById('shopping-cart');
//         cartSection.scrollIntoView({ behavior: 'smooth' });
//     };

//     const pay = () => {
//         var options = {
//             key: "rzp_test_KTwnx4fuZ0Wy80",
//             amount: totalAmount * 100,
//             currency: "INR",
//             name: "XperienceAuto",
//             description: "Payment for Order",
//             image: "img/logo.jpeg",
//             handler: function (response) {
//                 var paymentId = response.razorpay_payment_id;
//                 window.location.href = "paymentsuccessful";
//             },
//             prefill: {
//                 name: "",
//                 email: "",
//                 contact: "+"
//             },
//             notes: {
//                 address: "Razorpay Corporate Office"
//             },
//             theme: {
//                 color: "#808000"
//             }
//         };
//         var rzp1 = new Razorpay(options);
//         rzp1.open();
//     };

//     // Search handler
//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     return (
//         <div className="centered">
//             <div className="products-container">
//                 <h1>Welcome to the Automobile Store</h1>
//                 <h2 className="centered-title">Available Automobile Products</h2>

//                 {/* Search Bar */}
//                 <div className="search-container">
//                     <input
//                         type="search"
//                         id="searchInput"
//                         placeholder="Search Products"
//                         className="search-input"
//                         value={searchQuery}
//                         onChange={handleSearch}
//                     />
//                     <button className="search-btn"><i className="glyphicon glyphicon-search"></i></button>
//                 </div>

//                 <div className="product-list">
//                     {currentItems.map((product, index) => (
//                         <div className="product" key={index}>
//                             <h2>{product.productName}</h2>
//                             <img
//                                 src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
//                                 alt="Product"
//                                 className="product-image"
//                             />
//                             <p>Manufacturer: {product.manufacturer}</p>
//                             <p>Price: ₹{product.productPrice}</p>
//                             <button className="btn-custom" onClick={() => addToCart(product.productName, product.productPrice)}>Add to Cart</button>
//                             <button className="btn-custom" onClick={scrollToCart}>Go to Cart</button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Pagination */}
//                 <div className="pagination">
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                         <button
//                             key={page}
//                             onClick={() => setCurrentPage(page)}
//                             className={page === currentPage ? "active-page" : "page-btn"}
//                         >
//                             {page}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Shopping Cart */}
//             <div id="shopping-cart" className="shopping-cart-container">
//                 <h2>Your Shopping Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p className="empty-cart-message">😔 Your cart is Empty !!</p>
//                 ) : (
//                     <>
//                         <table className="cart-items-table">
//                             <thead>
//                                 <tr>
//                                     <th>Item</th>
//                                     <th>Price</th>
//                                     <th>Quantity</th>
//                                     <th>Total</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cartItems.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.name}</td>
//                                         <td>₹{item.price}</td>
//                                         <td>1</td>
//                                         <td>₹{item.price}</td>
//                                         <td><button className="remove-btn">Remove</button></td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         <div className="cart-footer">
//                             <strong>Total: ₹{totalAmount}</strong>
//                             <button className="btn-custom" onClick={pay}>Pay Now</button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CustomerViewProducts;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
// import { Navigate } from 'react-router-dom';
// import '../customer/customercss/CustomerViewProducts.css';

// function CustomerViewProducts() {
//     const [viewRequests, setViewRequests] = useState([]);
//     const [error, setError] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchQuery, setSearchQuery] = useState("");
//     const itemsPerPage = 20; // Number of results per page
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//     if (!isLoggedIn) {
//         return <Navigate to="/" replace />;
//     }

//     // Fetch product data
//     useEffect(() => {
//         const fetchViewAllRequests = async () => {
//             try {
//                 const response = await axios.get("https://xperienceauto-backend.onrender.com/customer/viewProducts");
//                 console.log("Fetched Data:", response.data);
//                 setViewRequests(response.data);
//             } catch (err) {
//                 console.error("Error fetching requests:", err.message);
//                 setError(err.response?.data?.message || "Failed to fetch requests.");
//             }
//         };
//         fetchViewAllRequests();
//     }, []);

//     // Pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const filteredItems = viewRequests.filter(product =>
//         product.productName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//     const addToCart = (name, price) => {
//         setCartItems(prevItems => {
//             // Check if the product already exists in the cart
//             const existingItem = prevItems.find(item => item.name === name);
//             if (existingItem) {
//                 // If product exists, increase the quantity and update total amount
//                 return prevItems.map(item =>
//                     item.name === name
//                         ? { ...item, quantity: item.quantity + 1, total: item.total + price }
//                         : item
//                 );
//             } else {
//                 // If product does not exist, add a new item with quantity 1
//                 return [...prevItems, { name, price, quantity: 1, total: price }];
//             }
//         });
    
//         // Update the total amount after adding to the cart
//         setTotalAmount(prevTotal => prevTotal + price);
//     };
    
//     const removeFromCart = (name, price) => {
//         setCartItems(prevItems => {
//             // Find the item to remove
//             const updatedItems = prevItems.filter(item => item.name !== name);
    
//             // Get the total price of the item to remove
//             const itemToRemove = prevItems.find(item => item.name === name);
    
//             if (itemToRemove) {
//                 // Safeguard: Ensure total amount doesn't go negative
//                 setTotalAmount(prevTotal => Math.max(prevTotal - itemToRemove.total, 0));
//             }
    
//             return updatedItems;
//         });
//     };
    

//     const scrollToCart = () => {
//         const cartSection = document.getElementById('shopping-cart');
//         cartSection.scrollIntoView({ behavior: 'smooth' });
//     };

//     const pay = () => {
//         var options = {
//             key: "rzp_test_KTwnx4fuZ0Wy80",
//             amount: totalAmount * 100,
//             currency: "INR",
//             name: "XperienceAuto",
//             description: "Payment for Order",
//             image: "img/logo.jpeg",
//             handler: function (response) {
//                 var paymentId = response.razorpay_payment_id;
//                 window.location.href = "paymentsuccessful";
//             },
//             prefill: {
//                 name: "",
//                 email: "",
//                 contact: "+"
//             },
//             notes: {
//                 address: "Razorpay Corporate Office"
//             },
//             theme: {
//                 color: "#808000"
//             }
//         };
//         var rzp1 = new Razorpay(options);
//         rzp1.open();
//     };

//     // Search handler
//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     return (
//         <div className="centered">
//             <div className="products-container">
//                 <h1>Welcome to the Automobile Store</h1>
//                 <h2 className="centered-title">Available Automobile Products</h2>

//                 {/* Search Bar */}
//                 <div className="search-container">
//                     <input
//                         type="search"
//                         id="searchInput"
//                         placeholder="Search Products"
//                         className="search-input"
//                         value={searchQuery}
//                         onChange={handleSearch}
//                     />
//                     <button className="search-btn"><i className="glyphicon glyphicon-search"></i></button>
//                 </div>

//                 <div className="product-list">
//                     {currentItems.map((product, index) => (
//                         <div className="product" key={index}>
//                             <h2>{product.productName}</h2>
//                             <img
//                                 src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
//                                 alt="Product"
//                                 className="product-image"
//                             />
//                             <p>Manufacturer: {product.manufacturer}</p>
//                             <p>Price: ₹{product.productPrice}</p>
//                             <button className="btn-custom" onClick={() => addToCart(product.productName, product.productPrice)}>Add to Cart</button>
//                             <button className="btn-custom" onClick={scrollToCart}>Go to Cart</button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Pagination */}
//                 <div className="pagination">
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                         <button
//                             key={page}
//                             onClick={() => setCurrentPage(page)}
//                             className={page === currentPage ? "active-page" : "page-btn"}
//                         >
//                             {page}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Shopping Cart */}
//             <div id="shopping-cart" className="shopping-cart-container">
//                 <h2>Your Shopping Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p className="empty-cart-message">😔 Your cart is Empty !!</p>
//                 ) : (
//                     <>
//                         <table className="cart-items-table">
//                             <thead>
//                                 <tr>
//                                     <th>Item</th>
//                                     <th>Price</th>
//                                     <th>Quantity</th>
//                                     <th>Total</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {cartItems.map((item, index) => (
//                                     <tr key={index}>
//                                         <td>{item.name}</td>
//                                         <td>₹{item.price}</td>
//                                         <td>{item.quantity}</td>
//                                         <td>₹{item.total}</td>
//                                         <td>
//                                             <button className="remove-btn" onClick={() => removeFromCart(item.name, item.price)}>Remove</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         <div className="cart-footer">
//                             <strong>Total: ₹{totalAmount}</strong>
//                             <button className="btn-custom" onClick={pay}>Pay Now</button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CustomerViewProducts;




import { useEffect, useState } from "react";
import axios from "axios";
import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
import { Navigate } from 'react-router-dom';
import '../customer/customercss/CustomerViewProducts.css';

function CustomerViewProducts() {
    const [viewRequests, setViewRequests] = useState([]);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 20; // Number of results per page
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Fetch product data
    useEffect(() => {
        const fetchViewAllRequests = async () => {
            try {
                const response = await axios.get("https://xperienceauto-backend.onrender.com/customer/viewProducts");
                console.log("Fetched Data:", response.data);
                setViewRequests(response.data);
            } catch (err) {
                console.error("Error fetching requests:", err.message);
                setError(err.response?.data?.message || "Failed to fetch requests.");
            }
        };
        fetchViewAllRequests();

        // Inactivity timer logic
        const timeoutDuration = 5 * 60 * 1000; // 5 minutes
        let timeout;

        const logoutUser = () => {
            localStorage.setItem("isLoggedIn", "false");
            setIsAuthenticated(false); // Log out the user
            window.location.href = '/'; // Redirect to login page
        };

        // Reset the inactivity timer on user activity (mouse move, key press, or click)
        const resetTimeout = () => {
            clearTimeout(timeout); // Clear existing timeout
            timeout = setTimeout(logoutUser, timeoutDuration); // Set a new timeout
        };

        // Track user activity events
        const events = ["mousemove", "keydown", "click"];
        events.forEach(event => {
            document.addEventListener(event, resetTimeout);
        });

        // Set the initial timeout
        timeout = setTimeout(logoutUser, timeoutDuration);

        // Clean up event listeners and timeout on component unmount
        return () => {
            events.forEach(event => {
                document.removeEventListener(event, resetTimeout);
            });
            clearTimeout(timeout); // Clear timeout on cleanup
        };

    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredItems = viewRequests.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const addToCart = (name, price) => {
        setCartItems(prevItems => {
            // Check if the product already exists in the cart
            const existingItem = prevItems.find(item => item.name === name);
            if (existingItem) {
                // If product exists, increase the quantity and update total amount
                return prevItems.map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity + 1, total: item.total + price }
                        : item
                );
            } else {
                // If product does not exist, add a new item with quantity 1
                return [...prevItems, { name, price, quantity: 1, total: price }];
            }
        });

        // Update the total amount after adding to the cart
        setTotalAmount(prevTotal => prevTotal + price);
    };

    const removeFromCart = (name, price) => {
        setCartItems(prevItems => {
            // Find the item to remove
            const updatedItems = prevItems.filter(item => item.name !== name);

            // Get the total price of the item to remove
            const itemToRemove = prevItems.find(item => item.name === name);

            if (itemToRemove) {
                // Safeguard: Ensure total amount doesn't go negative
                setTotalAmount(prevTotal => Math.max(prevTotal - itemToRemove.total, 0));
            }

            return updatedItems;
        });
    };

    const scrollToCart = () => {
        const cartSection = document.getElementById('shopping-cart');
        cartSection.scrollIntoView({ behavior: 'smooth' });
    };

    const pay = () => {
        var options = {
            key: "rzp_test_KTwnx4fuZ0Wy80",
            amount: totalAmount * 100,
            currency: "INR",
            name: "XperienceAuto",
            description: "Payment for Order",
            image: "img/logo.jpeg",
            handler: function (response) {
                var paymentId = response.razorpay_payment_id;
                window.location.href = "paymentsuccessful";
            },
            prefill: {
                name: "",
                email: "",
                contact: "+"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#808000"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };

    // Search handler
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="centered">
            <div className="products-container">
                <h1>Welcome to the Automobile Store</h1>
                <h2 className="centered-title">Available Automobile Products</h2>

                {/* Search Bar */}
                <div className="search-container">
                    <input
                        type="search"
                        id="searchInput"
                        placeholder="Search Products"
                        className="search-input"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <button className="search-btn"><i className="glyphicon glyphicon-search"></i></button>
                </div>

                <div className="product-list">
                    {currentItems.map((product, index) => (
                        <div className="product" key={index}>
                            <h2>{product.productName}</h2>
                            <img
                                src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
                                alt="Product"
                                className="product-image"
                            />
                            <p>Manufacturer: {product.manufacturer}</p>
                            <p>Price: ₹{product.productPrice}</p>
                            <button className="btn-custom" onClick={() => addToCart(product.productName, product.productPrice)}>Add to Cart</button>
                            <button className="btn-custom" onClick={scrollToCart}>Go to Cart</button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? "active-page" : "page-btn"}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            {/* Shopping Cart */}
            <div id="shopping-cart" className="shopping-cart-container">
                <h2>Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">😔 Your cart is Empty !!</p>
                ) : (
                    <>
                        <table className="cart-items-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>₹{item.total}</td>
                                        <td>
                                            <button className="remove-btn" onClick={() => removeFromCart(item.name, item.price)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="cart-footer">
                            <strong>Total: ₹{totalAmount}</strong>
                            <button className="btn-custom" onClick={pay}>Pay Now</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CustomerViewProducts;
