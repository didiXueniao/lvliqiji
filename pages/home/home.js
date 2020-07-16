Page({
  data: {
    text: '我的产品展示',
    imgUrls: [
      'https://www3.services.cn-banking.hsbc.com.cn/PublicContent/mobilez_test/PRD_WD/PL/2.34.0/content/scm/native/creditCards/choice_credit_card.png',
      '/image/huafu.jpg',
      '/image/huafu1.jpg',
      '/image/huafu2.jpg',
    ],
    list: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '财富洞察',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '投资讲堂',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '常见问题',
      },
    ],
    circular: false,
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 500,
    hasUserInfo: false,
  },
  onLoad() {},
  onItemClick(ev) {
    if(this.data.hasUserInfo) {
      console.log(ev.detail);
      my.alert({
        title: '亲',
        content: `您正在访问${ev.detail.index}号服务`,
      })
    } else {
      my.confirm({
        title: '温馨提示',
        content: '您还未登录，请登录',
        confirmButtonText: '登录',
        cancelButtonText: '取消',
        success: () => {
          my.getAuthCode({
            scopes: 'auth_user',//auth_base  auth_zhima
            fail: (error) => {
              console.error('getAuthCode', error);
            },
            success: () => {
              my.getAuthUserInfo({
                fail: (error) => {
                  console.error('getAuthUserInfo', error);
                },
                success: (userInfo) => {
                  console.log(`userInfo:`, userInfo);
                  this.setData({
                    hasUserInfo: true,
                  });
                  my.alert({
                    title: '获取用户信息成功',
                    content: `尊敬的${userInfo.nickName}会员，您好。`,
                  });
                  setTimeout(() => {
                    this.setData({
                      hasUserInfo: false
                    })
                  }, 60000);
                }
              });
            }
          });
        }
      });
    }
    
  },
  handleTapLogonIn() {
    if(this.data.hasUserInfo){
      setTimeout(() => {
        this.setData({
          hasUserInfo: false
        })
      }, 60000);
    }
  }
});
