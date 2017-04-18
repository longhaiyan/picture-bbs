export default {
  // 列表数据状态：loading、onload、reload、null、error
  itemsStep: 'loading',
  isRedirect: false,
  items: [{
    test: 1
  }, {
    test: 2
  }],
  pageBean: {
    // 当前页号
    current: 1,
    // 总记录数
    count: 0,
    // 总页数
    total: 0
  },
  errorMessage: ''
}
