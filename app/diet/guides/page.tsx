import Link from "next/link";

export default function DietGuidesPage() {
  const guides = [
    {
      id: 1,
      title: "무리하지 않는 체중 감량 5단계",
      description: "건강하게 살을 빼는 실전 가이드",
      steps: 5,
      difficulty: "쉬움",
      duration: "4주",
      icon: "⚖️"
    },
    {
      id: 2,
      title: "근육 늘리는 단백질 섭취 가이드",
      description: "운동 효과를 높이는 단백질 섭취법",
      steps: 4,
      difficulty: "보통",
      duration: "지속",
      icon: "💪"
    },
    {
      id: 3,
      title: "혈당 조절을 위한 식사 순서",
      description: "같은 음식도 순서만 바꾸면 혈당 관리",
      steps: 3,
      difficulty: "쉬움",
      duration: "즉시",
      icon: "🍽️"
    },
    {
      id: 4,
      title: "장 건강을 위한 식이섬유 가이드",
      description: "소화기 건강을 개선하는 식습관",
      steps: 6,
      difficulty: "보통",
      duration: "2주",
      icon: "🥬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/diet" className="text-gray-500 hover:text-gray-900 transition">
              ← 식이 카테고리
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📋</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">식이 - 건강 가이드</h1>
                <p className="text-sm text-gray-500">전문가가 알려주는 실천 가능한 식습관</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="mb-8 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>총 45개 가이드</span>
          </div>
          <span>•</span>
          <div>단계별 실천 가이드</div>
          <span>•</span>
          <div>체크리스트 포함</div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/diet/guides/${guide.id}`}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{guide.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {guide.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{guide.steps}</div>
                  <div className="text-xs text-gray-600">단계</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-semibold text-blue-600">{guide.difficulty}</div>
                  <div className="text-xs text-gray-600">난이도</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-semibold text-purple-600">{guide.duration}</div>
                  <div className="text-xs text-gray-600">기간</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                가이드 시작하기
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
