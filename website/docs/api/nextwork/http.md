# Http请求

简单封装`axios`，支持`get`、`post`、`put`、`delete`和`patch`方法，promise 的 HTTP 库。更多查看[axios文档](https://github.com/axios/axios)

## 基本使用

```ts
$mk.http.request(config)
$mk.http.get(url[, config])
$mk.http.delete(url[, config])
$mk.http.head(url[, config])
$mk.http.options(url[, config])
$mk.http.post(url[, data[, config]])
$mk.http.put(url[, data[, config]])
$mk.http.patch(url[, data[, config]])
```

## 例子

```tsx title="@/src/pages/home/index.tsx"
useEffect(() => {
    window.$mk.http.get('/api/get').then((data) => {
        console.log('mock模拟数据')
        console.log(data)
        console.log('mock模拟数据')
    })
}, [])
```

![图片](/api/01.png)

## 全局配置

```ts title="@/src/http/index.ts"
const http = axios.create({
	headers: {},
	responseType: 'json',
	timeout: 1000 * 10
})
```

## 请求拦截

```ts title="@/src/http/requestInterceptors.ts"
import axios, { AxiosRequestConfig } from 'axios'

export default {
	onFulfilled: (config: AxiosRequestConfig<any>) => {
		config.cancelToken = new axios.CancelToken((c) => {
			// ! 全局没挂上设置默认值
			if (!window._cancelHttpArr) window._cancelHttpArr = []

			// TODO 把请求push进去便于取消请求
			window._cancelHttpArr.push(c)
		})

		return config
	},
	onRejected: (error: any) => Promise.reject(error)
}
```

## 响应拦截

```ts title="@/src/http/responseInterceptors.ts"
import axios, { AxiosResponse } from 'axios'
import CODE from './code'

export default {
	onFulfilled: (response: AxiosResponse<any, any>) => {
		if (response.data?.code === CODE.OK) return Promise.resolve(response.data)

		return Promise.reject(response.data)
	},
	onRejected: (error: any) => {
		if (axios.isCancel(error)) return Promise.reject(error)

		return Promise.reject(error)
	}
}
```

## code码

具体码值根据你项目自行修改

```ts title="@/src/http/code.ts"
enum code {
	OK = 2000, // 服务正常，且返回数据
	ERR = 4000, // 参数错误
	LOGINERR = 4001, // 用户登陆认证失败
	DATAERR = 4002, // 数据不是最新，需刷新
	AUTHERR = 4003, // 无权限操作
	ERR404 = 4004, // 找不到资源
	TOKENERR = 401, // token验证错误
	SERVERERR = 5000, // 服务端异常
	OTHERERR = 6000 // 未知错误
}

export default code
```

## 取消请求

细心的你肯定，发现在请求拦截中使用了`window._cancelHttpArr`存储`c`方便取消请求，响应拦截`axios.isCancel(error)`处理取消请求错误，具体使用工具函数会介绍。
