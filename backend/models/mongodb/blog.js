import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    //This is how foreign key is specified in mongoDB
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

blogSchema.statics.findByTitle = async function(search_title) {
    let blog = await this.findOne({
        title: search_title
    });

    if ( !blog ) {
        blog = await this.findOne({ image: search_title });
    }

    return blog;
}

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;