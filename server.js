import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`SISTEMA DE CONTRATOS - COMARAPA RL`);
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`Presiona Ctrl+C para detener`);
  console.log(`========================================`);
});
