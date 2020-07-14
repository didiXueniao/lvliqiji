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
    interval: 5000,
    duration: 500,
  },
  onLoad() {},
  onItemClick(ev) {
    if(true) {
      console.log(ev.detail);
      my.alert({
        title: '亲',
        content: `${ev.detail}`,
      })
    } else {

    }
    my.confirm({
      
    });
  }
});
