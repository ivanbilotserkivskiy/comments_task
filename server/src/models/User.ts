import { Sequelize, DataTypes } from 'sequelize';
import { Comment } from './Comment';

const sequelize = new Sequelize('sqlite::memory:');
export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  refresh_token: DataTypes.STRING,
}, {
  updatedAt: false,
  tableName: 'user',
  modelName: 'User',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  as: 'user',
});

User.belongsTo(Comment, {
  foreignKey: 'user_id',
  as: 'user',
})