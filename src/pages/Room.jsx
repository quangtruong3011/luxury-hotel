import React, { useEffect, useState } from 'react';
import RoomLists from '../components/rooms/RoomLists';
import RoomService from '../services/RoomService';
import BreadcumbArea from '../components/breadcumb-area/BreadcumbArea';

const roomService = new RoomService();

const Room = () => {
    // const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     const fetchRooms = async () => {
    //         try {
    //             const { data } = await roomService.getRooms();
    //             setRooms(data.data);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             console.log('Done');
    //         }
    //     };

    //     fetchRooms();
    // }, []);

    const rooms = [
        {
            _id: 1,
            name: "Room 1",
            imgUrl: "https://picsum.photos/400/600?random=1",
            price: 100,
            size: 200,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        },
        {
            _id: 2,
            name: "Room 2",
            imgUrl: "https://picsum.photos/400/600?random=2",
            price: 200,
            size: 300,
            capacity: 3,
            pets: true,
            breakfast: false,
            featured: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        },
        {
            _id: 3,
            name: "Room 3",
            imgUrl: "https://picsum.photos/400/600?random=3",
            price: 300,
            size: 400,
            capacity: 4,
            pets: true,
            breakfast: true,
            featured: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        },
        {
            _id: 4,
            name: "Room 4",
            imgUrl: "https://picsum.photos/400/600?random=4",
            price: 400,
            size: 500,
            capacity: 5,
            pets: false,
            breakfast: true,
            featured: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        },

        {
            _id: 5,
            name: "Room 5",
            imgUrl: "https://picsum.photos/400/600?random=5",
            price: 500,
            size: 600,
            capacity: 6,
            pets: true,
            breakfast: true,
            featured: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        },
        {
            _id: 6,
            name: "Room 6",
            imgUrl: "https://picsum.photos/400/600?random=6",
            price: 600,
            size: 700,
            capacity: 7,
            pets: true,
            breakfast: true,
            featured: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec libero fermentum aliquam. Donec at urna nec odio ultricies varius. Integer et tortor euismod, ultricies mi at, varius ipsum lorem."
        }
    ];

    return (
        <div>
            <BreadcumbArea title="Room" text="Home" />
            <div className="container">
                <RoomLists rooms={rooms} />
            </div>
        </div>
    )
};

export default Room;