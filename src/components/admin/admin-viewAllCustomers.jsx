import  { useEffect, useState } from "react";
import axios from "axios";
import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
import { Navigate } from 'react-router-dom';


function AdminViewAllCustomersData() {
  const [viewRequests, setViewRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of results per page

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


  if (!isLoggedIn) {
    return <Navigate to="/adminLogin" replace />;
  }
  

  // Fetch customer data
  useEffect(() => {
    const fetchViewAllRequests = async () => {
      try {
        const response = await axios.get("https://xperienceauto-backend.onrender.com/admin/admin-viewAll-customers");
        console.log("Fetched Data:", response.data);

        // Optionally sort by serviceDate (if applicable)
        const sortedRequests = response.data.sort(
          (a, b) => new Date(b.serviceDate || "1970-01-01") - new Date(a.serviceDate || "1970-01-01")
        );

        setViewRequests(sortedRequests);
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

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Total number of pages
  const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

  return (
    <div className="centered">
      <div className="login-container">
        <br />
        <center>
          <h2 style={{ marginTop: "50px" }}>All Customers Data</h2>
          {loading ? (
            <div>
              <img
                src={loadingGif} // Path to your loading GIF in the public folder
                alt="Loading..."
                style={{ width: "100px", height: "100px" ,  borderRadius:"60px" }} // Adjust size as needed
              />
            </div>
          ) : error ? (
            <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
          ) : (
            <>
              <table
                className="custom-table"
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Password</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Gender</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((customer, index) => (
                      <tr key={index}>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {customer.name}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {customer.email}
                        </td>
                        {/* <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {customer.password}
                        </td> */}
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                            {"*".repeat(customer.password.length)}
                          </td>

                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {customer.gender}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {customer.contact_no}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        style={{
                          textAlign: "center",
                          padding: "8px",
                          border: "1px solid #ddd",
                        }}
                      >
                        No Customers found.
                      </td>
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
                      onClick={() => handlePageChange(page)}
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

export default AdminViewAllCustomersData;
