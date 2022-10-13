# 总事务

由于Vue3.x中删除了on和off，因此不能借助于一个单独的Vue实例来实现全局事件的发布和订阅与取消订阅（也就是跨组件通讯）。这里使用第三方[mitt](https://www.npmjs.com/package/mitt)库。

+ 例子：

```ts
const emitter = $mk.utils.mitt

emitter.on('foo', e => console.log('foo', e))

emitter.on('*', (type, e) => console.log(type, e))

emitter.emit('foo', { a: 'b' })

emitter.all.clear()

function onFoo() {}
emitter.on('foo', onFoo)
emitter.off('foo', onFoo)
```
