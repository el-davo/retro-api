'use strict';

module.exports = app => {
  let ds = app.datasources.db;

  ds.autoupdate(err => {
    if (err) throw err;

    createBootstrapUsers();
  });

  function createBootstrapUsers() {
    let retroModel = app.models.retro;
    let userModel = app.models.user;

    userModel.findOne({where: {username: 'test'}}, (error, response) => {
      if (response) {
        return;
      }

      userModel.create({
        username: 'test',
        email: 'test@test.com',
        password: 'test',
        emailVerified: true
      }, (err, user) => {
        retroModel.create({userId: user.id, name: 'test'});
      });
    });
  }
};
