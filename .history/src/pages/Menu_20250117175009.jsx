import React from 'react';

function Menu() {
    const menuItems = [
        {
            title: "Breakfast Dish",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1736313944/ugenya_syoeky.jpg",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
            viewLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Lunch Dish",
            image: "https://via.placeholder.com/300",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dinner Dish",
            image: "https://via.placeholder.com/300",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
        {
            title: "Dessert",
            image: "https://via.placeholder.com/300",
            downloadLink: "https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx",
        },
    ];

    return (
        <div>
            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Menu</h2>
                <p className="text-center mb-4 text-gray-700">
                    The menu items displayed below are a selection of our preferred and randomly curated dishes. However, we are delighted to customize the menu to suit your specific tastes and event needs.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg bg-white flex flex-col justify-between"
                        >
                            {/* Item Image */}
                            <img
                                src={item.image}
                                alt={`Image of ${item.title}`}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />

                            {/* Title */}
                            <h3 className="text-lg font-bold text-center text-gray-800 mt-4 px-2">
                                {item.title}
                            </h3>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between gap-4 p-4">
                                {item.viewLink ? (
                                    <a
                                        href={item.viewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-200 text-gray-800 py-2 px-4 text-center rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300"
                                    >
                                        View Menu
                                    </a>
                                ) : (
                                    <span className="bg-gray-100 text-gray-400 py-2 px-4 text-center rounded-lg text-sm cursor-not-allowed">
                                        View Unavailable
                                    </span>
                                )}
                                {item.downloadLink ? (
                                    <a
                                        href={item.downloadLink}
                                        download
                                        className="bg-[#8b8000] text-white py-2 px-4 text-center rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300"
                                    >
                                        Download
                                    </a>
                                ) : (
                                    <span className="bg-gray-100 text-gray-400 py-2 px-4 text-center rounded-lg text-sm cursor-not-allowed">
                                        Download Unavailable
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Menu;
