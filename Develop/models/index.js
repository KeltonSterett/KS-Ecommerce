// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category (as a category can have multiple products but a product can only belong to one category) 
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag) as a product can have multiple tags and a tag can have many products
Product.belongsToMany(Tag, { 
  through: ProductTag,
  foreignKey: 'product_id'
 });

// Tags belongToMany Products (through ProductTag) as a tag can have many products and a product can have many tags
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
