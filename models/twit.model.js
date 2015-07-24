module.exports = function(sequelize, connection) {
  var Hashtag = require('./hashtag.model')(sequelize, connection);
  var User = require('./user.model')(sequelize, connection);
  var TwitHashtag = require('./twithashtag.model')(sequelize, connection);
  var TwitUser = require('./twituser.model')(sequelize, connection);

  var Twit = connection.define('Twit', {
    commentId: sequelize.BIGINT,
    commentType: sequelize.ENUM('Issue', 'PullRequest'),
    message: sequelize.TEXT,
    messageLength: sequelize.INTEGER,
    messageUrl: sequelize.STRING,
    time: sequelize.BIGINT
  });

  Twit.Hashtag = Hashtag;
  Twit.User = User;
  Twit.TwitUser = TwitUser;
  Twit.TwitHashtag = TwitHashtag;

  Hashtag.belongsToMany(Twit, {through: TwitHashtag});
  User.belongsToMany(Twit, {through: TwitUser});
  Twit.belongsTo(User, {as: 'Author'});

  return Twit;
}