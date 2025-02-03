// import React, { useEffect, useState } from 'react';
// import './customercss/MyRequests.css';
// import axios from 'axios';

// function CustomerMyRequests() {
//   const [requests, setRequests] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const userEmail = localStorage.getItem('userEmail'); // Get logged-in user's email from local storage
//         if (!userEmail) {
//           setError('User email not found in local storage.');
//           return;
//         }
//         const response = await axios.get(`https://xperienceauto-backend.onrender.com/viewmyrequests/${userEmail}`);
//         console.log("Fetched requests:", response.data); // Debug fetched data
//         setRequests(response.data); // Update state with fetched data
//       } catch (err) {
//         console.error('Error fetching requests:', err);
//         setError(err.response?.data?.message || 'Failed to fetch requests.');
//       }
//     };
//     fetchRequests();
//   }, []);
  

//   return (
//     <>
//       <div className="centered">
//         <div className="login-container">
//           <br />
//           <center>
//             {error && <p className="error-message">{error}</p>}
//             <table className="custom-table">
//               <thead>
//                 <tr>
//                   <th>MemberID</th>
//                   <th>Requested Service Name</th>
//                   <th>Requested Service Type</th>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Description</th>
//                   <th>Status</th>
//                   <th>View Status</th>
//                   <th>Accepted by and <br/> Location</th>
//                 </tr>
//               </thead>
//                   <tbody>
//                     {requests.map((req, index) => (
//                       <tr key={index}>
//                         <td>{req.serviceOwnerMail}</td>
//                         <td>{req.serviceName}</td>
//                         <td>{req.serviceType}</td>
//                         <td>{new Date(req.serviceDate).toLocaleDateString()}</td>
//                         <td>{req.serviceTime}</td>
//                         <td>{req.descriptionOfService}</td>
//                         <td>{req.serviceStatus ? 'Accepted' : 'Declined'}</td>
//                         <td
//                           style={{
//                             backgroundColor: req.serviceStatus ? '#58F487' : '#FE5F61',
//                             fontSize: '17px',
//                             fontWeight: 'bold',
//                           }}
//                         >
//                           {req.serviceStatus ? 'Accepted' : 'Declined'}
//                         </td>
//                         <td>
//                           {/* {req.serviceAcceptedby && req.serviceLocation ? (
//                             <div>
//                               <p>Name: {req.serviceAcceptedby}</p>
//                               <p>Email: {req.serviceAdminEmail}</p>
//                               <p>Location: {req.serviceLocation}</p>
//                             </div>
//                           ) : (
//                             <p>Not Assigned</p>
//                           )} */}

//                               {req.serviceAcceptedby && req.serviceLocation ? (
//                                 <div>
//                                   <p>Name: {req.serviceAcceptedby || 'Not Available'}</p>
//                                   <p>Email: {req.serviceAdminEmail || 'Not Available'}</p>
//                                   <p>Location: {req.serviceLocation || 'Not Available'}</p>
//                                 </div>
//                               ) : (
//                                 <p>Not Assigned</p>
//                               )}

//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>

//             </table>
//           </center>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomerMyRequests;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function CustomerMyRequests() {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 5; // Display 5 requests per page


  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
      }

  // Fetching requests from API
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail'); // Get logged-in user's email from local storage
        if (!userEmail) {
          setError('User email not found in local storage.');
          return;
        }
        const response = await axios.get(`https://xperienceauto-backend.onrender.com/viewmyrequests/${userEmail}`);
        setRequests(response.data); // Update state with fetched data
      } catch (err) {
        console.error('Error fetching requests:', err);
        setError(err.response?.data?.message || 'Failed to fetch requests.');
      }
    };
    fetchRequests();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(requests.length / requestsPerPage); // Calculate total number of pages
  const startIndex = (currentPage - 1) * requestsPerPage;
  const currentRequests = requests.slice(startIndex, startIndex + requestsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ margin: 'auto', maxWidth: '80%' }}>
          <br />
          <center>
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            <table
              style={{
                width: '100%',
                height:'100%',
                borderCollapse: 'collapse',
                marginTop: '100px',
                textAlign: 'center',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>MemberID</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Requested Service Name</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Requested Service Type</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Time</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>View Status</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px' }}>
                    Accepted by and <br /> Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRequests.map((req, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{req.serviceOwnerMail}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{req.serviceName}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{req.serviceType}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                      {new Date(req.serviceDate).toLocaleDateString()}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{req.serviceTime}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{req.descriptionOfService}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                      {req.serviceStatus ? 'Accepted' : 'Declined'}
                    </td>
                    <td
                      style={{
                        border: '1px solid #ddd',
                        padding: '10px',
                        backgroundColor: req.serviceStatus ? '#58F487' : '#FE5F61',
                        fontSize: '17px',
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                    >
                      {req.serviceStatus ? 'Accepted' : 'Declined'}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' , fontSize:"13px"}}>
                      {req.serviceAcceptedby && req.serviceLocation ? (
                        <div>
                          <p>Name: {req.serviceAcceptedby || 'Not Available'}</p>
                          <p>Email: {req.serviceAdminEmail || 'Not Available'}</p>
                          <p>Location: {req.serviceLocation || 'Not Available'}</p>
                        </div>
                      ) : (
                        <p>Not Assigned</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination Controls */}
            <div style={{ justifyContent: 'center', gap: '10px' }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: '1px 1px',
                  border: '1px solid #ddd',
                  backgroundColor: currentPage === 1 ? '#ccc' : '#f9f9f9',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  borderRadius: '5px',
                  width:'100px',
                }}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  style={{
                    padding: '1px 1px',
                    border: '1px solid #ddd',
                    backgroundColor: currentPage === i + 1 ? '#58F487' : '#f9f9f9',
                    color: currentPage === i + 1 ? 'white' : 'black',
                    fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    gap:"10px",
                    width:'50px',
                  }}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  padding: '1px 1px',
                  border: '1px solid #ddd',
                  backgroundColor: currentPage === totalPages ? '#ccc' : '#f9f9f9',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  borderRadius: '5px',
                  width:'100px',
                }}
              >
                Next
              </button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default CustomerMyRequests;
