const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'vip', title: 'VIP会员' },
  { path: 'short-video', title: '中视频' },
  { path: 'tv', title: '电视剧' },
  { path: 'movie', title: '电影' },
  { path: 'variety', title: '综艺' },
  { path: 'anime', title: '动漫' },
  { path: 'kids', title: '少儿' },
  { path: 'nba', title: 'NBA' },
  { path: 'documentary', title: '纪录片' },
  { path: 'short-drama', title: '短剧' },
  { path: 'sports', title: '体育' },
  { path: 'gaming', title: '爱玩' },
  { path: 'games', title: '游戏' },
  { path: 'legacy-games', title: '传奇游戏库' },
  { path: 'tech', title: '科技' },
  { path: 'music', title: '音乐' },
  { path: 'f1', title: 'F1' },
  { path: 'nfl', title: 'NFL' },
  { path: 'wwe', title: 'WWE' },
  { path: 'wnba', title: 'WNBA' },
  { path: 'knowledge', title: '知识' },
  { path: 'school', title: '学堂' },
  { path: 'art', title: '艺术' },
  { path: 'life', title: '生活' },
  { path: 'fashion', title: '时尚' },
  { path: 'parenting', title: '育儿' },
  { path: 'auto', title: '汽车' },
  { path: 'board-games', title: '棋牌游戏库' },
];

const template = (title) => `import PageTemplate from "@/app/_components/PageTemplate";

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return <PageTemplate title="${title}" />;
}
`;

routes.forEach(({ path, title }) => {
  const dir = `app/${path}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(`${dir}/page.tsx`, template(title));
}); 