# 数据加密

## 对称加解密

### 加密

en(value: T)

+ `value` 加密数据

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts title="@/src/utils/crypto.ts"
const en = <T>(value: T): string => {
	try {
		const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(value))
		const encrypted = CryptoJS.AES.encrypt(srcs, secretKey.crypot.key, {
			iv: secretKey.crypot.iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		return encrypted.toString()
	} catch (error: any) {
		console.error(`加密数据${value}出错了~`)
		throw new Error(error)
	}
}
```

```mdx-code-block
</details>

+ 例子：

```ts
const str = $mk.utils.crypto.en({
    name: 'mankeung'
})

console.log(str)
```

### 解密

de(en: string)

+ `en` 待解密数据

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ts title="@/src/utils/crypto.ts"
const de = (en: string): unknown => {
	if (!en) throw new Error('en参数不能为空')

	try {
		const decrypt = CryptoJS.AES.decrypt(en, secretKey.crypot.key, {
			iv: secretKey.crypot.iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
		return JSON.parse(decryptedStr.toString())
	} catch (error: any) {
		console.log('en参数不能为空')
		throw new Error(error)
	}
}
```

```mdx-code-block
</details>

+ 例子：

```ts
const str = $mk.utils.crypto.en({
    name: 'mankeung'
})

const newStr = $mk.utils.crypto.de(str)
console.log(newStr)
```
