import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dristrict: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postCode: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;