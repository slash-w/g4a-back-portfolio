import { Schema, model } from "mongoose";

let collection = "genres";
let schema = new Schema(
  {
    id: { type: String, required: true }, //ya esta
    description: { type: String, required: true }, //ya esta
  },
  {
    timestamps: false,
  }
);

let Genre = model(collection, schema);

export default Genre;
