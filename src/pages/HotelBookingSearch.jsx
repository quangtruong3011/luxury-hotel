import BreadcumbArea from "../components/breadcumb-area/BreadcumbArea";
import RoomLists from "../components/rooms/RoomLists";
import LayoutV2 from "../layouts/LayoutV2";

const HotelBookingSearch = () => {
    const rooms = [
        {
            imgUrl: "https://picsum.photos/400/600?random=1",
            title: "Room 1",
            capacity: 2,
            maxChildren: 1,
            price: 100
        },
        {
            imgUrl: "https://picsum.photos/400/600?random=2",
            title: "Room 2",
            capacity: 4,
            maxChildren: 2,
            price: 200
        },
        {
            imgUrl: "https://picsum.photos/400/600?random=3",
            title: "Room 3",
            capacity: 6,
            maxChildren: 3,
            price: 300
        },
        {
            imgUrl: "https://picsum.photos/400/600?random=4",
            title: "Room 4",
            capacity: 8,
            maxChildren: 4,
            price: 400
        },
        {
            imgUrl: "https://picsum.photos/400/600?random=5",
            title: "Room 5",
            capacity: 10,
            maxChildren: 5,
            price: 500
        },
        {
            imgUrl: "https://picsum.photos/400/600?random=6",
            title: "Room 6",
            capacity: 12,
            maxChildren: 6,
            price: 600
        }
    ]

    const handleSelectRoom = (id) => {
        console.log(id);
    }

    return (
        <div>
            <LayoutV2>
                <BreadcumbArea title="Hotel Booking Search" text="Home" />
                <div className="container mb-24">
                    <h1 className="text-center text-4xl font-semibold leading-tight mb-4">Search Result</h1>
                    <p className="text-center text-gray-500 leading-tight mb-12">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <RoomLists handleSelectRoom={handleSelectRoom} rooms={rooms} />
                </div>
            </LayoutV2>
        </div>
    )
};

export default HotelBookingSearch;