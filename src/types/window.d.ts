/*
 * @Description: window
 * @Author: Mankeung
 * @Date: 2022-09-25 21:38:55
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:59:07
 */

import { compose } from 'redux'

declare global {
    interface Window {
        _cancelHttpArr: typeof import('axios').Canceler[],
        $mk: {
            http: typeof import('@/http').default,
            utils: typeof import('@/utils').default,
        },
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}