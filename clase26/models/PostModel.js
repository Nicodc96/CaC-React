import db from '../db/db.js';
import { DataTypes } from 'sequelize';

const PostModel = db.define('posts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
});

export default PostModel;