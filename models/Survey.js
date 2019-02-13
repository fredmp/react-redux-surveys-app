const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  sentAt: Date,
  lastResponseAt: Date,
});

mongoose.model('surveys', surveySchema);
