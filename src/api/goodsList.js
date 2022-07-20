import request from '@/utils/request'

const getcategory = () => {
  return request({ url: '/admin/category', method: 'GET' })
}
const getgoods = () => {
  return request({ url: '/admin/goods/1?tab=all', method: 'GET' })
}
export default {
  getcategory,
  getgoods
}
