const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: Schema.Types.String, required: true, },
    projectId: { type: Schema.Types.String, required: true, },
    creatorName: { type: Schema.Types.String, required: true, },
    creatorId: { type: Schema.Types.String, required: true, },
    createdOn: { type: Schema.Types.Date, default: Date.now, },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;