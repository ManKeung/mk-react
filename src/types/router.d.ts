/*
 * @Description: router
 * @Author: Mankeung
 * @Date: 2022-10-06 17:00:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 22:14:23
 */

type Title = {
    'zh-CN': string,
    'en-US': string
}

declare interface RouteProps {
    path: string
    meta: {
        title: Title
    },
    element: React.ReactNode | RenderFunction
    children?: RouteProps[]
}