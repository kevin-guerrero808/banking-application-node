var customerList = [];

const getCustomer = (customerId) => {
    return customerList.find(customer => customer[0] === customerId);
}

const validateCustomerInfo = (
    CustomerId,
    CustomerName,
    CustomerAge,
    CustomerAddress,
    CustomerContactNumber,
    Category
) => {
    return (
        CustomerId &&
        CustomerName &&
        CustomerAge &&
        CustomerAddress &&
        CustomerContactNumber &&
        Category
    );
};

const addCustomer = (
    CustomerId,
    CustomerName,
    CustomerAge,
    CustomerAddress,
    CustomerContactNumber,
    Category
) => {
    if (
        !validateCustomerInfo(
            CustomerId,
            CustomerName,
            CustomerAge,
            CustomerAddress,
            CustomerContactNumber,
            Category
        )
    ) {
        return -1;
    }
    if (
        getCustomer(CustomerId)
    ) {
        return -1;
    }
    customerList.push([
        CustomerId,
        CustomerName,
        CustomerAge,
        CustomerAddress,
        CustomerContactNumber,
        Category,
    ]);
};

const updateCustomer = (
    CustomerId,
    CustomerName,
    CustomerAge,
    CustomerAddress,
    CustomerContactNumber,
    Category
) => {
    if (
        !validateCustomerInfo(
            CustomerId,
            CustomerName,
            CustomerAge,
            CustomerAddress,
            CustomerContactNumber,
            Category
        )
    ) {
        return -1;
    }
    let customer = getCustomer(CustomerId);
    if (!customer) {
        return -1;
    }

    customer[1] = CustomerName;
    customer[2] = CustomerAge;
    customer[3] = CustomerAddress;
    customer[4] = CustomerContactNumber;
    customer[5] = Category;
};

const getAllCustomers = () => {
    return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };
