import React from 'react'

import hero from '../assets/hero.jpg';
import event from '../assets/event.jpg'
import cake from '../assets/cake.jpg'
function Client() {
    const clients = [
        {
            id: 1,
            img: hero,
            name: 'organization'
        },
        {
            id: 1,
            img: cake,
            name: 'organization'

        },
        {
            id: 1,
            img: event,
            name: 'organization'

        },
        {
            id: 1,
            img: hero,
            name: 'organization'

        }
        ,
        {
            id: 1,
            img: event,
            name: 'organization'

        },
        {
            id: 1,
            img: hero,


        },
        {
            id: 1,
            img: hero
        },


    ]
    return (
        <div className="px-4 py-0">
            <div className="overflow-hidden">
                <div className="flex animate-slide  ">
                    {clients.map((client, index) => (
                        <div key={index} className=" flex-row  justify-items-center mx-2 ">
                            <img
                                src={client.img}
                                alt={client.name}
                                className="h-20 w-20 rounded-full object-cover"
                            />
                            <p className="ml-4 text-lg ">{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Client
