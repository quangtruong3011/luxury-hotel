import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "../date-range/DateRange";

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section className="relative mb-24">
            <div className="relative overflow-hidden">
                <button className="absolute left-4 top-1/2 z-40 transform -translate-y-1/2 bg-gray-400/50 border border-gray-100 rounded-full text-gray-200 hover:border-white hover:text-white transition-all duration-100 ease-linear p-4" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="relative w-full h-screen flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            className="w-full h-full object-cover flex-shrink-0"
                            src={image}
                            alt={`slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button className="absolute right-4 top-1/2 z-40 transform -translate-y-1/2 bg-gray-400/50 border border-white rounded-full text-gray-200 hover:border-white hover:text-white transition-all duration-100 ease-linear p-4" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                    <div className="container">
                        <h1 className="text-white slide-left text-8xl font-bold leading-tight mb-4">Find Your Perfect <br /> Place To Stay</h1>
                        <Link className="bg-rose-500 text-white px-8 py-3 hover:bg-red-500">Book Now</Link>
                    </div>
                </div>
                {/* <div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                        {images.map((_, i) => (
                            <button key={i} className={`w-3 h-3 rounded-full bg-white border border-gray-200 hover:bg-gray-200 focus:outline-none ${index === i ? 'bg-gray-200' : ''}`} onClick={() => setIndex(i)} />
                        ))}
                    </div>
                </div> */}
            </div>
            <div className="absolute w-full -mt-20">
                <DateRange />
            </div>
        </section>
    );
}

export default ImageSlider;