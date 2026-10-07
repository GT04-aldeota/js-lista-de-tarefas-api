const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const app = express();
const usuarioRoutes = require("./src/routes/usuarioRoutes");
const tarefaRoutes = require("./src/routes/tarefaRoutes");
const { login } = require("./src/controllers/usuarioController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/docs")
});

app.post("/login", login);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/usuarios", usuarioRoutes);
app.use("/tarefas", tarefaRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        tipo:"warning",
        mensagem: "Rota não encontrada"
    })
})

app.listen(8000, () => { console.log("Servidor on: http://localhost:8000") });
