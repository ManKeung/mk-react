# 按键监听

这是一个强健的 Javascript 库用于捕获键盘输入和输入的组合键。[查看文档了解更多](https://www.npmjs.com/package/hotkeys-js)

+ 例子：

```ts
const hotKeys = $mk.utils.hotkeys

hotkeys('f5', function(event, handler){
  event.preventDefault()
  alert('你按了F5！')
})
```
