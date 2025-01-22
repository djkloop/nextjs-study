"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const sideNavItems = [
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

  const bannerData = {
    image: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2899260455.webp",
    title: "繁花",
    subtitle: "马伊琍胡歌演绎旧上海",
    description: "王家卫监制 沪上繁华"
  };

  const carouselShows = [
    {
      id: 1,
      image: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2899260455.webp",
      title: "非常欢迎队",
      subtitle: "王鹤棣 田曦薇 英雄成长",
      description: "点映看结局！汗七安抗二贼血溅三尺"
    },
    {
      id: 2,
      image: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2898057074.webp",
      title: "大秦打更人",
      subtitle: "王鹤棣热血追凶",
      description: "大秦世界的热血传奇"
    },
    {
      id: 3,
      image: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2896669641.webp",
      title: "驻站",
      subtitle: "郭京飞陈数演绎基层故事",
      description: "温暖人心的基层故事"
    },
    {
      id: 4,
      image: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2897690068.webp",
      title: "学习时刻",
      subtitle: "励志成长故事",
      description: "青春励志正能量"
    },
    {
      id: 5,
      image: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2895465725.webp",
      title: "斗笑社 第3季",
      subtitle: "爆笑脱口秀",
      description: "年轻人的快乐源泉"
    }
  ];

  const shows = [
    {
      id: 1,
      image: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      title: "沙丘2",
      subtitle: "提莫西·查拉梅 赞达亚",
      description: "科幻史诗传奇重启",
      bannerImage: "https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    },
    {
      id: 2,
      image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      title: "奥本海默",
      subtitle: "基里安·墨菲 小罗伯特·唐尼",
      description: "原子弹之父的传奇人生",
      bannerImage: "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    },
    {
      id: 3,
      image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      title: "穷途",
      subtitle: "杰森·斯坦森 杰瑞米·艾恩斯",
      description: "硬汉特工的复仇之路",
      bannerImage: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    },
    {
      id: 4,
      image: "https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
      title: "金刚川",
      subtitle: "张译 吴京 李九霄",
      description: "抗美援朝战争史诗",
      bannerImage: "https://image.tmdb.org/t/p/original/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
    },
    {
      id: 5,
      image: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      title: "流浪地球2",
      subtitle: "吴京 刘德华",
      description: "中国科幻史诗续作",
      bannerImage: "https://image.tmdb.org/t/p/original/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    }
  ];

  const recommendedShows = [
    {
      id: 1,
      image: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      title: "沙丘2",
      description: "科幻史诗传奇重启",
      tag: "IMAX"
    },
    {
      id: 2,
      image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      title: "奥本海默",
      description: "原子弹之父的传奇人生",
      tag: "热映"
    },
    {
      id: 3,
      image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      title: "穷途",
      description: "硬汉特工的复仇之路",
      tag: "独播"
    },
    {
      id: 4,
      image: "https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
      title: "金刚川",
      description: "抗美援朝战争史诗",
      tag: "经典"
    },
    {
      id: 5,
      image: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      title: "流浪地球2",
      description: "中国科幻史诗续作",
      tag: "巨制"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // 处理下一个
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % shows.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 处理上一个
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + shows.length) % shows.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 获取当前显示的内容
  const getCurrentShow = () => shows[currentIndex];

  // 计算轮播项的位置
  const getVisibleShows = () => {
    return [...shows, ...shows, ...shows];
  };

  // 将底部链接分组
  const footerLinks = {
    privacy: [
      { label: "腾讯视频隐私保护指引", href: "/privacy" },
      { label: "腾讯视频用户服务协议", href: "/terms" },
      { label: "腾讯视频第三方信息共享清单", href: "/sharing" },
      { label: "腾讯视频已收集个人信息清单", href: "/info-collection" },
      { label: "腾讯儿童隐私保护声明", href: "/kids-privacy" },
      { label: "腾讯视频系列会员服务协议", href: "/vip-terms" },
    ],
    about: [
      { label: "关于腾讯", href: "/about" },
      { label: "About Tencent", href: "/about-en" },
      { label: "服务条款", href: "/service-terms" },
      { label: "广告设置", href: "/ad-settings" },
      { label: "腾讯招聘", href: "/jobs" },
      { label: "客服中心", href: "/support" },
    ],
    copyright: [
      { label: "腾讯公司 版权所有", href: "/copyright" },
    ]
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      {/* Banner区域 - 使用44vw作为最大高度 */}
      <div className="fixed inset-0 z-0 h-[44vw]">
        <Image
          src={getCurrentShow().bannerImage}
          alt={getCurrentShow().title}
          fill
          className="object-cover"
          priority
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* 主内容区域 */}
      <main className="relative z-10">
        {/* Banner内容容器 */}
        <div className="relative h-[44vw] pl-[220px]"> {/* 从200px改为220px */}
          {/* Banner文字内容 - 左下角 */}
          <div className="absolute bottom-20 left-[252px]"> {/* 从232px改为252px (220px + 32px padding) */}
            <h1 className="text-white text-3xl font-bold mb-2">{getCurrentShow().title}</h1>
            <p className="text-gray-300 mb-2 text-sm">{getCurrentShow().subtitle}</p>
            <p className="text-gray-300 mb-4 text-sm">{getCurrentShow().description}</p>
            <div className="flex items-center gap-4">
              <Button className="bg-blue-600/90 hover:bg-blue-600 px-6 py-1.5 text-sm">
                播放正片
              </Button>
              <Button variant="ghost" className="text-white/90 hover:text-white p-1.5">
                <span className="text-xl">🔇</span>
              </Button>
            </div>
          </div>

          {/* 轮播缩略图 - 右下角 */}
          <div className="absolute bottom-4 right-8">
            <div className="flex items-center gap-3">
              <button onClick={handlePrev} className="w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-white/90 hover:text-white">
                <span>←</span>
              </button>
              <div className="flex gap-3">
                {getVisibleShows().slice(0, 5).map((show, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div
                      key={`${show.id}-${index}`}
                      onClick={() => setCurrentIndex(index)}
                      className="cursor-pointer w-[120px]"
                    >
                      <div className="relative">
                        <div className="aspect-[16/9] rounded-sm overflow-hidden">
                          <Image
                            src={show.image}
                            alt={show.title}
                            fill
                            className={`object-cover transition-opacity duration-300
                              ${isActive ? 'opacity-100' : 'opacity-70'}`}
                          />
                        </div>
                      </div>
                      
                      <div className="mt-2 text-center">
                        <p className={`text-white text-xs truncate
                          ${isActive ? 'text-blue-400' : ''}`}
                        >
                          {show.title}
                        </p>
                        <p className="text-gray-400/80 text-[10px] truncate mt-0.5">
                          {show.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button onClick={handleNext} className="w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-white/90 hover:text-white">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 推荐内容区域 */}
        <div className="relative pl-[220px] px-8 py-4"> {/* 从200px改为220px */}
          <div className="grid grid-cols-5 gap-4">
            {recommendedShows.map((show) => (
              <div key={show.id} className="group cursor-pointer">
                <div className="relative mb-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={show.image}
                      alt={show.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                    {show.tag}
                  </div>
                </div>
                <h3 className="text-white text-xs font-medium truncate">{show.title}</h3>
                <p className="text-gray-400 text-xs mt-0.5 truncate">{show.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 左侧导航栏 - 移除 Logo 部分 */}
      <nav className="fixed left-0 top-0 h-screen w-[220px] z-20 border-none pt-[60px]"> {/* 添加顶部内边距 */}
        {/* 背景遮罩 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(-90deg, rgba(20, 20, 20, 0) 1%, rgba(20, 20, 20, .6) 99%)'
        }} />

        {/* 导航内容 */}
        <div className="relative h-full overflow-y-auto custom-scrollbar direction-rtl">
          <div className="direction-ltr">
            {/* 主导航项 */}
            <div className="space-y-1 pb-6">
              {sideNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-6 py-3 text-gray-400/60 hover:text-white
                    transition-colors duration-300"
                >
                  <span className="mr-3 opacity-60 text-base">
                    {item.icon}
                  </span>
                  <span className="text-sm">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* 底部链接 - 恢复分隔线 */}
            <div className="relative">
              {/* 主分隔线 */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-white/10" />
              
              <div className="px-6 py-6">
                {/* 隐私协议组 */}
                <div className="space-y-2 mb-4">
                  {footerLinks.privacy.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-xs text-gray-500 hover:text-gray-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* 关于组 - 流式布局 + 竖线分隔 */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap">
                    {footerLinks.about.map((link, index) => (
                      <div key={link.label} className="flex items-center">
                        <Link
                          href={link.href}
                          className="text-xs text-gray-500 hover:text-gray-400 whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                        {index % 2 === 0 && index !== footerLinks.about.length - 1 && (
                          <span className="mx-2 text-gray-500/50">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 版权信息 */}
                <div className="pt-4 border-t border-white/5">
                  {footerLinks.copyright.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-xs text-gray-500/80 hover:text-gray-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 顶部导航栏 - 提高层级 */}
      <header className="fixed top-0 right-0 left-0 flex items-center p-4 z-50
        bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[1px]">
        {/* Logo */}
        <div className="w-[220px] flex items-center px-6">
          <div className="text-blue-400 text-2xl mr-2">▶</div>
          <div className="text-white text-lg font-bold">腾讯视频</div>
        </div>

        {/* 搜索框和其他导航 */}
        <div className="flex-1 flex justify-between items-center">
          <div className="flex-1 max-w-xl">
            <input
              type="search"
              placeholder="大秦打更人"
              className="w-full bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
          <div className="flex items-center gap-4 mr-4">
            <Link href="#" className="text-gray-300 hover:text-white text-sm">会员专区</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">游戏</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">快捷访问</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">历史</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">创作</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">客户端</Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-6">登录</Button>
          </div>
        </div>
      </header>
    </div>
  );
}
