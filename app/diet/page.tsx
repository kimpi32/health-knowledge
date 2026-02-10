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
                <p className="text-sm text-gray-500">영양학 논문과 식단 추천</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Papers Section */}
          <Link
            href="/diet/papers"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📄</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium">
                120개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">논문 정리</h2>
            <p className="text-gray-600 mb-6">
              최신 영양학 연구와 식이 관련 논문을 쉽게 이해할 수 있도록 요약 정리했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>지중해식 식단의 건강 효과</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>간헐적 단식의 과학적 근거</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>프로바이오틱스와 장 건강</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-green-600 transition">
              모든 논문 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Recommendations Section */}
          <Link
            href="/diet/recommendations"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">💡</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium">
                45개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">식단 추천</h2>
            <p className="text-gray-600 mb-6">
              과학적 근거를 기반으로 한 맞춤형 식단과 영양 가이드를 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>체중 감량을 위한 식단</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>근육 증가 고단백 식단</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>혈당 관리 식단 가이드</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition">
              추천 식단 보기
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
