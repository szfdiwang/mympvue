function showToast2sec(data) {
  wx.showToast({
    title: data,
    icon: 'none',
    duration: 2000,
    mask: true
  })
}

function showToast3sec(data) {
  wx.showToast({
    title: data,
    icon: 'none',
    duration: 3000,
    mask: true
  })
}

export default {
  showToast2sec,
  showToast2sec
}
//简单封装了一个长时间提示
