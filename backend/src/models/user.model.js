import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minimumLength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
// The User model is created using mongoose.model() and is associated with the userSchema. This model can be used to interact with the "users" collection in the MongoDB database, allowing for operations such as creating, reading, updating, and deleting user documents.
// The userSchema defines the structure of the user documents in the database, including fields for email, full name, password, and profile picture. The timestamps option automatically adds createdAt and updatedAt fields to the documents, providing a record of when each document was created and last modified.
export default User;
