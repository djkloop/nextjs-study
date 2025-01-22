export default function PageTemplate({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-[60px] pl-[220px]">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <div className="text-gray-600 dark:text-gray-300">
          {title} 页面内容建设中...
        </div>
      </div>
    </div>
  );
} 