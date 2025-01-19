import React, { useState } from 'react';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import IconButton from '@mui/material/IconButton';

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(1);

    const images = [
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            eventPlace: "Event Place 1"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/qpq1t8gpht4m4uktjvhd.jpg",
            eventPlace: "Event Place 2"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
            eventPlace: "Event Place 3"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg",
            eventPlace: "Event Place 4"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            eventPlace: "Event Place 1"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/qpq1t8gpht4m4uktjvhd.jpg",
            eventPlace: "Event Place 2"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
            eventPlace: "Event Place 3"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg",
            eventPlace: "Event Place 4"
        },
    ];

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setZoom(1);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
        setCurrentIndex(0);
        setZoom(1);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex].src);
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex].src);
        setCurrentIndex(newIndex);
    };

    const zoomIn = () => {
        setZoom((prevZoom) => prevZoom + 0.1);
    };

    const zoomOut = () => {
        setZoom((prevZoom) => (prevZoom > 0.2 ? prevZoom - 0.1 : prevZoom));
    };

    return (
        <div className="p-8 py-20">
            <h2 className="text-4xl font-semibold text-center mb-8">Our Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => openModal(image.src, index)}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <span className="text-white text-xl">{image.eventPlace}</span>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); openModal(image.src, index); }}
                            className="absolute top-2 right-2 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <FitScreenIcon />
                        </button>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full shadow-lg z-50 hover:bg-gold transition-colors"
                        >
                            &times;
                        </button>

                        {/* Displaying the selected image with zoom */}
                        <img
                            src={selectedImage}
                            alt=""
                            className="object-contain"
                            style={{
                                transform: `scale(${zoom})`,
                                transition: 'transform 0.3s',
                                maxWidth: '80vw',
                                maxHeight: '80vh',
                            }}
                        />

                        {/* Navigation buttons for next and previous images */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-50"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-50"
                        >
                            &#10095;
                        </button>

                        {/* Zoom buttons */}
                        <div className="absolute bottom-4 bg-gold left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
                            <IconButton
                                onClick={zoomIn}
                                className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
                            >
                                <ZoomInIcon />
                            </IconButton>
                            <IconButton
                                onClick={zoomOut}
                                className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
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
