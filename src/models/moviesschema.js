const mongoose = require("mongoose");
const slugify = require("slugify");

const toolSchema = new mongoose.Schema({
   title: {
        type: String,
        required: true,
    },
    des: {
        type: String, 
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
});

toolSchema.pre('validate', function (next) {
    if (this.title && this.isModified('title')) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

module.exports = mongoose.model("Tool", toolSchema);
