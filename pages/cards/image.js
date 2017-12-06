Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: '圣诞蜡烛'
    }, {
      mode: 'aspectFit',
      text: '圣诞树'
    }, {
      mode: 'aspectFill',
      text: '圣诞老人'
    }, {
      mode: 'top',
      text: '圣诞花'
    }],
    recevice: [{
      text:"圣诞快乐啊哈"
    },{
      text:"希望你有一个愉快的圣诞节"
    },{
        text: "圣诞树来喽哈哈哈"
    }],
    src: '../../resources/cat.png'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  tapName: function (event) {
    wx.showModal({
      title: '送上祝福',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
              console.log(userInfo);
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})