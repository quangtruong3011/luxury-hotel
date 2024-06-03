const DatePicker = ({ value, onChange }) => {
    return (
        <input
            type="date"
            className="w-48 h-full text-2xl text-center bg-transparent outline-none"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default DatePicker;