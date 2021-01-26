# bw-bff-framework

### 1.4功能

1.1 加入helper.js两个函数
```
// 生成图像验证码
getCaptcha()

// 获取6位随机数
randomCode
```

1.2 扩展context.js

```
// 解决service中调用curl需要做容错处理的问题 调用方式和curl保持一致，自动容错
commonCurl

/**
  * 通用发送post请求
  * @param {string} url 
  * @param {Object} data 
  */
commonPost(url, data)

/**
  * 通用请求之Get请求
  * @param {string} url 
  */
commonGet(url)

/**
  * 上传文件接口
  * @param {string} url 上传路径
  * @param {string} file 上传的文件
  */
commonUpload(url, file)

/**
  * 通用文件下载功能
  * @param {string} url 文件下载
  */
commonDownload(url)
```

### 加入了请求层的通用日志记录

### 保存以下中间件

```
error_handle.js
islogin.js
loggerRequestParam.js
policy.js
rsa.js
```

### 保存以下service
```
businessLogger.js
policy.js
rsa.js
session.js
```