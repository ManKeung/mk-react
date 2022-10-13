# 防攻击

[xss](https://www.npmjs.com/package/xss)是一个用于对用户输入的内容进行过滤，以避免遭受 XSS 攻击的模块（[什么是 XSS 攻击？](https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB)）。主要用于论坛、博客、网上商店等等一些可允许用户录入页面排版、格式控制相关的 HTML 的场景，xss模块通过白名单来控制允许的标签及相关的标签属性，另外还提供了一系列的接口以便用户扩展，比其他同类模块更为灵活。

xss(val: string)

+ `val` 字符串

+ 例子：

```ts
console.log($mk.utils.xss('<script>alert("xss");</script>'))
```
