'use strict';

const Controller = require('bw-bff-framework').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.home.indexService();
  }
}

module.exports = HomeController;
