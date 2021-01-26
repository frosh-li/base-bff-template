'use strict';

const Service = require('bw-bff-framework').Service;

class HomeService extends Service {
  async indexService() {
    return 'test home service';
  }

  /**
   * @description 获取推广的产品列信息列表
   * @param {string} partnerId 合伙人ID
   * @param {string} productId 产品ID
   */
  async productMarket(partnerId, productId) {
    const { productPromotionInfo } = this.app.constant.serviceUrl;
    const result = await this.ctx.commonGet(productPromotionInfo);
    return result;
  }
}

module.exports = HomeService;