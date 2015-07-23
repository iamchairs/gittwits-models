module.exports = function(sequelize, connection) {
  return connection.define('Hashtag', {
    name: sequelize.STRING
  });
}