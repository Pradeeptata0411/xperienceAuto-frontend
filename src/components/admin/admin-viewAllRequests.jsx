// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminViewAllRequests() {
//   const [viewRequests, setViewRequests] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchViewAllRequests = async () => {
//         try {
//           const response = await axios.get("http://localhost:5000/admin/view-all-requests");
//           console.log("Response data:", response.data); // Log response data
//           setViewRequests(response.data);
//         } catch (err) {
//           console.error("Error fetching requests:", err);
//           setError(err.response?.data?.message || "Failed to fetch requests.");
//         }
//       };
//     fetchViewAllRequests();
//   }, []);

//   return (
//     <div className="centered">
//       <div className="login-container">
//         <br />
//         <center>
//           <h2>All Service Requests</h2>
//           {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
//           <table
//             className="custom-table"
//             style={{
//               width: "100%",
//               border: "1px solid #ddd",
//               borderCollapse: "collapse",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Member ID</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Name</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Type</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Time</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>View Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}> Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {viewRequests.length > 0 ? (
//                 viewRequests.map((request, index) => (
//                   <tr key={index}>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" ,  fontSize: "14px"}}>{request.serviceOwnerMail}</td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" ,  fontSize: "14px" }}>{request.serviceName}</td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" ,  fontSize: "14px"}}>{request.serviceType}</td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" , fontSize: "14px"}}>
//                       {new Date(request.serviceDate).toLocaleDateString()}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px"  ,  fontSize: "14px"}}>{request.serviceTime}</td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px",  fontSize: "14px" }}>{request.descriptionOfService}</td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" ,  fontSize: "14px"}}>
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td
//                       style={{
//                         border: "1px solid #ddd",
//                         padding: "8px",
//                         backgroundColor: request.serviceStatus ? "#58F487" : "#FE5F61",
//                         fontSize: "14px",
//                         fontWeight: "bold",
//                         color: "#fff",
//                       }}
//                     >
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                         <button style={{ marginTop:"10px", padding: "2px" , backgroundColor:"lightgreen" , border: "none",  borderRadius: "4px", cursor: "pointer"  }}>Accept </button >  <button style={{backgroundColor:"lightcoral",marginTop:"10px", padding: "2px" , border: "none", borderRadius: "4px", cursor: "pointer" }}>Decline </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="8"
//                     style={{
//                       textAlign: "center",
//                       padding: "8px",
//                       border: "1px solid #ddd",
//                     }}
//                   >
//                     No service requests found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </center>
//       </div>
//     </div>
//   );
// }

// export default AdminViewAllRequests;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminViewAllRequests() {
//   const [viewRequests, setViewRequests] = useState([]);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Number of results per page

//   useEffect(() => {
//     const fetchViewAllRequests = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/admin/view-all-requests");
//         console.log("Response data:", response.data); // Log response data
//         setViewRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError(err.response?.data?.message || "Failed to fetch requests.");
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

//   // Total number of pages
//   const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

//   return (
//     <div className="centered">
//       <div className="login-container">
//         <br />
//         <center>
//           <h2 style={{marginTop:"50px"}}>All Service Requests</h2>
//           {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
//           <table
//             className="custom-table"
//             style={{
//               width: "100%",
//               border: "1px solid #ddd",
//               borderCollapse: "collapse",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Member ID</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Name</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Type</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Time</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>View Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.length > 0 ? (
//                 currentItems.map((request, index) => (
//                   <tr key={index}>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceOwnerMail}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceName}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceType}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {new Date(request.serviceDate).toLocaleDateString()}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceTime}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.descriptionOfService}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td
//                       style={{
//                         border: "1px solid #ddd",
//                         padding: "8px",
//                         backgroundColor: request.serviceStatus ? "#58F487" : "#FE5F61",
//                         fontSize: "14px",
//                         fontWeight: "bold",
//                         color: "#fff",
//                       }}
//                     >
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                       <button
//                         style={{
//                           marginTop: "10px",
//                           padding: "5px 10px",
//                           backgroundColor: "lightgreen",
//                           border: "none",
//                           borderRadius: "4px",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         style={{
//                           backgroundColor: "lightcoral",
//                           marginTop: "10px",
//                           padding: "5px 10px",
//                           border: "none",
//                           borderRadius: "4px",
//                           cursor: "pointer",
//                         }}
//                       >
//                         Decline
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="9"
//                     style={{
//                       textAlign: "center",
//                       padding: "8px",
//                       border: "1px solid #ddd",
//                     }}
//                   >
//                     No service requests found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           {viewRequests.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   style={{
//                     margin: "0 5px",
//                     padding: "2px 8px",
//                     height:"40px",
//                     width:"40px",
//                     backgroundColor: page === currentPage ? "#4CAF50" : "#ddd",
//                     color: page === currentPage ? "#fff" : "#000",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           )}
//         </center>
//       </div>
//     </div>
//   );
// }

// export default AdminViewAllRequests;
















// to doo cappt and decline button disable when the request is already accpeted



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminViewAllRequests() {
//   const [viewRequests, setViewRequests] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4; // Number of results per page

//   useEffect(() => {
//     const fetchViewAllRequests = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/admin/view-all-requests");
//         console.log("Response data:", response.data); // Log response data

//         // Sort requests by date in descending order
//         const sortedRequests = response.data.sort(
//           (a, b) => new Date(b.serviceDate) - new Date(a.serviceDate)
//         );

//         setViewRequests(sortedRequests);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError(err.response?.data?.message || "Failed to fetch requests.");
//       }
//       finally {
//         setTimeout(() => {
//             setLoading(false);
//           }, 1500);
//       }
//     };
//     fetchViewAllRequests();
//   }, []);


//   const handleStatusAction = async (request, newStatus) => {
//     try {
//       const adminName = "Admin Name"; // Replace with dynamic data if needed
//       const adminEmail = "admin@example.com";
//       const adminAddress = "Admin Address";

//       console.log("Sending data to backend:", {
//         serviceName: request.serviceName,
//         serviceType: request.serviceType,
//         serviceDate: request.serviceDate,
//         serviceTime: request.serviceTime,
//         descriptionOfService: request.descriptionOfService,
//         serviceStatus: newStatus,
//         adminName,
//         adminEmail,
//         adminAddress,
//       });

//       await axios.put("http://localhost:5000/admin/status-action", {
//         serviceName: request.serviceName,
//         serviceType: request.serviceType,
//         serviceDate: request.serviceDate,
//         serviceTime: request.serviceTime,
//         descriptionOfService: request.descriptionOfService,
//         serviceStatus: newStatus,
//         adminName,
//         adminEmail,
//         adminAddress,
//       });

//       // Refresh requests after status update
//       const response = await axios.get("http://localhost:5000/admin/view-all-requests");
//       setViewRequests(
//         response.data.sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate))
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert(err.response?.data?.message || "Failed to update status.");
//     } 
//     finally {
//       setTimeout(() => {
//           setLoading(false);
//         }, 1500);
//     }
//   };



//   // Calculate the current items to display
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = viewRequests.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page handler
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Total number of pages
//   const totalPages = Math.ceil(viewRequests.length / itemsPerPage);

//   return (
//     <div className="centered">
//       <div className="login-container">
//         <br />
//         <center>
//           <h2 style={{ marginTop: "50px" }}>All Service Requests</h2>
//           {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
//           <table
//             className="custom-table"
//             style={{
//               width: "100%",
//               border: "1px solid #ddd",
//               borderCollapse: "collapse",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Member ID</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Name</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Type</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Time</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>View Status</th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.length > 0 ? (
//                 currentItems.map((request, index) => (
//                   <tr key={index}>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceOwnerMail}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceName}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceType}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {new Date(request.serviceDate).toLocaleDateString()}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceTime}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.descriptionOfService}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td
//                       style={{
//                         border: "1px solid #ddd",
//                         padding: "8px",
//                         backgroundColor: request.serviceStatus ? "#58F487" : "#FE5F61",
//                         fontSize: "14px",
//                         fontWeight: "bold",
//                         color: "#fff",
//                       }}
//                     >
//                       {request.serviceStatus ? "Accepted" : "Declined"}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                         <button
//                           onClick={() => handleStatusAction(request, true)}
//                           disabled={request.serviceStatus} // Disable if already accepted
//                           style={{
//                             marginTop: "10px",
//                             padding: "5px 10px",
//                             backgroundColor: "lightgreen",
//                             border: "none",
//                             borderRadius: "4px",
//                             cursor: request.serviceStatus ? "not-allowed" : "pointer", // Change cursor to not-allowed if disabled
//                           }}
//                         >
//                           Accept
//                         </button>
//                         <button
//                           onClick={() => handleStatusAction(request, false)}
//                           disabled={request.serviceStatus} // Disable if already accepted
//                           style={{
//                             backgroundColor: "lightcoral",
//                             marginTop: "10px",
//                             padding: "5px 10px",
//                             border: "none",
//                             borderRadius: "4px",
//                             cursor: request.serviceStatus ? "not-allowed" : "pointer", // Change cursor to not-allowed if disabled
//                           }}
//                         >
//                           Decline
//                         </button>
//                         </td>

//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="9"
//                     style={{
//                       textAlign: "center",
//                       padding: "8px",
//                       border: "1px solid #ddd",
//                     }}
//                   >
//                     No service requests found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           {viewRequests.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => handlePageChange(page)}
//                   style={{
//                     margin: "0 5px",
//                     padding: "2px 8px",
//                     height: "40px",
//                     width: "40px",
//                     backgroundColor: page === currentPage ? "#4CAF50" : "#ddd",
//                     color: page === currentPage ? "#fff" : "#000",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           )}
//         </center>
//       </div>
//     </div>
//   );
// }

// export default AdminViewAllRequests;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

function AdminViewAllRequests() {
  const [viewRequests, setViewRequests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of results per page
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


  if (!isLoggedIn) {
    return <Navigate to="/adminLogin" replace />;
  }
  


  useEffect(() => {
    const fetchViewAllRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/view-all-requests");
        console.log("Response data:", response.data); // Log response data

        // Sort requests by date in descending order
        const sortedRequests = response.data.sort(
          (a, b) => new Date(b.serviceDate) - new Date(a.serviceDate)
        );

        setViewRequests(sortedRequests);
      } catch (err) {
        console.error("Error fetching requests:", err);
        setError(err.response?.data?.message || "Failed to fetch requests.");
      }
      finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };
    if (isLoggedIn) {
      fetchViewAllRequests();
    }
  }, [isLoggedIn]);


  const handleStatusAction = async (request, newStatus) => {
    try {
      const adminName = localStorage.getItem("userName");
      const adminEmail = localStorage.getItem("userEmail");
      const adminAddress = localStorage.getItem("userAddress");


      console.log("Admin details fetched from session:", {
        adminName,
        adminEmail,
        adminAddress,
      });


      console.log("Sending data to backend:", {
        serviceName: request.serviceName,
        serviceType: request.serviceType,
        serviceDate: request.serviceDate,
        serviceTime: request.serviceTime,
        descriptionOfService: request.descriptionOfService,
        serviceStatus: newStatus,
        adminName,
        adminEmail,
        adminAddress,
      });

      await axios.put("http://localhost:5000/admin/status-action", {
        serviceName: request.serviceName,
        serviceType: request.serviceType,
        serviceDate: request.serviceDate,
        serviceTime: request.serviceTime,
        descriptionOfService: request.descriptionOfService,
        serviceStatus: newStatus,
        adminName,
        adminEmail,
        adminAddress,
      });

      // Refresh requests after status update
      const response = await axios.get("http://localhost:5000/admin/view-all-requests");
      setViewRequests(
        response.data.sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate))
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
          <h2 style={{ marginTop: "50px" }}>All Service Requests</h2>
          {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
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
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Member ID</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Name</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service Type</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Time</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>View Status</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((request, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.serviceOwnerMail}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.serviceName}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.serviceType}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {new Date(request.serviceDate).toLocaleDateString()}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.serviceTime}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.descriptionOfService}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", fontSize: "14px" }}>
                      {request.serviceStatus ? "Accepted" : "Declined"}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        backgroundColor: request.serviceStatus ? "#58F487" : "#FE5F61",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {request.serviceStatus ? "Accepted" : "Declined"}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <button
                        onClick={() => handleStatusAction(request, true)}
                        disabled={request.serviceStatus}
                        style={{
                          marginTop: "10px",
                          padding: "5px 10px",
                          backgroundColor: request.serviceStatus ? "#d3d3d3" : "lightgreen",
                          border: "none",
                          borderRadius: "4px",
                          cursor: request.serviceStatus ? "not-allowed" : "pointer",
                        }}
                        title={
                          request.serviceStatus
                            ? `Accepted by ${request.acceptedBy || "another admin"}`
                            : ""
                        }
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatusAction(request, false)}
                        disabled={request.serviceStatus}
                        style={{
                          backgroundColor: request.serviceStatus ? "#d3d3d3" : "lightcoral",
                          marginTop: "10px",
                          padding: "5px 10px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: request.serviceStatus ? "not-allowed" : "pointer",
                        }}
                        title={
                          request.serviceStatus
                            ? `Accepted by ${request.acceptedBy || "another admin"}`
                            : ""
                        }
                      >
                        Decline
                      </button>


                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    style={{
                      textAlign: "center",
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    No service requests found.
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
        </center>
      </div>
    </div>
  );
}

export default AdminViewAllRequests;


