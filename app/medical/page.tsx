import Link from "next/link";

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition">
              ← 홈
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏥</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">의료정보 (Medical Info)</h1>
                <p className="text-sm text-gray-500">질병 예방 및 의료 정보</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/medical/papers"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">📄</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-600 text-white text-xs font-medium">
                156개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">논문 정리</h2>
            <p className="text-gray-600 mb-6">
              질병 예방, 치료, 건강 관리에 관한 최신 의학 연구 논문을 쉽게 정리했습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>심혈관 질환 예방</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>당뇨병 관리</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>암 예방 연구</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-red-600 transition">
              모든 논문 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            href="/medical/recommendations"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">💡</span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-medium">
                67개
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">건강 가이드</h2>
            <p className="text-gray-600 mb-6">
              증상별, 질병별 예방과 관리를 위한 실용적인 의료 정보를 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>건강검진 가이드</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>증상별 대처법</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>만성질환 관리</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:text-orange-600 transition">
              추천 가이드 보기
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">질병 카테고리</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "심혈관", "당뇨", "암", "소화기",
              "호흡기", "신경계", "근골격", "피부"
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-red-600"
              >
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* Warning */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">의료 면책 고지</h4>
              <p className="text-sm text-gray-600">
                본 사이트의 정보는 교육 목적으로 제공되며, 전문적인 의료 조언, 진단 또는 치료를 대체할 수 없습니다.
                건강 문제가 있는 경우 반드시 의료 전문가와 상담하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
