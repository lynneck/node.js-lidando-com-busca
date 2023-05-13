import mongoose from "mongoose";


const editoraSchema = new mongoose.Schema(
  {
    id : {type: String },
    nome : {type: String, required: true },
    estado : {type: String },
    municipio:{type: String}

  },
  {
    versionKey: false
  }
);

const editoras = mongoose.model("editoras", editoraSchema);

export default editoras;