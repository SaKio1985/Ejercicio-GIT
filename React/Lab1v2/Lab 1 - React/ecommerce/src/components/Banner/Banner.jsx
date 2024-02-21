import React, { useEffect } from "react";
import "./Banner.css";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
    const { isLoggedIn, userData } = useAuth();

    return (
        <div className="banner">
            <p className="banner-text">
                {isLoggedIn ? (
                    <>¡{userData.name}, aprovechate de tu 20% de descuento!</>
                ) : (
                    <>Crea una cuenta para disfrutar de nuestros descuentos</>
                )}
            </p> 
        </div>
    );
};

export default Banner;