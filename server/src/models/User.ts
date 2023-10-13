import { DataTypes } from 'sequelize';
import { Comment } from './Comment';
import { sequelize } from '../connection/connection';

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  recfresh_token: DataTypes.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  tableName: 'user',
  modelName: 'User',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  as: 'users', 
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'users',
})