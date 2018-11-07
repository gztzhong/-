//引用腾讯地图API
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: "测试地址",
    src: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*判断是第一次加载还是从position页面返回
    如果从position页面返回，会传递用户选择的地点*/
    if (options.address != null && options.address != '') {
      //设置变量 address 的值
      this.setData({
        address: options.address
      });
    } else {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        //此key需要用户自己申请
        key: 'MNXBZ-G5TWD-GYF42-HHZJL-2W2J3-PVBX4'
      });
      var that = this;
      // 调用接口
      qqmapsdk.reverseGeocoder({
        success: function (res) {
          app.globalData.address = res.result.address
          that.setData({
            address: res.result.address
          });
        },
        fail: function (res) {
          //console.log(res);
        },
        complete: function (res) {
          //console.log(res);
        }
      });
    }
  },
  onChangeAddress: function (e) {
    wx.navigateTo({
      url: "/pages/position/position"
    });
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  onShow: function () {
    this.setData({ address: app.globalData.address })
  }
}) 