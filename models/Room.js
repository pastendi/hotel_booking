import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter room name'],
      trim: true,
      maxLength: [100, 'Room name cannot exceed 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter room price'],
      maxLength: [4, 'Price cannot exceed 4 characters'],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, 'Please enter description'],
    },
    address: {
      type: String,
      required: [true, 'Please enter address'],
      maxLength: [100, 'Address cannot exceed 100 characters'],
    },
    guestCapacity: {
      type: Number,
      required: [true, 'Please enter guest capacity'],
    },
    bed: {
      type: Number,
      required: [true, 'Please enter bed quantity'],
    },
    airConditioned: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please enter room category'],
      enum: {
        values: ['Kings', 'Single', 'Twins'],
        message: 'Please select correct category for room',
      },
    },
    reviews: [
      {
        user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
        username: { type: String, required: true },
        ratings: { type: Number, required: true },
        review: { type: String, required: true },
      },
    ],
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model.Room || mongoose.model('Room', roomSchema)
