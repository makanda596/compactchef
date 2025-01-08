import React from 'react'

function Menu() {
    return (
        <div>
            menu
            <section className="p-8 bg-[#fffaf0]">
                <h2 className="text-3xl font-bold text-[#8b8000] text-center mb-8">Our Menu</h2>
                <p className="text-center mb-4 text-gray-700">
                    The menu items displayed below are a selection of our preferred and randomly curated dishes. However, we are delighted to customize the menu to suit your specific tastes and event needs. Let us know your preferences, and we’ll create a culinary experience uniquely tailored for you.
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
                                alt={item.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />

                            {/* Title */}
                            <h3 className="text-lg font-bold text-center text-gray-800 mt-4 px-2">
                                {item.title}
                            </h3>


                            <div className="flex flex-col sm:flex-row justify-between gap-4 p-4">
                                <a
                                    href="https://res.cloudinary.com/db5pgr14l/raw/upload/v1736311737/ugenya_menu_eanlxs.docx" // View menu link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 text-gray-800 py-2 px-4 text-center rounded-lg text-sm hover:bg-gray-300 transition-colors duration-300"
                                >
                                    View Menu
                                </a>
                                <a
                                    href={item.downloadLink} // Download link
                                    download
                                    className="bg-[#8b8000] text-white py-2 px-4 text-center rounded-lg text-sm hover:bg-[#a08d00] transition-colors duration-300"
                                >
                                    Download
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Menu
