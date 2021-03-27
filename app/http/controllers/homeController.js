const Menu = require("../../models/menu");

homeController = () => {
    return {
        async index(req, res) {
            const pizzas = await Menu.find();
            return res.render("home", { pizzas: pizzas });
        },
    };
};

module.exports = homeController;