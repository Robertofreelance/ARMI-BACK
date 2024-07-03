// src/index.js
const express = require('express');
var cors = require('cors')
const shoppingCartRoutes = require('./ports/http/routes/shoppingCartRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.use('/api', shoppingCartRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});