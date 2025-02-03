// import { useState, useEffect } from "react";
// import axios from "axios";

// const SellerViewProduct = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [showToast, setShowToast] = useState(false);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("sellerEmail");
//     if (storedEmail) {
//       setUserEmail(storedEmail);
//     }
//   }, []);

//   const fetchProducts = async () => {
//     if (!userEmail) {
//       setError("Seller email is not set.");
//       return;
//     }

//     try {
//       const response = await axios.get(`https://xperienceauto-backend.onrender.com/seller/view-products/${userEmail}`);
//       const data = response.data;

//       if (response.status === 200 && data.length > 0) {
//         setProducts(data);
//         setError("");
//       } else {
//         setProducts([]);
//         setError("No products found for this seller");
//       }
//     } catch (err) {
//       setError("");
//     }
//   };

//   useEffect(() => {
//     if (userEmail) {
//       fetchProducts();
//     }
//   }, [userEmail]);

//   const handleDeleteClick = (productId) => {
//     setSelectedProductId(productId);
//     setShowPopup(true);
//   };

//   const confirmDelete = async () => {
//     try {
//       await axios.delete(`https://xperienceauto-backend.onrender.com/seller/deleteProduct/${selectedProductId}`);
//       setProducts(products.filter((product) => product._id !== selectedProductId));
//       setShowPopup(false);
//       showToastMessage();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const showToastMessage = () => {
//     setShowToast(true);
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <div>
//       <h2>View Products Uploaded by you {userEmail}</h2>
//       {error && <p>{error}</p>}

//       <center>
//         {products.length > 0 ? (
//           <table
//             style={{
//               width: "100%",
//               border: "3px solid black",
//               marginTop: "20px",
//               textAlign: "center",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Product Name</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Manufacturer</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Price</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Image</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td style={{ border: "2px solid #ddd", padding: "10px", fontSize: "17px" }}>{product.productName}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px", fontSize: "17px" }}>{product.manufacturer}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px", fontSize: "17px" }}>₹{product.productPrice}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>
//                     <img
//                       style={{ width: "100px", height: "100px" }}
//                       src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
//                       alt={product.productName}
//                     />
//                   </td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px", fontSize: "17px" }}>
//                     <button
//                       style={{
//                         marginTop: "10px",
//                         height: "40px",
//                         width: "100px",
//                         color: "white",
//                         backgroundColor: "red",
//                         border: "none",
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//                         transition: "background-color 0.3s ease",
//                       }}
//                       onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
//                       onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
//                       onClick={() => handleDeleteClick(product._id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                     style={{
//                       marginTop: "10px",
//                       height: "40px",
//                       width: "100px",
//                       color: "white",
//                       backgroundColor: "red",
//                       border: "none",
//                       borderRadius: "8px",
//                       cursor: "pointer",
//                       fontSize: "16px",
//                       fontWeight: "bold",
//                       boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//                       transition: "background-color 0.3s ease",
//                     }}
//                     >
//                       update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No products to display.</p>
//         )}
//       </center>

//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             textAlign: "center",
//             width: "300px",
//           }}
//         >
//           <h3>Are you sure you want to delete?</h3>
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={confirmDelete}
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "5px",
//                 marginRight: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               Yes
//             </button>
//             <button
//               onClick={() => setShowPopup(false)}
//               style={{
//                 backgroundColor: "gray",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               No
//             </button>
//           </div>
//         </div>
//       )}

//       {showToast && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20px",
//             right: "20px",
//             backgroundColor: "#28a745",
//             color: "white",
//             padding: "15px",
//             borderRadius: "5px",
//             fontSize: "16px",
//             boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
//             zIndex: "1000",
//             animation: "fadeout 3s forwards",
//           }}
//         >
//           Product Deleted Successfully
//           <div
//             style={{
//               height: "4px",
//               backgroundColor: "white",
//               width: "100%",
//               marginTop: "5px",
//               animation: "progress 3s linear",
//             }}
//           ></div>
//         </div>
//       )}

//       <style>
//         {`
//           @keyframes fadeout {
//             0% { opacity: 1; }
//             100% { opacity: 0; }
//           }
//           @keyframes progress {
//             from { width: 100%; }
//             to { width: 0%; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default SellerViewProduct;























// import { useState, useEffect } from "react";
// import axios from "axios";

// const SellerViewProduct = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [showUpdateForm, setShowUpdateForm] = useState(false);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("sellerEmail");
//     if (storedEmail) {
//       setUserEmail(storedEmail);
//     }
//   }, []);

//   const fetchProducts = async () => {
//     if (!userEmail) {
//       setError("Seller email is not set.");
//       return;
//     }

//     try {
//       const response = await axios.get(`https://xperienceauto-backend.onrender.com/seller/view-products/${userEmail}`);
//       const data = response.data;

//       if (response.status === 200 && data.length > 0) {
//         setProducts(data);
//         setError("");
//       } else {
//         setProducts([]);
//         setError("No products found for this seller");
//       }
//     } catch (err) {
//       setError("Error fetching products.");
//     }
//   };

//   useEffect(() => {
//     if (userEmail) {
//       fetchProducts();
//     }
//   }, [userEmail]);

//   const handleDeleteClick = (productId) => {
//     setSelectedProduct(productId);
//     setShowPopup(true);
//   };

//   const confirmDelete = async () => {
//     try {
//       await axios.delete(`https://xperienceauto-backend.onrender.com/seller/deleteProduct/${selectedProduct}`);
//       setProducts(products.filter((product) => product._id !== selectedProduct));
//       setShowPopup(false);
//       showToastMessage();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const showToastMessage = () => {
//     setShowToast(true);
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   const handleUpdateClick = (product) => {
//     setSelectedProduct(product);
//     setShowUpdateForm(true);
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`https://xperienceauto-backend.onrender.com/updateProduct/${selectedProduct._id}`, selectedProduct);
//       fetchProducts();
//       setShowUpdateForm(false);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>View Products Uploaded by you {userEmail}</h2>
//       {error && <p>{error}</p>}

//       <center>
//         {products.length > 0 ? (
//           <table style={{ width: "100%", border: "3px solid black", marginTop: "20px", textAlign: "center" }}>
//             <thead>
//               <tr>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Product Name</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Manufacturer</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Price</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }} >Image</th>
//                 <th style={{ border: "2px solid #ddd", padding: "10px" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>{product.productName}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>{product.manufacturer}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>₹{product.productPrice}</td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>
//                     <img style={{ width: "100px", height: "100px" }} src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`} alt={product.productName} />
//                   </td>
//                   <td style={{ border: "2px solid #ddd", padding: "10px" }}>
//                     <button 
//                     style={{
//                       marginTop: "10px",
//                       height: "40px",
//                       width: "100px",
//                       color: "white",
//                       backgroundColor: "red",
//                       border: "none",
//                       borderRadius: "8px",
//                       cursor: "pointer",
//                       fontSize: "16px",
//                       fontWeight: "bold",
//                       boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//                       transition: "background-color 0.3s ease",
//                     }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
//                      onClick={() => handleDeleteClick(product._id)}>Delete</button>
//                     <button 
//                     style={{
//                       marginTop: "1px",
//                       height: "40px",
//                       width: "100px",
//                       color: "black",
//                       backgroundColor: "red",
//                       border: "none",
//                       borderRadius: "8px",
//                       cursor: "pointer",
//                       fontSize: "16px",
//                       fontWeight: "bold",
//                       boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//                       transition: "background-color 0.3s ease",
//                     }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = "silver")}
//                      onClick={() => handleUpdateClick(product)}>Update</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No products to display.</p>
//         )}
//       </center>

//       {showPopup && (
//         <div>
//           <h3>Are you sure you want to delete?</h3>
//           <button onClick={confirmDelete}>Yes</button>
//           <button onClick={() => setShowPopup(false)}>No</button>
//         </div>
//       )}

//       {showUpdateForm && (
//         <div style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "8px"  }}>
//           <h3>Update Product</h3>
//           <form onSubmit={handleUpdateSubmit}>
//             <input
//               type="text"
//               value={selectedProduct.productName}
//               onChange={(e) => setSelectedProduct({ ...selectedProduct, productName: e.target.value })}
//             />
//             <input
//               type="text"
//               value={selectedProduct.manufacturer}
//               onChange={(e) => setSelectedProduct({ ...selectedProduct, manufacturer: e.target.value })}
//             />
//             <input
//               type="number"
//               value={selectedProduct.productPrice}
//               onChange={(e) => setSelectedProduct({ ...selectedProduct, productPrice: e.target.value })}
//             />
//             <button type="submit">Update</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellerViewProduct;






import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellerViewProduct = () => {
  const [userEmail, setUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const storedEmail = localStorage.getItem("sellerEmail");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn || isLoggedIn !== "true") {
      navigate("/sellerpage"); // Redirect to login page if not logged in
  } else if (storedEmail) {
    setUserEmail(storedEmail);
  }
}, [navigate]);


  const fetchProducts = async () => {
    if (!userEmail) {
      setError("Seller email is not set.");
      return;
    }

    try {
      const response = await axios.get(`https://xperienceauto-backend.onrender.com/seller/view-products/${userEmail}`);
      const data = response.data;

      if (response.status === 200 && data.length > 0) {
        setProducts(data);
        setError("");
      } else {
        setProducts([]);
        setError("No products found for this seller");
      }
    } catch (err) {
      setError("Error fetching products.");
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchProducts();
    }
  }, [userEmail]);

  const handleDeleteClick = (productId) => {
    setSelectedProduct(productId);
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://xperienceauto-backend.onrender.com/seller/deleteProduct/${selectedProduct}`);
      setProducts(products.filter((product) => product._id !== selectedProduct));
      setShowPopup(false);
      showToastMessage();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://xperienceauto-backend.onrender.com/updateProduct/${selectedProduct._id}`, selectedProduct);
      fetchProducts();
      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>View Products Uploaded by you {userEmail}</h2>
      {error && <p>{error}</p>}

      <center>
        {products.length > 0 ? (
          <table style={{ width: "100%", border: "3px solid black", marginTop: "20px", textAlign: "center" }}>
            <thead>
              <tr>
                <th style={{ border: "2px solid #ddd", padding: "10px" }}>Product Name</th>
                <th style={{ border: "2px solid #ddd", padding: "10px" }}>Manufacturer</th>
                <th style={{ border: "2px solid #ddd", padding: "10px" }}>Price</th>
                <th style={{ border: "2px solid #ddd", padding: "10px" }}>Image</th>
                <th style={{ border: "2px solid #ddd", padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td style={{ border: "2px solid #ddd", padding: "10px" }}>{product.productName}</td>
                  <td style={{ border: "2px solid #ddd", padding: "10px" }}>{product.manufacturer}</td>
                  <td style={{ border: "2px solid #ddd", padding: "10px" }}>₹{product.productPrice}</td>
                  <td style={{ border: "2px solid #ddd", padding: "10px" }}>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={`https://xperienceauto-backend.onrender.com/uploads/${product.productImage}`}
                      alt={product.productName}
                    />
                  </td>
                  <td style={{ border: "2px solid #ddd", padding: "10px" }}>
                    <button
                      style={{
                        marginTop: "10px",
                        height: "40px",
                        width: "100px",
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
                      onClick={() => handleDeleteClick(product._id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{
                        marginTop: "1px",
                        height: "40px",
                        width: "100px",
                        color: "black",
                        backgroundColor: "red",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "silver")}
                      onClick={() => handleUpdateClick(product)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products to display.</p>
        )}
      </center>

      {showPopup && (
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" , marginTop:"50px" }}>
          <span 
      onClick={() => setShowPopup(false)} 
      style={{
        position: "absolute",
        top: "5px",
        right: "10px",
        cursor: "pointer",
        fontSize: "20px",
        fontWeight: "bold",
        color: "black"
      }}
    >
      ❌
    </span>
          <h3>Are you sure you want to delete?</h3>
          <button
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setShowPopup(false)}
          >
            No
          </button>
        </div>
      )}




{showUpdateForm && (
  <div style={{ 
    position: "absolute", 
    top: "10%", 
    left: "50%", 
    transform: "translateX(-50%)", 
    backgroundColor: "lightgray", 
    padding: "20px", 
    borderRadius: "8px", 
    width: "300px", 
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
    marginTop: "40px",
     
  }}>
    {/* Close Button */}
    <span 
      onClick={() => setShowUpdateForm(false)} 
      style={{
        position: "absolute",
        top: "5px",
        right: "10px",
        cursor: "pointer",
        fontSize: "20px",
        fontWeight: "bold",
        color: "black"
      }}
    >
      ❌
    </span>

    <h3>Update Product</h3>
    <form onSubmit={handleUpdateSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={selectedProduct.productName}
        onChange={(e) => setSelectedProduct({ ...selectedProduct, productName: e.target.value })}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px" }}
      />
      <input
        type="text"
        value={selectedProduct.manufacturer}
        onChange={(e) => setSelectedProduct({ ...selectedProduct, manufacturer: e.target.value })}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px" }}
      />
      <input
        type="number"
        value={selectedProduct.productPrice}
        onChange={(e) => setSelectedProduct({ ...selectedProduct, productPrice: e.target.value })}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px" }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Update
      </button>
    </form>
  </div>
)}


    </div>
  );
};

export default SellerViewProduct;