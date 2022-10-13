# 复制粘贴

## 复制

copy(val: T)

+ `val` 复制内容

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts title="@/src/utils/clipboard.ts"
const copy = <T>(val: T): Promise<any> => {
	const clipboard = navigator.clipboard

	return new Promise((resolve, reject) => {
		if (!clipboard) return reject('当前浏览器不支持拷贝')

		clipboard
			.writeText(JSON.stringify(val))
			.then(() => {
				resolve(val)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
```

```mdx-code-block
</details>

+ 例子：

```ts
$mk.utils.clipboard.copy({name: 'mankeung'})
```

## 粘贴

shear()


```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts title="@/src/utils/clipboard.ts"
const shear = (): Promise<string> => {
	const clipboard = navigator.clipboard

	return new Promise((resolve, reject) => {
		if (!clipboard) return reject('当前浏览器不支持粘贴')

		clipboard
			.readText()
			.then((val) => {
				resolve(val)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
```

```mdx-code-block
</details>

+ 例子：

```ts
$mk.utils.clipboard.shear().then(val => {
    console.log(`复制的内容：${val}`)
})
```
