import React, { useState } from 'react';
import FitScreenIcon from '@mui/icons-material/FitScreen'; // Import FitScreenIcon
import ZoomInIcon from '@mui/icons-material/ZoomIn'; // Import ZoomInIcon
import ZoomOutIcon from '@mui/icons-material/ZoomOut'; // Import ZoomOutIcon
import IconButton from '@mui/material/IconButton'; // Import IconButton component

const Gallery = () => {
    // State to handle modal visibility, selected image, current index, and zoom level
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(1); // State for zoom level

    // Array of image data (src and event place)
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
        // Add more image URLs and event places as needed
    ];

    // Open modal with the selected image and set the index
    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setZoom(1); // Reset zoom when a new image is opened
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
        setCurrentIndex(0);
        setZoom(1); // Reset zoom when modal is closed
    };

    // Go to the previous image
    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex].src);
        setCurrentIndex(newIndex);
    };

    // Go to the next image
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex].src);
        setCurrentIndex(newIndex);
    };

    // Zoom in
    const zoomIn = () => {
        setZoom((prevZoom) => prevZoom + 0.1); // Increase zoom level by 0.1
    };

    // Zoom out
    const zoomOut = () => {
        setZoom((prevZoom) => (prevZoom > 0.2 ? prevZoom - 0.1 : prevZoom)); // Decrease zoom level by 0.1 but not below 0.2
    };

    return (
        <div className="p-8">
            <h2 className="text-4xl font-semibold text-center mb-8">Our Gallery</h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => openModal(image.src, index)} // Open modal with image and index
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
                            onClick={(e) => { e.stopPropagation(); openModal(image.src, index); }} // Prevent modal from opening multiple times
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
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            &times;
                        </button>

                        {/* Displaying the selected image with zoom */}
                        <img
                            src={selectedImage}
                            alt="Selected Gallery Image"
                            className="object-contain"
                            style={{
                                transform: `scale(${zoom})`,
                                transition: 'transform 0.3s',
                                maxWidth: '80vw', // Set max-width to 80% of the viewport width
                                maxHeight: '80vh', // Set max-height to 80% of the viewport height
                            }}
                        />

                        {/* Navigation buttons for next and previous images */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                        >
                            &#10094; {/* Previous arrow */}
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                        >
                            &#10095; {/* Next arrow */}
                        </button>

                        {/* Zoom buttons */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <IconButton
                                onClick={zoomIn}
                                className="bg-white text-black p-2 rounded-full opacity-80 hover:opacity-100"
                            >
                                <ZoomInIcon />
                            </IconButton>
                            <IconButton
                                onClick={zoomOut}
                                className="bg-gold text-white p-2 rounded-full opacity-80 hover:opacity-100"
                            >
                                <ZoomOutIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
