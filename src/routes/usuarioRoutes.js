const { buscar, editar, criar, deletar } = require("../controllers/usuarioController");

const router = require("express").Router();

router.get("/",
    /* #swagger.tags = ['Usuarios'] */
    /* #swagger.summary = 'Lista os usuarios' */
    /* #swagger.responses[200] = { description: 'Usuarios retornados com sucesso.', schema: [{ id: 1, nome: 'Maria Silva', email: 'maria@email.com' }] } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    buscar);
router.post("/",
    /* #swagger.tags = ['Usuarios'] */
    /* #swagger.summary = 'Cria um usuario' */
    /* #swagger.parameters['body'] = { in: 'body', required: true, schema: { $nome: 'Maria Silva', $email: 'maria@email.com', $senha: 'senha-segura' } } */
    /* #swagger.responses[200] = { description: 'Email já cadastrado ou Falha ao criar registro.', schema: { mensagem: 'Email já cadastrado' } } */
    /* #swagger.responses[201] = { description: 'Registro criado com sucesso.', schema: { mensagem: 'Registro criado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    criar);
router.put("/:id",
    /* #swagger.tags = ['Usuarios'] */
    /* #swagger.summary = 'Atualiza um usuario' */
    /* #swagger.parameters['id'] = { in: 'path', required: true, type: 'integer', format: 'int32', description: 'ID do usuario' } */
    /* #swagger.parameters['body'] = { in: 'body', required: true, schema: { nome: 'Maria Silva', email: 'maria.nova@email.com', senha: 'nova-senha' } } */
    /* #swagger.responses[200] = { description: 'Falha ao atualizar registro.', schema: { mensagem: 'Falha ao atualizar registro' } } */
    /* #swagger.responses[201] = { description: 'Registro atualizado com sucesso.', schema: { mensagem: 'Registro atualizado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    editar);
router.delete("/:id",
    /* #swagger.tags = ['Usuarios'] */
    /* #swagger.summary = 'Exclui um usuario' */
    /* #swagger.parameters['id'] = { in: 'path', required: true, type: 'integer', format: 'int32', description: 'ID do usuario' } */
    /* #swagger.responses[200] = { description: 'Registro apagado com sucesso ou Registro já foi apagado.', schema: { mensagem: 'Registro apagado com sucesso' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    deletar);

module.exports = router;