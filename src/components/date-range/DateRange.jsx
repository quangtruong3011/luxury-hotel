import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "../date-picker/DatePicker";

const DateRange = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString('en-CA').split('T')[0]);
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-CA').split('T')[0]);
    const [formData, setFormData] = useState({
        startDate: startDate,
        endDate: endDate,
        adults: 0,
        children: 0,
        rooms: 0
    });

    const handleDatePickerChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handleStartDateChange = (e) => {
        handleDatePickerChange(e.target.value, endDate);
    };

    const handleEndDateChange = (e) => {
        handleDatePickerChange(startDate, e.target.value);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleKeyPress = (e) => {
        const charCode = e.charCode;
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
        }
    };

    const handleCheck = (e) => {
        e.preventDefault();
        navigate("hotel-booking-search")
        console.log(formData);
    };

    return (
        <div className="container" >
            <div className="flex w-full h-36 bg-white rounded-full shadow-lg" >
                <form className="w-full flex justify-between items-center" onSubmit={handleCheck}>
                    <div className="border-r-2 border-slate-500">
                        <DatePicker
                            value={startDate}
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="border-r-2 border-slate-500">
                        <DatePicker
                            value={endDate}
                            onChange={handleEndDateChange}
                        />
                    </div>
                    <div className="flex items-center text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <ul className="flex justify-between items-center text-2xl">
                            <li>
                                <input type="text" id="adults" className="w-8 text-center bg-transparent outline-none"
                                    min={0}
                                    defaultValue={0}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                />
                                Adults
                            </li>
                            <li>
                                <input type="text" id="children" className="w-8 text-center bg-transparent outline-none"
                                    min={0}
                                    defaultValue={0}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                />
                                Children
                            </li>
                            <li>
                                <input type="text" id="rooms" className="w-8 text-center bg-transparent outline-none"
                                    min={0}
                                    defaultValue={0}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                />
                                Rooms
                            </li>
                        </ul>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <button
                        type="submit"
                        className="h-full rounded-r-full bg-slate-700 text-white text-xl px-8 hover:bg-red-500 transition-all duration-100 ease-linear"
                    >Check Availability</button>
                </form>
            </div>
        </div >
    )
};

export default DateRange;