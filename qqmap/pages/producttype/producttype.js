const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "护肤",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '洁面皂',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '卸妆',
              image: "../../images/icon/quanhuodong.png"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "彩妆",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "香水/香氛",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '淡香水EDT',
              image: "../../images/icon/quanhuodong.png"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 22,
        cate_name: "彩妆2",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 1,
              name: '气垫bb',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: "../../images/icon/quanhuodong.png"
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: "../../images/icon/quanhuodong.png"
            }
          ]
      }
    ],
    curNav: 1,
    curIndex: 0,
    windowHeight: 200

  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        _this.setData({
          windowHeight: calc
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
