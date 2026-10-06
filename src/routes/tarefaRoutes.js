const { buscar, editar, criar, deletar } = require("../controllers/tarefaController");

const router = require("express").Router();

router.get("/",
    /* #swagger.tags = ['Tarefas'] */
    /* #swagger.summary = 'Lista os tarefas' */
    /* #swagger.responses[200] = { description: 'Registro retornados com sucesso.', schema: [{ id: 1, titulo: 'titulo teste', descricao: 'descricao' }] } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    buscar);
router.post("/",
    /* #swagger.tags = ['Tarefas'] */
    /* #swagger.summary = 'Cria uma tarefa' */
    /* #swagger.parameters['body'] = { in: 'body', required: true, schema: { $titulo: 'titulo', $descricao: 'descricao', $usuario_id: 1 } } */
    /* #swagger.responses[200] = { description: 'Registro criado com sucesso.', schema: { mensagem: 'Registro criado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    criar);
router.put("/:id",
    /* #swagger.tags = ['Tarefas'] */
    /* #swagger.summary = 'Atualiza uma tarefa' */
    /* #swagger.parameters['id'] = { in: 'path', required: true, type: 'integer', format: 'int32', description: 'ID da tarefa' } */
    /* #swagger.parameters['body'] = { in: 'body', required: true, schema: { titulo: 'titulo', descricao: 'descricao', usuario_id: 1 } } */
    /* #swagger.responses[200] = { description: 'Registro atualizado com sucesso.', schema: { mensagem: 'Registro atualizado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    editar);
router.delete("/:id",
    /* #swagger.tags = ['Tarefas'] */
    /* #swagger.summary = 'Exclui uma tarefa' */
    /* #swagger.parameters['id'] = { in: 'path', required: true, type: 'integer', format: 'int32', description: 'ID da tarefa' } */
    /* #swagger.responses[200] = { description: 'Registro apagado com sucesso ou Registro já foi apagado.', schema: { mensagem: 'Registro apagado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    deletar);

module.exports = router;