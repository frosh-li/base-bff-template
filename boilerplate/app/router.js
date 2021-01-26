'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const {
    router,
    controller,
  } = app;

  router.get('/api/home/v1', controller.home.index);
  
};
