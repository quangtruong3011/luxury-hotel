import ImageSlider from "../components/image-slider/ImageSlider";
import RoomLists from "../components/rooms/RoomLists";
import Layout from "../layouts/Layout";

const Home = () => {
    const images = [
        'https://picsum.photos/1920/1080?random=1',
        'https://picsum.photos/1920/1080?random=2',
        'https://picsum.photos/1920/1080?random=3',
    ];

    const rooms = [
        {
            _id: 1,
            imgUrl: 'https://picsum.photos/400/600?random=1',
            title: 'Deluxe Contrast Room',
            price: 200,
        },
        {
            _id: 2,
            imgUrl: 'https://picsum.photos/400/600?random=2',
            title: 'Luxury Twin Room',
            price: 250,
        },
        {
            _id: 3,
            imgUrl: 'https://picsum.photos/400/600?random=3',
            title: 'Single Contrast Room',
            price: 230,
        }
    ]
    return (
        <Layout>
            <ImageSlider images={images} />
            <section className="container mb-24">
                <h1 className="text-center text-4xl font-semibold leading-tight mb-4">Our Most Populer Room</h1>
                <p className="text-center text-gray-500 leading-tight mb-12">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <RoomLists rooms={rooms} />
            </section>
        </Layout>
    )
};

export default Home;