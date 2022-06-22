const bcrypt = require('bcryptjs');

exports.usersData = [
    {
        name: "Admin JS",
        email: "admin@admin.com",
        password: bcrypt.hashSync('adminjs', 8),
        roles: ["admin"]
    },
    {
        name: "Consumer JS",
        email: "consumer@myshop.com",
        password: bcrypt.hashSync('consumerjs', 8),
        roles: ["consumer"],
        shippingAddresss: {
            address: "No. 8834, Main Road, Bazaar Quarter",
            city: "Bago",
            state: "Bago",
            country: "Myanmar",
        }
    },
    {
        name: "Consumer Admin",
        email: "consumer@admin.com",
        password: bcrypt.hashSync('consumeradmin', 8),
        roles: ["consumer", "admin"],
        shippingAddresss: {
            address: "No. 8334, Submain Road, Bazaar Quarter",
            city: "Bago",
            state: "Bago",
            country: "Myanmar",
        }
    },
];