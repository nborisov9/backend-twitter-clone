import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  fullname: {
    unique: true,
    type: String,
  },
  username: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmed_hash: {
    required: true,
    type: String,
  },
  confirmed: Boolean,
  location: String,
  about: String,
  website: String,
});

export const UserModel = model('User', UserSchema);
