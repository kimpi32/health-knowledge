import Link from "next/link";

export default function Home() {
  const categories = [
    {
      id: "diet",
      title: "식이",
      subtitle: "Nutrition",
      description: "맛있게 먹으면서 건강해지는 법",
      icon: "🥗",
      color: "from-green-500 to-emerald-600",
      stats: { articles: 120, guides: 45 }
    },
    {
      id: "exercise",
      title: "운동",
      subtitle: "Exercise",
      description: "5분 투자로 바뀌는 내 몸",
      icon: "💪",
      color: "from-blue-500 to-cyan-600",
      stats: { articles: 95, guides: 38 }
    },
    {
      id: "lifestyle",
      title: "생활습관",
      subtitle: "Lifestyle",
      description: "하루를 바꾸는 작은 습관들",
      icon: "🌙",
      color: "from-purple-500 to-pink-600",
      stats: { articles: 78, guides: 52 }
    },
    {
      id: "medical",
      title: "의료정보",
      subtitle: "Medical Info",
      description: "알아두면 쓸모있는 건강 상식",
      icon: "🏥",
      color: "from-red-500 to-orange-600",
      stats: { articles: 156, guides: 67 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📰</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Health Magazine</h1>
                <p className="text-sm text-gray-500">AI가 전하는 쉬운 건강 이야기</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">소개</Link>
              <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition">전체 기사</Link>
              <Link href="/guides" className="text-gray-600 hover:text-gray-900 transition">건강 가이드</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          AI가 전하는<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            쉬운 건강 이야기
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          최신 의학 연구를 AI가 분석하고 이해하기 쉬운 기사로 재구성했습니다.
          매일 업데이트되는 건강 매거진을 경험해보세요.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>이번 주 신규 기사 32개</span>
          </div>
          <span>•</span>
          <div>매일 업데이트</div>
          <span>•</span>
          <div>AI 재해석</div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl mb-2">{category.icon}</div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-medium`}>
                    {category.stats.articles}개 기사
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{category.subtitle}</p>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span>📰</span>
                    <span>{category.stats.articles}개 기사</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📋</span>
                    <span>{category.stats.guides}개 가이드</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition">
                  자세히 보기
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>Health Magazine © 2025 - AI가 전하는 쉬운 건강 이야기 📰</p>
            <p className="mt-2">Made by <a href="https://github.com/kimpi32" className="text-indigo-600 hover:underline">@kimpi32</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
