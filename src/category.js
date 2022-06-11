const categories = {
    pl: "Personal Loan",
    vl: "Vehicle Loan",
    el: "Education Loan",
    hl: "Home Loan"
}

var category = function category(key) {
    return categories[key.toLowerCase()];
};

module.exports = {
    category: category,
};
