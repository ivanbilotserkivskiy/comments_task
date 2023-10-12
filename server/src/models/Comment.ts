import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
export const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_text: DataTypes.STRING,
  file_path: DataTypes.STRING,
  parent_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
}, {
  updatedAt: false,
  tableName: 'comment',
  modelName: 'Comment',
});