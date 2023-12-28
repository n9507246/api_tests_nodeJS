'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {as: 'User' ,foreignKey:'user_id'})
    }
  }
  Post.init({
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: false
  });
  return Post;
};