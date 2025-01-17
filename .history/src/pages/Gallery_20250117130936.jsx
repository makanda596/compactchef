import React, { useState } from 'react';
import FitScreenIcon from '@mui/icons-material/FitScreen'; // Import the icon

const Gallery = () => {
    // State to handle the modal visibility and selected image
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // Handle opening and closing of the modal
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    const images = [
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            eventPlace: "Event Place 1"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/another-image.jpg",
            eventPlace: "Event Place 2"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/third-image.jpg",
            eventPlace: "Event Place 3"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/fourth-image.jpg",
            eventPlace: "Event Place 4"
        },
        // Add more image URLs and event places here
    ];

    return (
        <div className="p-8">
            <h2 className="text-4xl font-semibold text-center mb-8">Our Gallery</h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => openModal(image.src)} // Open modal on image click
                    >
                        <img
                            src={image.src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        {/* Hover effect for displaying the event place */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <span className="text-white text-xl">{image.eventPlace}</span>
                        </div>
                        {/* Enlargement button with FitScreenIcon */}
                        <button
                            onClick={(e) => { e.stopPropagation(); openModal(image.src); }} // Prevent modal from opening multiple times
                            className="absolute top-2 right-2 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <FitScreenIcon />
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Fullscreen Image */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected Gallery Image"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
