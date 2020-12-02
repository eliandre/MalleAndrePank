const mongoose = require('mongoose');

module.exports = mongoose.model('Transaction', mongoose.Schema({
    created: { type: Date, required: true, default: Date.now() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true, min: 1},
    currency: { type: String, required: true},
    accountFrom: { type: String, required: true},
    accountTo: { type: String, required: true},
    explanation: { type: String, required: true, minlength: 1 },
    senderName: { type: String, required: true, minlength: 1 },
    recieverName: { type: String, required: false, minlength: 1 },
    abortController: { type: Object, required: false },
    status: { type: String, required: true, enum: ['pending', 'completed', 'inProgress', 'failed'], default: 'pending'},
    statusDetail: { type: String, required: false }
}, {
    toJSON: {
        transform: function(docIn, docOut) {
            docOut.id = docOut._id
            delete docOut._id
        }
    }
}))