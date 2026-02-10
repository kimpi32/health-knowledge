import Link from "next/link";

export default function ExercisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition">
              ← 홈
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">💪</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">운동 (Exercise)</h1>
                <p className="text-sm text-gray-500">운동 과학과 루틴 추천</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/exercise/papers"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📄</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs font-medium">
                95개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">논문 정리</h2>
            <p className="text-gray-600 mb-6">
              운동 생리학과 스포츠 과학 연구를 분석하여 효과적인 운동 방법을 제시합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>고강도 인터벌 트레이닝 (HIIT)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>근력 운동의 건강 효과</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>유산소 운동과 심혈관 건강</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition">
              모든 논문 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            href="/exercise/recommendations"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">💡</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium">
                38개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">운동 루틴</h2>
            <p className="text-gray-600 mb-6">
              목표와 체력 수준에 맞는 맞춤형 운동 프로그램을 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>초보자 전신 운동 루틴</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>근육 증가 웨이트 프로그램</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>홈트레이닝 가이드</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-cyan-600 transition">
              추천 루틴 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">운동 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "유산소", "근력", "유연성", "HIIT",
              "요가", "필라테스", "크로스핏", "달리기"
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-blue-600"
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
