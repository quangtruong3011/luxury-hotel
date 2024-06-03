import { Link } from "react-router-dom";

const BreadcumbArea = ({ title, text }) => {
    const imgUrl = 'https://picsum.photos/1920/1080?random=1';
    return (
        <section className="mb-24">
            <div className="relative">
                <img src={imgUrl} alt="breadcumb" className="w-full h-72 object-cover" />
                <div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1 className="text-4xl font-bold text-white">{title}</h1>
                        <p className="text-white text-lg"><Link className="text-white hover:text-red-500" to="/" >{text}</Link>/{title}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcumbArea;