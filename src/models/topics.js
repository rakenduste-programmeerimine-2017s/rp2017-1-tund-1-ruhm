const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
  {
    name: { type: String, required: true },
    curriculum: { type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' },
    viewCount: { type: Number, default: 0 },
    deleted: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Topic', TopicSchema)
