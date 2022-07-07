export const menuItems = [

    {
        name: "Home",
        icon: "fa-home",
        link: "/home"
    },
    {
        name: "Category",
        icon: "fa-list-ul",
        submenu: [
            {
                name: "Category List",
                link: "/categories"
            },
            {
                name: "Add Category",
                link: "/add-category"
            }
        ]
    },
    {
        name: "Products",
        icon: "fa-archive",
        submenu: [
            {
                name: "Product List",
                link: "/products"
            },
            {
                name: "Add Product",
                link: "/products/create"
            },
            {
                name: "Product Review",
                link: "/product-review"
            }
        ]
    },
    {
        name: "Orders",
        icon: "fa-shopping-cart",
        submenu: [
            {
                name: "Order List",
                link: "/orders"
            },
            {
                name: "Order Tracking",
                link: "/tracking-orders"
            },
            {
                name: "Order Details",
                link: "/order-details"
            },
        ]
    },
    {
        name: "Sales",
        icon: "fa-money",
        submenu: [
            {
                name: "Orders"
            },
            {
                name: "Transactions",
            },
        ]
    },
    {
        name: "Users",
        icon: "fa-user",
        submenu: [
            {
                name: "User List"
            },
            {
                name: "Create User",
            }
        ]
    },
    {
        name: "Reports",
        icon: "fa-line-chart",
        link: "/reports"
    },
    {
        name: "Invoices",
        icon: "fa-file-text",
        // link: "/invoices"
    },
];