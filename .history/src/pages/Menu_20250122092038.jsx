import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

function Menu() {
    const menuItems = [
        {
            title: "Breakfast Dish",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            description: "Start your day with our delightful breakfast options, made fresh every morning.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
            viewLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Lunch Dish",
            image: "https://via.placeholder.com/300",
            description: "Explore our variety of lunch dishes, perfect for a midday treat.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dinner Dish",
            image: "https://via.placeholder.com/300",
            description: "End your day with a sumptuous dinner crafted to perfection.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dessert",
            image: "https://via.placeholder.com/300",
            description: "Indulge in our sweet and savory dessert options for a perfect finale.",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Menu</h2>
                <p className="text-center text-gray-600 mb-12">
                    Discover a selection of curated dishes designed to please every palate.
                    Whether you’re planning an event or dining at home, we’ve got you covered.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center text-white">
                                    <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                <div className="flex justify-between">
                                    <a
                                        href={item.viewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-[#8b8000] hover:text-[#a08d00]"
                                    >
                                        View Menu
                                    </a>
                                    <a
                                        href={item.downloadLink}
                                        download
                                        className="bg-[#8b8000] text-white py-2 px-4 rounded-md text-sm hover:bg-[#a08d00] transition"
                                    >
                                        <DownloadIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Menu;
