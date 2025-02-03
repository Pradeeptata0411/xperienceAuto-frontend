// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import loadingGif from "../../assets/IMAGES/gifs/loading.gif";

// function AdminViewAllSellersData() {
//   const [viewRequests, setViewRequests] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3; // Number of results per page

//   // Fetch customer data
//   useEffect(() => {
//     const fetchViewAllRequests = async () => {
//       try {
//         const response = await axios.get("https://xperienceauto-backend.onrender.com/admin/admin-viewAll-sellers");
//         // console.log("Fetched Data:", response.data);
//         setViewRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err.message);
//         setError(err.response?.data?.message || "Failed to fetch requests.");
//       } finally {
//         setTimeout(() => {
//           setLoading(false);
//         }, 1500);
//       }
//     };
//     fetchViewAllRequests();
//   }, []);

//   // Calculate the current items to display
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page handler
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   const handleSellerStatusAction = async (request, newStatus) => {
//     try {

//       await axios.put("https://xperienceauto-backend.onrender.com/admin/accept-seller_status_action", {
//         sellerName: request.sellerName,
//         sellerEmail: request.sellerEmail,
//         sellerGender: request.sellerGender,
//         sellerContact_no: request. sellerContact_no,
//         sellerStatus: newStatus,
//       });

//       // Refresh requests after status update
//       const response = await axios.get("https://xperienceauto-backend.onrender.com/admin/view-all-requests");
//       setViewRequests(
//         response.data.sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate))
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert(err.response?.data?.message || "Failed to update status.");
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 1500);
//     }
//   };


//   // Total number of pages
//   const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

//   return (
//     <div className="centered">
//       <div className="login-container">
//         <br />
//         <center>
//           <h2 style={{ marginTop: "50px" }}>All Sellers Data</h2>
//           {loading ? (
//             <div>
//               <img
//                 src={loadingGif}
//                 alt="Loading..."
//                 style={{ width: "100px", height: "100px", borderRadius: "60px" }}
//               />
//             </div>
//           ) : error ? (
//             <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
//           ) : (
//             <>
//               <table
//                 className="custom-table"
//                 style={{
//                   width: "100%",
//                   border: "1px solid #ddd",
//                   borderCollapse: "collapse",
//                 }}
//               >
//                 <thead>
//                   <tr>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Name</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Email</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Password</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Gender</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Contact</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Status</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Admin Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentItems && currentItems.length > 0 ? (
//                     currentItems.map((seller, index) => (
//                       <tr key={index}>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>{seller.sellerName}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>{seller.sellerEmail}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>{seller.sellerPassword}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>{seller.sellerGender}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>{seller.sellerContact_no}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}> {seller.sellerStatus ? "Accepted" : "Declined"}</td>
//                         <td>
//                           <button
//                           onClick={() => handleSellerStatusAction(seller,true)}
//                             style={{
                              
//                               marginTop: "9px",
//                               textAlign: "center",
//                               width:"110px",
//                               gap:"10px",
//                               height: "40px",
//                               padding: "0 20px",
//                               border: "none",
//                               borderRadius: "5px",
//                               fontSize: "14px",
//                               fontWeight: "bold",
//                               cursor: "pointer",
//                               transition: "background-color 0.3s ease, transform 0.2s ease",
//                               backgroundColor: "#4CAF50",
//                               color: "white",
//                             }}
//                           >
//                             Accept
//                           </button><br/>
//                           <button
//                           onClick={() => handleSellerStatusAction(seller,false)}
//                             style={{
//                               marginTop: "9px",
//                               textAlign: "center",
//                               height: "40px",
//                               width:"110px",
//                               padding: "0 20px",
//                               border: "none",
//                               borderRadius: "5px",
//                               fontSize: "14px",
//                               fontWeight: "bold",
//                               cursor: "pointer",
//                               transition: "background-color 0.3s ease, transform 0.2s ease",
//                               backgroundColor: "#f44336",
//                               color: "white",
//                             }}
//                           >
//                             Decline
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="7"
//                         style={{
//                           textAlign: "center",
//                           padding: "8px",
//                           border: "1px solid #ddd",
//                         }}
//                       >
//                         No Seller found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>

//               {/* Pagination */}
//               {viewRequests.length > 0 && (
//                 <div style={{ marginTop: "20px" }}>
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => handlePageChange(page)}
//                       style={{
//                         margin: "0 5px",
//                         padding: "2px 8px",
//                         height: "40px",
//                         width: "40px",
//                         backgroundColor: page === currentPage ? "#4CAF50" : "#ddd",
//                         color: page === currentPage ? "#fff" : "#000",
//                         border: "none",
//                         borderRadius: "4px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       {page}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}
//         </center>
//       </div>
//     </div>
//   );
// }

// export default AdminViewAllSellersData;

import React, { useEffect, useState } from "react";
import axios from "axios";
import loadingGif from "../../assets/IMAGES/gifs/loading.gif";
import { Navigate } from 'react-router-dom';

function AdminViewAllSellersData() {
  const [viewRequests, setViewRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of results per page
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


  if (!isLoggedIn) {
    return <Navigate to="/adminLogin" replace />;
  }
  


  // Fetch customer data
  useEffect(() => {
    const fetchViewAllRequests = async () => {
      try {
        const response = await axios.get("https://xperienceauto-backend.onrender.com/admin/admin-viewAll-sellers");
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

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle seller status update
  const handleSellerStatusAction = async (request, newStatus) => {
    try {
      // Update seller status
      await axios.put("https://xperienceauto-backend.onrender.com/admin/accept-seller_status_action", {
        sellerName: request.sellerName,
        sellerEmail: request.sellerEmail,
        sellerGender: request.sellerGender,
        sellerContact_no: request.sellerContact_no,
        sellerStatus: newStatus,
      });

      // Update the local state without refetching
      setViewRequests(prevRequests =>
        prevRequests.map(seller =>
          seller.sellerEmail === request.sellerEmail
            ? { ...seller, sellerStatus: newStatus }
            : seller
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
      alert(err.response?.data?.message || "Failed to update status.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  // Total number of pages
  const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

  return (
    <div className="centered">
      <div className="login-container">
        <br />
        <center>
          <h2 style={{ marginTop: "50px" }}>All Sellers Data</h2>
          {loading ? (
            <div>
              <img
                src={loadingGif}
                alt="Loading..."
                style={{ width: "100px", height: "100px", borderRadius: "60px" }}
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
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Name</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Email</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Password</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Gender</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Contact</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Seller Status</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Admin Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems && currentItems.length > 0 ? (
                    currentItems.map((seller, index) => (
                      <tr key={index}>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerName}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerEmail}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerPassword}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerGender}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerContact_no}
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                          {seller.sellerStatus ? "Accepted" : "Declined"}
                        </td>
                        <td>
                          <button
                            onClick={() => handleSellerStatusAction(seller, true)}
                            style={{
                              marginTop: "9px",
                              textAlign: "center",
                              width: "110px",
                              gap: "10px",
                              height: "40px",
                              padding: "0 20px",
                              border: "none",
                              borderRadius: "5px",
                              fontSize: "14px",
                              fontWeight: "bold",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease, transform 0.2s ease",
                              backgroundColor: "#4CAF50",
                              color: "white",
                            }}
                          >
                            Accept
                          </button><br />
                          <button
                            onClick={() => handleSellerStatusAction(seller, false)}
                            style={{
                              marginTop: "9px",
                              textAlign: "center",
                              height: "40px",
                              width: "110px",
                              padding: "0 20px",
                              border: "none",
                              borderRadius: "5px",
                              fontSize: "14px",
                              fontWeight: "bold",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease, transform 0.2s ease",
                              backgroundColor: "#f44336",
                              color: "white",
                            }}
                          >
                            Decline
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        style={{
                          textAlign: "center",
                          padding: "8px",
                          border: "1px solid #ddd",
                        }}
                      >
                        No Seller found.
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

export default AdminViewAllSellersData;
