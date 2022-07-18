import request from '../utils/request'
/**
 * @method
 * @description 登录接口
 * @param {Object} //用户名以及密码
 */
export const login = (model) => request.post('/admin/login', model)

/**
 * 侧边栏
 * @param {} model
 * @returns
 */

export const getinfo = (model) => request.post('/admin/getinfo', model)
