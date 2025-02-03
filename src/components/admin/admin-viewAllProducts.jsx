import  { useEffect, useState } from "react";
import axios from "axios";
import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
import { Navigate } from 'react-router-dom';

function AdminViewAllProducts() {
    const [viewRequests, setViewRequests] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of results per page
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


  if (!isLoggedIn) {
    return <Navigate to="/adminLogin" replace />;
  }
  

    // Fetch product data
    useEffect(() => {
        const fetchViewAllRequests = async () => {
            try {
                const response = await axios.get("http://localhost:5000/admin/view-all-products");
                console.log("Fetched Data:", response.data);

                setViewRequests(response.data);
            } catch (err) {
                console.error("Error fetching requests:", err.message);
                setError(err.response?.data?.message || "Failed to fetch requests.");
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        };
        fetchViewAllRequests();
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

    return (
        <div className="centered">
            <div className="login-container">
                <br />
                <center>
                    <h2 style={{ marginTop: "50px" }}>All Products Data</h2>
                    {loading ? (
                        <div>
                            <img src={loadingGif} alt="Loading..." style={{ width: "100px", height: "100px", borderRadius: "60px" }} />
                        </div>
                    ) : error ? (
                        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                    ) : (
                        <>
                            <table className="custom-table" style={{ width: "100%", border: "1px solid #ddd", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Name</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Manufacturer</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Name</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Email</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.length > 0 ? (
                                        currentItems.map((product, index) => (
                                            <tr key={index}>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }} >{product.productName}</td>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.manufacturer}</td>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.sellerName}</td>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.sellerEmail}</td>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{product.productPrice}</td>
                                                <td style={{ border: "1px solid #ddd", padding: "8px" }} >
                                                    <img
                                                        src={`http://localhost:5000/uploads/${product.productImage}`}
                                                        alt="Product"
                                                        style={{ width: "140px", height: "100px", borderRadius: "5px" }}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" style={{ textAlign: "center", padding: "8px" }}>No products found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            {viewRequests.length > 0 && (
                                <div style={{ marginTop: "20px" }}>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            style={{
                                                margin: "0 5px",
                                                padding: "2px 8px",
                                                height: "40px",
                                                width: "40px",
                                                backgroundColor: page === currentPage ? "#4CAF50" : "#ddd",
                                                color: page === currentPage ? "#fff" : "#000",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </center>
            </div>
        </div>
    );
}

export default AdminViewAllProducts;
