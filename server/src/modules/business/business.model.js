import mongoose, { Schema } from 'mongoose';

const BusinessSchema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    businessCategory: {
      type: String,
      required: true,
    },
    aptNum: String,
    businessPhoneNo: {
      type: String,
      required: true,
      maxlength: 9,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      },
    },
  },
  { timestamps: true },
);
export default mongoose.model('Business', BusinessSchema);
