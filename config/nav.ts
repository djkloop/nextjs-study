export const sideNavItems = [
  { icon: "⭐", label: "首页", href: "/" },
  { icon: "👑", label: "VIP会员", href: "/vip" },
  { icon: "📱", label: "中视频", href: "/short-video" },
  { icon: "📺", label: "电视剧", href: "/tv" },
  { icon: "🎬", label: "电影", href: "/movie" },
  { icon: "🎪", label: "综艺", href: "/variety" },
  { icon: "🎨", label: "动漫", href: "/anime" },
  { icon: "👶", label: "少儿", href: "/kids" },
  { icon: "🏀", label: "NBA", href: "/nba" },
  { icon: "🎥", label: "纪录片", href: "/documentary" },
  { icon: "📹", label: "短剧", href: "/short-drama" },
  { icon: "⚽", label: "体育", href: "/sports" },
  { icon: "🎮", label: "爱玩", href: "/gaming" },
  { icon: "🎲", label: "游戏", href: "/games" },
  { icon: "🏆", label: "传奇游戏库", href: "/legacy-games" },
  { icon: "🔧", label: "科技", href: "/tech" },
  { icon: "🎵", label: "音乐", href: "/music" },
  { icon: "🏎", label: "F1", href: "/f1" },
  { icon: "🏈", label: "NFL", href: "/nfl" },
  { icon: "🤼", label: "WWE", href: "/wwe" },
  { icon: "🏀", label: "WNBA", href: "/wnba" },
  { icon: "📚", label: "知识", href: "/knowledge" },
  { icon: "🎓", label: "学堂", href: "/school" },
  { icon: "🎨", label: "艺术", href: "/art" },
  { icon: "🌟", label: "生活", href: "/life" },
  { icon: "👔", label: "时尚", href: "/fashion" },
  { icon: "👶", label: "育儿", href: "/parenting" },
  { icon: "🚗", label: "汽车", href: "/auto" },
  { icon: "🎲", label: "棋牌游戏库", href: "/board-games" },
];

// 分类导航
export const categoryNav = {
  tv: [
    { label: "最新", href: "/tv" },
    { label: "国产剧", href: "/tv/domestic" },
    { label: "美剧", href: "/tv/us" },
    { label: "韩剧", href: "/tv/korea" },
    { label: "日剧", href: "/tv/japan" },
    { label: "泰剧", href: "/tv/thailand" },
  ],
  movie: [
    { label: "最新", href: "/movie" },
    { label: "华语电影", href: "/movie/chinese" },
    { label: "欧美电影", href: "/movie/western" },
    { label: "日韩电影", href: "/movie/asia" },
    { label: "其他地区", href: "/movie/other" },
  ],
  // ... 其他分类
};

// 页脚链接
export const footerLinks = {
  privacy: [
    { 
      label: "腾讯视频隐私保护指引",
      href: "/privacy-guide"
    },
    { 
      label: "腾讯视频用户服务协议",
      href: "/user-agreement"
    },
    { 
      label: "腾讯视频第三方信息共享清单",
      href: "/third-party-sharing"
    },
    { 
      label: "腾讯视频已收集个人信息清单",
      href: "/personal-info-list"
    },
    { 
      label: "腾讯儿童隐私保护声明",
      href: "/children-privacy"
    },
    { 
      label: "腾讯视频系列会员服务协议",
      href: "/vip-agreement"
    }
  ],
  about: [
    { label: "关于腾讯", href: "/about" },
    { label: "About Tencent", href: "/about-en" },
    { label: "服务条款", href: "/terms" },
    { label: "广告设置", href: "/ad-settings" },
    { label: "腾讯招聘", href: "/jobs" },
    { label: "客服中心", href: "/help-center" }
  ],
  help: [] // 移除 help 部分，因为相关链接已经移到 about 中
};

// 顶部导航
export const headerNav = [
  { label: "会员专区", href: "/vip" },
  { label: "游戏", href: "/games" },
  { label: "快捷访问", href: "/quick-access" },
  { label: "历史", href: "/history" },
  { label: "创作", href: "/create" },
  { label: "客户端", href: "/client" },
];
