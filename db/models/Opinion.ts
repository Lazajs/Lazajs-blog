import mongoose,{ Schema, model } from "mongoose";

export const OpinionSchema = new Schema({
  name: { type: String, required: false, default: 'Anonimo' },
  content: { type: String, required: true }
})

export const Opinion = mongoose.models.Opinion || model('Opinion', OpinionSchema)