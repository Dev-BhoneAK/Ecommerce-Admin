const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter blog title"],
      trim: true,
      maxLength: [100, "Blog title cannot exceed 100 characters"],
    },
    image: {
      type: String,
      required: [true, "Please enter blog image"],
    },
    tags: {
      type: Array,
      required: [true, "Please enter blog tags"],
    },
    description: {
      type: String,
      required: [true, "Please enter blog description"],
      trim: true,
      maxLength: [5000, "Blog description cannot exceed 5000 characters"],
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
