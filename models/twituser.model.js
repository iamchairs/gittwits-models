module.exports = function(sequelize, connection) {
  var TwitUser = connection.define('TwitUser', {});

  return TwitUser;
}