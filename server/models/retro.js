'use strict';

module.exports = Retro => {

  Retro.observe('access', (ctx, next) => {
    next();
  });

  Retro.createOptionsFromRemotingContext = ctx => {
    let base = this.base.createOptionsFromRemotingContext(ctx);
    return Object.assign(base, {fullCtx: ctx});
  };

};
