'use strict';

module.exports = app => {
  let ds = app.datasources.db;

  ds.autoupdate(err => {
    if (err) throw err;

    createBootstrapUsers();
  });

  function createBootstrapUsers() {
    let retro = app.models.retro;

    retro.create({name: 'test'});
  }
};
