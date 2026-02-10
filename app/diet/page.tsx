import Link from "next/link";

export default function DietPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition">
              ← 홈
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🥗</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">식이 (Nutrition)</h1>
                <p className="text-sm text-gray-500">맛있게 먹으면서 건강해지는 법</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Articles Section */}
          <Link
            href="/diet/articles"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📰</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium">
                120개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">최신 기사</h2>
            <p className="text-gray-600 mb-6">
              AI가 최신 영양학 연구를 분석해 이해하기 쉬운 건강 기사로 재구성했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>지중해식 다이어트, 정말 효과 있을까?</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>간헐적 단식 vs 일반 다이어트</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>유산균, 어떻게 먹어야 효과적일까</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-green-600 transition">
              모든 기사 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Guides Section */}
          <Link
            href="/diet/guides"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📋</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium">
                45개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">건강 가이드</h2>
            <p className="text-gray-600 mb-6">
              전문가가 알려주는 실천 가능한 식습관 개선 가이드입니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>무리하지 않는 체중 감량 5단계</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>근육 늘리는 단백질 섭취 가이드</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>혈당 조절을 위한 식사 순서</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition">
              모든 가이드 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Popular Topics */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">인기 주제</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "탄수화물", "단백질", "지방", "비타민",
              "미네랄", "항산화제", "프로바이오틱스", "식이섬유"
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-green-600"
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
