/*
 * @Description: 接口状态码
 * @Author: Mankeung
 * @Date: 2022-09-26 22:07:07
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 22:07:18
 */

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
