
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function AdminHome() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmailName] = useState("");
    const [userAddress, setAddressName] = useState("");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


    if (!isLoggedIn) {
        return <Navigate to="/adminLogin" replace />;
      }
    

    useEffect(() => {
        const storedadminname = localStorage.getItem("userName");
        const storedadminemail = localStorage.getItem("userEmail");
        const storedadminaddress = localStorage.getItem("userAddress");
    
        console.log('Retrieved from localStorage:', {
            storedadminname,
            storedadminemail,
            storedadminaddress,
        });
    
        if (storedadminname) {
            setUserName(storedadminname);
            setEmailName(storedadminemail);
            setAddressName(storedadminaddress);
        }
    }, []);
    

    return (
        <>
            <div>
                {/* <h2>ŴéĻĆØɱë {userName} ÁĎMĬÑ {userEmail} {userAddress}</h2> */}


                <h2>Welcome {userName || "Unknown Admin"} ✨</h2>
                <p>Email: {userEmail || "Not available"}</p>
                <p>Address: {userAddress || "Not available"}</p>
            </div>
        </>
    );
}

export default AdminHome