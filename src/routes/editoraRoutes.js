import  express  from "express";
import editoraController from "../controllers/editoraController.js";


const router = express.Router();
router
  .get("/editoras", editoraController.listarEditoras)
  .get("/editoras/:id", editoraController.listarEditorasPorId)
  .post("/editoras", editoraController.cadastrarEditora)
  .put("/editoras/:id", editoraController.atualizarEditora)
  .delete("/editoras/:id", editoraController.excluirEditora);


export default router;