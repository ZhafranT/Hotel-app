import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
      },
      gender: {
         type: String,
         require: true,
      },
      handPhoneNumber: {
         type: String,
         required: true,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      address: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      isAdmin: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

export default mongoose.model('User', UserSchema);
