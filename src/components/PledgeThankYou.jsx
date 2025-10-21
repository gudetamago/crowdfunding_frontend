import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PledgeThankYou() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/campaign/${id}`);
        }, 5000);

        // Cleanup function to clear the timer if component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once when component mounts

    return (
        <div>
            <h2>Thank you for your pledge!</h2>
            <p>Redirecting to home page in 5 seconds...</p>
        </div>
    );
}

export default PledgeThankYou;