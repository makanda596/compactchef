import React from 'react'

import hero from '../assets/hero.jpg';
import event from '../assets/event.jpg'
import cake from '../assets/cake.jpg'
function Client() {
    const clients = [
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: cake
        },
        {
            id: 1,
            img: event
        },
        {
            id: 1,
            img: hero
        }
        ,
        {
            id: 1,
            img: event
        },
        {
            id: 1,
            img: hero
        },
        {
            id: 1,
            img: hero
        },


    ]
    return (
        <div className="p-4">
            <div className="overflow-hidden">
                <div className="flex animate-slide">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-center mx-6">
                            <img
                                src={client.img}
                                alt={client.name}
                                className="h-20 w-20 rounded-full object-cover"
                            />
                            <p className="ml-4 text-lg">{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Client
