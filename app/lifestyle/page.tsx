import Link from "next/link";

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition">
              ← 홈
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌙</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">생활습관 (Lifestyle)</h1>
                <p className="text-sm text-gray-500">건강한 생활습관 가이드</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/lifestyle/papers"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📄</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-medium">
                78개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">논문 정리</h2>
            <p className="text-gray-600 mb-6">
              수면, 스트레스 관리, 생활 습관이 건강에 미치는 영향을 연구한 논문들을 정리했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>수면의 질과 건강</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>만성 스트레스 관리</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>명상과 마음챙김</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-purple-600 transition">
              모든 논문 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            href="/lifestyle/recommendations"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">💡</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-medium">
                52개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">생활습관 가이드</h2>
            <p className="text-gray-600 mb-6">
              과학적 근거를 바탕으로 한 건강한 생활습관 형성 가이드를 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>수면 개선 루틴</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>스트레스 해소 방법</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>생산성 향상 습관</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-pink-600 transition">
              추천 가이드 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">주요 주제</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "수면", "스트레스", "명상", "휴식",
              "일상 루틴", "시간 관리", "디지털 디톡스", "사회관계"
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                {topic}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
