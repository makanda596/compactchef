import React, { useEffect, useState, useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FaTiktok } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Swal from "sweetalert2";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null); 

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", ""); 

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            setLoading(true);
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();
            setLoading(false);

            if (result.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Thank you for contacting us. We'll get back to you soon.",
                    icon: "success",
                    confirmButtonColor: "#8b8000",
                });

                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error submitting the form. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#8b8000",
                });
            }
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
            Swal.fire({
                title: "Failed!",
                text: "Failed to fetch. Please check your internet connection.",
                icon: "error",
                confirmButtonColor: "#8b8000",
            });
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        /* ⬇️ everything else unchanged ⬇️ */
        <div className="min-h-screen py-1 px-2 mt-2 w-full sm:py-12">
            {/* content unchanged */}
        </div>
    );
};

export default Contact;
