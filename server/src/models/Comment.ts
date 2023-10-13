import { DataTypes } from 'sequelize';
import { sequelize } from '../connection/connection';

export const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_text: DataTypes.STRING,
  file_path: DataTypes.STRING,
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: DataTypes.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  tableName: 'comment',
  modelName: 'Comment',
});