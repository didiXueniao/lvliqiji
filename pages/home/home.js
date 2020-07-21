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
 onGetAuthorize() {
        my.getOpenUserInfo({
          fail: (error) => {
            console.error('getAuthUserInfo', error);
          },
          success: (res) => {
            console.log(`userInfo:`, res);
            let userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
            
            console.log(userInfo)
            my.alert({
              content:JSON.stringify(userInfo)
            });
          }
        });
     
  },
  onItemClick(ev) {
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
                }
              });

              my.getLocation({
                success(res) {
                  console.log(`getLocation:`, res);
                },
                fail() {
                  my.alert({ title: '定位失败' });
                },
              })
              my.getSystemInfo({
                fail: (error) => {
                  console.error('getSystemInfo', error);
                },
                success: (getSystemInfo) => {
                  console.log(`getSystemInfo:`, getSystemInfo);
                }
              });

              my.getSystemInfoSync({
                fail: (error) => {
                  console.error('getSystemInfoSync', error);
                },
                success: (getSystemInfoSync) => {
                  console.log(`getSystemInfoSync:`, getSystemInfoSync);
                }
              });
              //获取手机网络状态
              my.getNetworkType({
                fail: (error) => {
                  console.error('getNetworkType', error);
                },
                success: (getLocation) => {
                  console.log(`getNetworkType:`, getLocation);
                }
              });

            }
          });
        },
});
