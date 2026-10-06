const { PRISMA } = require("../services");
const bcrypt = require("bcrypt");

async function buscar(req, res) {
    try {
        const linhas = await PRISMA.usuarios.findMany({
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
        dados.senha = await bcrypt.hash(dados.senha, 10);

        const registro = await PRISMA.usuarios.create({
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
        if(dados.senha){
            dados.senha = await bcrypt.hash(dados.senha, 10);
        }

        const registro = await PRISMA.usuarios.update({
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

        const registro = await PRISMA.usuarios.count({
            where: {
                id: Number(req.params.id)
            }
        });

        if(registro > 0){
            await PRISMA.usuarios.delete({
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

async function login(req, res) {
    try {
        const { email, senha } = req.body;


        const usuario = await PRISMA.usuarios.findFirst({
            where: {
                email
            }
        });

        if(!usuario){
            res.json({
                tipo: "warning",
                mensagem: "Email ou senha incorreto"
            });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        
        if(!senhaValida){
            res.json({
                tipo: "warning",
                mensagem: "Email ou senha incorreto"
            });
        }

        delete usuario.senha;

        res.json({
            usuario
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
    deletar,
    login
}