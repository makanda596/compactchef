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
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706302/IMG-20250301-WA0055_tnywxq.jpg",
            eventPlace: "Vihiga Wedding Event"
        },
        {
            id: 1,
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618735/wed12_obq3yo.jpg",
            eventPlace: "Ugenya Wedding Event"
        },
        {
            id: 1,
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742618072/wed13_uhewal.jpg",
            eventPlace: "Nairobi Wedding Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/qpq1t8gpht4m4uktjvhd.jpg",
            eventPlace: "Gessamu Cooporate Event"
        },

        {
            id: 1,
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742620528/IMG-20250301-WA0042_cr0rfd.jpg",
            eventPlace: " Wedding Event"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742632394/IMG-20250322-WA0132_jvqg1e.jpg"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736261948/compactChef/jexwbm6cu6letodrhwga.jpg",
            eventPlace: "Amondi Birthday Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288753/baby_qeno4b.jpg",
            eventPlace: "Baby Shower"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706298/IMG-20250301-WA0051_rsgfb7.jpg"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737290597/catering_xdf7yw.webp",
            eventPlace: "Kisumu Cooporate Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737298577/IMG-20250105-WA0291_r9j2gp.jpg",
            eventPlace: "Uganda Roracio Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293956/IMG-20250119-WA0056_vbikna.jpg",
            eventPlace: "Private Dinner Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737298842/salad_gom6qe.jpg",
            eventPlace: "Parklands Wedding Event"
        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293338/WhatsApp_Image_2025-01-19_at_16.24.37_ca4fb2a5_o4sb7e.jpg",
            eventPlace: "Ahero Garden Event"
        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737294236/EC_menus1_qgbbd4.jpg",
            eventPlace: "Tanzania Cooporate Event"
        }
        ,{
src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742707028/IMG-20250106-WA0029_orfb3i.jpg",
            eventPlace: "BabyShower Event"

        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737527526/birthday_om542y.avif"
        }
        ,

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293936/IMG-20250108-WA0100_nvowbe.jpg",
            eventPlace: "Homabay Graduation Event"
        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737288839/WhatsApp_Image_2025-01-08_at_17.57.52_d9545b91_ktmir3.jpg",
            eventPlace: "Busia Ruracio Event"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706296/IMG-20250105-WA0285_azsu81.jpg",
            eventPlace: "Vihiga Traditional Wedding"

        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737293936/IMG-20250108-WA0100_nvowbe.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737298843/wedding_f3ekxu.jpg",
            eventPlace: " Cooporate Event"
        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736264671/compactChef/rzduwk5ix2dmgjv1m0at.jpg",
            eventPlace: "Bondo Cooporate Event"
        },
        {
            src:'https://res.cloudinary.com/db5pgr14l/image/upload/v1742706300/IMG-20250301-WA0054_xlnden.jpg'
        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737293954/IMG-20250119-WA0049_bjdhvd.jpg",
            eventPlace: "Siaya School Opening "
        }, {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737289985/istockphoto-923784110-612x612_ds3qpu.webp",
            eventPlace: "Nairobi International Event"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737298843/wedding_f3ekxu.jpg",
            eventPlace: "Kisumu Wedding Event"

        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737299509/IMG-20250119-WA0050_xak3xq.jpg",
            eventPlace: "Church Ceremony"

        },

        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737299302/IMG-20250105-WA0302_jbj5qj.jpg",
            eventPlace: "Nairobi Private Event"

        },
        {
            src:'https://res.cloudinary.com/db5pgr14l/image/upload/v1737290824/coopr_hxrzgo.jpg',
            eventPlace: "Cooporate Event"
        }
        ,
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1742632159/IMG-20250322-WA0005_csbqqg.jpg",
            eventPlace: ""

        },
        {
            src:'https://res.cloudinary.com/db5pgr14l/image/upload/v1742706299/IMG-20250301-WA0059_cuv0hc.jpg'
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742632163/IMG-20250322-WA0128_mgazuw.jpg"
        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737299509/IMG-20250119-WA0050_xak3xq.jpg",
            eventPlace: ""

        },
        {
            src: "https://res.cloudinary.com/db5pgr14l/image/upload/v1737527526/birthday_om542y.avif"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742620557/IMG-20250301-WA0043_d7i3r2.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742620073/IMG-20250106-WA0047_c45nav.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742618592/IMG-20250301-WA0046_cr27zt.jpg"
        },
        { src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742618592/IMG-20250301-WA0046_cr27zt.jpg"},
    {
        src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742621650/istockphoto-613768110-612x612_kqxriw.webp"
    },
    {
        src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742621651/WhatsApp_Image_2025-01-19_at_16.24.37_ca4fb2a5_nrtfyi.jpg"
    },
    {
        src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1736497255/private_aj5o24.jpg"
    },
    {
        src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706298/IMG-20250301-WA0051_rsgfb7.jpg"
    },
    {
        src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742621785/ugenya_nc3kre.jpg"
    },
        { src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742621785/ugenya_nc3kre.jpg"},{
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737299425/IMG-20250106-WA0053_xnwiju.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737293904/IMG-20250106-WA0057_sk3e9j.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737291091/IMG-20250105-WA0280_stddpe.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1736261950/compactChef/pmne88kacyveovx5736t.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706297/IMG-20250301-WA0045_svyr5j.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706298/WhatsApp_Image_2025-01-19_at_16.24.37_ff8f9cad_iz1gbu.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1742706296/IMG-20250105-WA0285_azsu81.jpg"
        },
        {
            src:"https://res.cloudinary.com/db5pgr14l/image/upload/v1737527647/desert_yajndi.avif"
        },{
            src:'https://res.cloudinary.com/db5pgr14l/image/upload/v1737349641/IMG-20250105-WA0301_zp6b3l.jpg'
        }
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
        <div className="p-2 py-14 md:p-8 md:py-20">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Our Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => openModal(image.src, index)}
                    >
                        <img
                            src={image.src}
                            alt=""
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300">
                            <span className="text-white text-base md:text-lg text-center">{image.eventPlace}</span>
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
                            className="object-cover "
                            style={{
                                transform: `scale(${zoom})`,
                                transition: 'transform 0.3s',
                                maxWidth: '100vw',
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
