const { PRISMA } = require("../services");

async function buscar(req, res) {
    try {
        const usuario_id = Number(req.params.id);
        const linhas = await PRISMA.tarefas.findMany({
            where: {
                usuario_id
            }
            orderBy: {
                id: "asc"
            }
        });
        res.json(linhas);
    } catch (error) {
        res.status(500).json({
            tipo:"error",
            mensagem: error.message
        })
    }
}

async function criar(req, res) {
    try {
        const dados = req.body;

        const registro = await PRISMA.tarefas.create({
            data: dados
        });

        if(registro){
            res.json({
                tipo: "success",
                mensagem: "Registro criado com sucesso"
            });
        }
    } catch (error) {
        res.status(500).json({
            tipo:"error",
            mensagem: error.message
        })
    }
}

async function editar(req, res) {
    try {
        const dados = req.body;

        const registro = await PRISMA.tarefas.update({
            where: {
                id: Number(req.params.id)
            },
            data: dados
        });

        if(registro){
            res.json({
                tipo: "success",
                mensagem: "Registro atualizado com sucesso"
            });
        }
    } catch (error) {
        res.status(500).json({
            tipo:"error",
            mensagem: error.message
        })
    }
}

async function deletar(req, res) {
    try {

        const registro = await PRISMA.tarefas.count({
            where: {
                id: Number(req.params.id)
            }
        });

        if(registro > 0){
            await PRISMA.tarefas.delete({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.json({
                tipo: "success",
                mensagem: "Registro deletado com sucesso"
            })
            return;
        }

        res.json({
            tipo: "info",
            mensagem: "Registro não encontrado"
        })

    } catch (error) {
        res.status(500).json({
            tipo:"error",
            mensagem: error.message
        })
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
}