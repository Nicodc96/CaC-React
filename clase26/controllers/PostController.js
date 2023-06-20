import PostModel from '../models/PostModel.js';

const getAllPosts = async (req, res) => {
    try{
        const posts = await PostModel.findAll();
        res.json({
            message: "Lista de posts",
            postList: posts
        });
    } catch(error){
        res.json({
            message: error.message
        });
    }
}

const getPost = async (req, res) => {
    try{
        const post = await PostModel.findOne({ where: {id: req.params.id}});
        res.json({
            post: post
        });
    } catch(error){
        res.json({
            message: error.message
        });
    }
}

const createPost = async (req, res) => {
    try{
        await PostModel.create(req.body);
        res.json({
            message: "Se ha creado correctamente un post."
        });
    } catch(error){
        res.json({
            message: error.message
        });
    }
}

const updatePost = async (req, res) => {
    try{
        const post = await PostModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({
            message: `Se ha actualizado correctamente el Post de ID: ${req.params.id}`
        })
    } catch(error){
        res.json({
            message: error.message
        });
    }
}

const deletePost = async (req, res) => {
    try{
        await PostModel.destroy({
            where: {id: req.params.id}
        });
        res.json({
            message: `Se ha eliminado correctamente el Post de ID: ${req.params.id}`
        })
    } catch(error){
        res.json({
            message: error.message
        });
    }
}

export {getAllPosts, getPost, createPost, updatePost, deletePost}