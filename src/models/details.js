const mongoose = require("mongoose");

const tutSchema = new mongoose.Schema({
    brandname: String,
    links: [{
        label: String,
        url: String
    }]
});

const Tut = new mongoose.model('Tut', tutSchema);

const data = {
    brandname: "waris sandhu",
    links: [{
            label: "home",
            url: "/"
        },
        {
            label: "contact",
            url: "/contact"
        },
        {
            label: "aboutus",
            url: "/about-us"
        },
        {
            label: "privacypolicy",
            url: "/privacy-policy"
        }
    ]
};

module.exports = Tut;