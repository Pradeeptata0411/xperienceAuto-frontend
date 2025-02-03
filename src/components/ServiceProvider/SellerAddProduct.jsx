// import  { useState, useEffect } from "react";
// import axios from "axios";
// import "./serviceCss/sellerAddProduct.css";

// function SellerAddProductPage() {
//     const [message, setMessage] = useState("");
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");

//     useEffect(() => {
//         const storedSellerName = localStorage.getItem("userName");
//         const storedSellerEmail = localStorage.getItem("sellerEmail");

//         console.log("Retrieved from localStorage:", {
//             storedSellerName,
//             storedSellerEmail,
//         });

//         if (storedSellerName && storedSellerEmail) {
//             setSellerName(storedSellerName);
//             setSellerEmail(storedSellerEmail);
//             setProductData((prevData) => ({
//                 ...prevData,
//                 sellerName: storedSellerName,
//                 sellerEmail: storedSellerEmail,
//             }));
//         }
//     }, []);

//     const [productData, setProductData] = useState({
//         productName: "",
//         manufacturer: "",
//         sellerName: "",
//         sellerEmail: "",
//         price: "",
//         productImage: null,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         if (type === "file") {
//             setProductData({ ...productData, [name]: files[0] });
//         } else {
//             setProductData({ ...productData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("product_name", productData.productName);
//         formData.append("product_description", productData.manufacturer);
//         formData.append("seller_name", sellerName); // Use localStorage data
//         formData.append("seller_Email", sellerEmail); // Use localStorage data
//         formData.append("product_price", productData.price);
//         formData.append("product_image", productData.productImage);

//         try {
//             const response = await axios.post("https://xperienceauto-backend.onrender.com/seller/addProduct", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             if (response.status === 201) {
//                 setMessage("Product Added Successfully");
//                 setProductData({
//                     productName: "",
//                     manufacturer: "",
//                     sellerName: sellerName,
//                     sellerEmail: sellerEmail,
//                     price: "",
//                     productImage: null,
//                 });
//             } else {
//                 setMessage(response.data.message || "Product Addition Failed");
//             }
//         } catch (error) {
//             console.error("Error", error);
//             setMessage(error.response ? error.response.data.message : "An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div className="add-product-container1">
//             <div className="add-product-form">
//                 <form onSubmit={handleSubmit}>
//                     <h2 className="text-center">Add Product</h2>
//                     <span className="blink">
//                         <h5 style={{ color: "green", textAlign: "center" }}>{message}</h5>
//                     </span>
//                     <div className="form-group">
//                         <label htmlFor="productName">Product Name:</label>
//                         <input
//                             type="text"
//                             id="productName"
//                             name="productName"
//                             value={productData.productName}
//                             onChange={handleChange}
//                             className="form-control"
//                             placeholder="Enter Product Name"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="manufacturer">Manufacturer:</label>
//                         <input
//                             type="text"
//                             id="manufacturer"
//                             name="manufacturer"
//                             value={productData.manufacturer}
//                             onChange={handleChange}
//                             className="form-control"
//                             placeholder="Enter Manufacturer Name"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="sellerName">Seller Name:</label>
//                         <input
//                             type="text"
//                             id="sellerName"
//                             name="sellerName"
//                             value={sellerName}
//                             className="form-control"
//                             readOnly
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="sellerEmail">Seller Email:</label>
//                         <input
//                             type="text"
//                             id="sellerEmail"
//                             name="sellerEmail"
//                             value={sellerEmail}
//                             className="form-control"
//                             readOnly
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="price">Price:</label>
//                         <input
//                             type="number"
//                             id="price"
//                             name="price"
//                             value={productData.price}
//                             onChange={handleChange}
//                             className="form-control"
//                             placeholder="Enter Price"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="productImage">Upload Image:</label>
//                         <input
//                             type="file"
//                             id="productImage"
//                             name="productImage"
//                             onChange={handleChange}
//                             className="form-control-file"
//                             accept="image/*"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-primary">
//                             Add Product
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SellerAddProductPage;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./serviceCss/sellerAddProduct.css";

function SellerAddProductPage() {
    const [message, setMessage] = useState("");
    const [sellerName, setSellerName] = useState("");
    const [sellerEmail, setSellerEmail] = useState("");
    const navigate = useNavigate(); // Hook for redirection

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const storedSellerName = localStorage.getItem("userName");
        const storedSellerEmail = localStorage.getItem("sellerEmail");

        if (!isLoggedIn || isLoggedIn !== "true") {
            navigate("/sellerpage"); // Redirect to login page if not logged in
        } else if (storedSellerName && storedSellerEmail) {
            setSellerName(storedSellerName);
            setSellerEmail(storedSellerEmail);
            setProductData((prevData) => ({
                ...prevData,
                sellerName: storedSellerName,
                sellerEmail: storedSellerEmail,
            }));
        }
    }, [navigate]);

    const [productData, setProductData] = useState({
        productName: "",
        manufacturer: "",
        sellerName: "",
        sellerEmail: "",
        price: "",
        productImage: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setProductData({ ...productData, [name]: files[0] });
        } else {
            setProductData({ ...productData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_name", productData.productName);
        formData.append("product_description", productData.manufacturer);
        formData.append("seller_name", sellerName);
        formData.append("seller_Email", sellerEmail);
        formData.append("product_price", productData.price);
        formData.append("product_image", productData.productImage);

        try {
            const response = await axios.post("https://xperienceauto-backend.onrender.com/seller/addProduct", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                setMessage("Product Added Successfully");
                setProductData({
                    productName: "",
                    manufacturer: "",
                    sellerName: sellerName,
                    sellerEmail: sellerEmail,
                    price: "",
                    productImage: null,
                });
            } else {
                setMessage(response.data.message || "Product Addition Failed");
            }
        } catch (error) {
            console.error("Error", error);
            setMessage(error.response ? error.response.data.message : "An error occurred. Please try again.");
        }
    };

    return (
        <div className="add-product-container1">
            <div className="add-product-form">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Add Product</h2>
                    <span className="blink">
                        <h5 style={{ color: "green", textAlign: "center" }}>{message}</h5>
                    </span>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={productData.productName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Product Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manufacturer">Manufacturer:</label>
                        <input
                            type="text"
                            id="manufacturer"
                            name="manufacturer"
                            value={productData.manufacturer}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Manufacturer Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sellerName">Seller Name:</label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={sellerName}
                            className="form-control"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sellerEmail">Seller Email:</label>
                        <input
                            type="text"
                            id="sellerEmail"
                            name="sellerEmail"
                            value={sellerEmail}
                            className="form-control"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Price"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Upload Image:</label>
                        <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            onChange={handleChange}
                            className="form-control-file"
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SellerAddProductPage;
