const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema(
  {
    mainContent: {
      type: String,
      required: [true, "Please enter banner Main Content"],
      trim: true,
      maxLength: [100, "Banner Main Content cannot exceed 100 characters"],
    },
    subContent: {
      type: String,
      required: [true, "Please enter banner Sub Content"],
      trim: true,
      maxLength: [100, "Banner Sub Content cannot exceed 100 characters"],
    },
    image: {
      type: String,
      required: [true, "Please enter banner image"],
    },
    goToUrl: {
      type: String,
      required: [true, "Please enter Go To Url"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", bannerSchema);
