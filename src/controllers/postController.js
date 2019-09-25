const Post = require('../models/Post')

module.exports = 
{
    async store(req,res)
    {
        try
        {
            const post = await Post.create(req.body)
    
            res.json(post)
        }
        catch(error)
        {
            res.status(error.status).send({ error })
        }


    },

    async index(req,res)
    {
        try
        {
            const posts = await Post.find({}).sort('-createdAt')
    
            res.json(posts)
        }
        catch(error)
        {
            res.status(error.status).send({ error })
        }


    },
    async show(req,res)
    {
        try
        {
            const { id } = req.params
            const post = await Post.findById(id)
            if(!post) res.status(404).json({ error: "Post nao encontrado"})
            res.json(post)
        }
        catch(error)
        {
            res.status(error.status).send({ error })
        }


    },

    async delete(req,res)
    {
        try
        {
            const { id } = req.params
            const post = await Post.findByIdAndDelete(id)
            

            res.json(post)
        }
        catch(error)
        {
            res.status(error.status).send({ error })
        }


    },

    async update(req,res)
    {
        try
        {
            const { title, content } = req.body
            const { id } = req.params
            const post = await Post.findById(id)

            post.title = title
            post.content = content

            await post.save()

            res.json(post)
        }
        catch(error)
        {
            res.status(error.status).send({ error })
        }


    }
}