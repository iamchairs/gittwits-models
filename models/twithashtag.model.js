module.exports = function(sequelize, connection) {
  var TwitHashtag = connection.define('TwitHashtag', {});

  return TwitHashtag;
}