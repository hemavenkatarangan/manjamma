var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RegisteredEventSchema = new Schema(
    {
        event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
        status: { type: String, required: true, enum: ['New', 'InReview', 'onHold', 'Waitlist', 'declined', 'approved', 'ongoing', 'completed', 'cancelled'], default: '' },
        qas: [{ type: Schema.Types.ObjectId, ref: 'QA' }],
        paymentStatus: { type: String, enum: ['Never Done', 'Recieved', 'Failed', 'Refunded'] },
        paidAmount: { type: Number },
        additionalAmount: { type: Number },
        paidDate: { type: Date },
        receiptNumber: { type: String },
        messages: [{ type: String }],
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
        
    },
    {
        timestamps: true
    }
);

// Virtual for event's URL


RegisteredEventSchema.virtual('url')
    .get(function () {
        return '/byvk/registerevent/' + this._id;
    });

//Export model
module.exports = mongoose.model('RegisteredEvent', RegisteredEventSchema);