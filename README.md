gittwits-models
-------------------

These are the sequelize models that the gittwits server and the http server share.

# Install

```
npm install https://github.com/iamchairs/gittwits-models.git --save
```

# Use

```
var TwitModel = require('gittwits-models').Twit(sequelize, dbConn);
var HashtagModel = require('gittwits-models').HashtagModel(sequelize, dbConn);
var UserModel = require('gittwits-models').UserModel(sequelize, dbConn);
```