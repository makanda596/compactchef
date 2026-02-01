import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Inquiry() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        venue: "",
        people: "",
        date: "",
        time: "",
        company: "",
        referral: "",
        message: "",
    });

    const services = [
        "Catering Services",
        "Corporate Events",
        "Photograph Services",
        "Mc Services",
        "Tent Services",
        "Weddng Events",
        "Event Decoration",
        "Garden Events",
        "Private Events",
        "Menu Customization",
        "Food Delivery",
        "Baby Showers",
        "Other",
    ];

    const referralOptions = [
        "Social Media",
        "Website",
        "Friend/Family",
        "Advertisement",
        "Other",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    setLoading(false);
                    setFormData({
                        name: "", email: "", phone: "", service: "", venue: "",
                        people: "", date: "", time: "", company: "",
                        referral: "", message: "",
                    });

                    Swal.fire({
                        title: "Success!",
                        text: "Your inquiry has been submitted successfully.",
                        icon: "success",
                        confirmButtonColor: "#8b8000",
                    });
                } else {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setLoading(false);
        }
    };

    return (
        // ⬇️ JSX unchanged ⬇️
        <div className="min-h-screen py-10">
            {/* content stays exactly the same */}
        </div>
    );
}

export default Inquiry;
