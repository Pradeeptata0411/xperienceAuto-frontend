// import { useEffect,useState } from 'react';

// function SellerHome(){

//     const[userName ,setUserName] = useState("");


//     useEffect(()=>{
//         const storedName = localStorage.getItem("userName");
       
//         if(storedName){
//             setUserName(storedName);
//         }
//     },[]);

//     return(
//         <>
//         <div>
//             <h1 style={{textWeight:"bold"}}>Hi seller {userName}</h1>
//             </div>
//             </>
//     );
// }


// export default SellerHome



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerHome() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn || isLoggedIn !== "true") {
            navigate("/sellerpage"); // Redirect to login page if not logged in
        } else if (storedName) {
            setUserName(storedName);
        }
    }, [navigate]);

    return (
        <>
            <div>
                <h1 style={{ fontWeight: "bold" }}>Welcome, {userName}!</h1>
            </div>
        </>
    );
}

export default SellerHome;
