/* eslint valid-jsdoc: 'off' */

'use strict';
const path = require('path');
const os = require('os');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586342938694_1156';

  // 产品代码
  config.productCode = '{{name}}';
  // 产品代码和权限控制相互关联
  config.policy = {
    enable: false, // 是否开启该中间件，不写默认开启
    /**
     * 配置规则详情见：https://github.com/eggjs/egg-path-matching
     */
    ignore: [
      /login|imgcode|loginout|currentUser|userrelated\/toapplyfor|userrelated\/getCode/, // 与用户相关的api，与菜单权限无关
      /^\/api\/v1\/conditions\//, // '/conditions/' 目录下都可以访问', 与菜单权限无关
      '/api/v1/menus/v1.0',
    ],
  };

  
  // rsa加密和解密私钥
  config.rsaPrivateKey = '';

  // rsa加密和解密公钥
  config.rsaPublicKey = '';
  config.rsa = {
    enable: true, // 是否开启该中间件，不写默认开启
    /**
     * 配置规则详情见：https://github.com/eggjs/egg-path-matching
     */
    match: [
      '/api/v1/login/v1.0',
    ],
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0',
    },
    agent: true,
  };
  config.session = {
    key: 'EGG_SESSION',
    maxAge: 2 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: false,
    renew: true,
  };

  // add your middleware config here
  config.middleware = [ 
    'loggerRequestParams',
    'errorHandler', 
    'rsa', 
    'islogin', 
    'policy' 
  ];

  config.loggerRequestParams = {
    enable: true,
    match: '/api',
  };

  config.multipart = {
    mode: 'file',
    tmpdir: path.join(os.tmpdir(), 'egg-multipart-tmp', appInfo.name),
    fileExtensions: [ 'doc', 'docx', 'png', 'jpg', 'jpeg', 'gif', 'xlsx', 'xls' ],
    fileSize: '10mb', // 文件上传的大小限制
  };
  // 加载 errorHandler 中间件
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  };

  

  // 项目版本号
  config.prjVersion = 'v1';
  // 接口版本号
  config.interfaceVersion = 'v1.0';
  // redis版本号
  config.redisVersion = '{{name}}:v1';
  /**
   * 登录状态检查
   */
  config.islogin = {
    enable: false, // 是否开启该中间件，不写默认开启
    ignore: /login|imgcode|userrelated\/toapplyfor|userrelated\/getCode/,
  };

  // 登录状态的rediskey，每个项目需要保持独立
  config.loginRedisKey= '{{name}}_login_';

  // 配置请求地址
  // add your user config here
  const userConfig = {
    myAppName: '{{name}}',
  };

  return {
    ...config,
    ...userConfig,
  };
};
