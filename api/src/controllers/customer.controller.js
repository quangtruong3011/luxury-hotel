import Customer from "../models/customer.model.js";

const createCustomer = async (req, res) => {
    const data = req.body;

    await Customer.create(data);

    res.status(201).send({
        message: "Customer created",
        data,
    });
};

const getCustomers = async (req, res) => {
    const customers = await Customer.find();

    res.status(200).send({
        message: "Customers fetched",
        data: customers
    });
};

const getCustomer = async (req, res) => {
    const { customerId } = req.params;

    const customer = await Customer.findById(customerId);

    res.status(200).send({
        message: "Customer fetched",
        data: customer
    });
};

const updateCustomer = async (req, res) => {
    const { customerId } = req.params;
    const data = req.body;

    await Customer.updateOne({ _id: customerId }, data);

    res.status(200).send({
        message: "Customer updated",
        data,
    });
};

const deleteCustomer = async (req, res) => {
    const { customerId } = req.params;

    await Customer.deleteOne({ _id: customerId });

    res.status(200).send({
        message: "Customer deleted",
    });
};

const customerController = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
};

export default customerController;
