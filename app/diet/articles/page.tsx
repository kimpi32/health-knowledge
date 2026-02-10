import Link from "next/link";

export default function DietArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "지중해식 다이어트, 정말 효과 있을까?",
      summary: "최신 연구 결과, 지중해식 식단이 심혈관 질환 위험을 30% 감소시키는 것으로 나타났습니다.",
      category: "다이어트",
      date: "2025-02-08",
      readTime: "5분",
      image: "🫒"
    },
    {
      id: 2,
      title: "간헐적 단식 vs 일반 다이어트, 뭐가 더 좋을까",
      summary: "간헐적 단식과 칼로리 제한 다이어트의 효과를 비교한 12주 연구 결과를 소개합니다.",
      category: "다이어트",
      date: "2025-02-07",
      readTime: "7분",
      image: "⏰"
    },
    {
      id: 3,
      title: "유산균, 어떻게 먹어야 효과적일까",
      summary: "프로바이오틱스의 효과를 최대화하는 섭취 방법과 타이밍을 알려드립니다.",
      category: "영양제",
      date: "2025-02-06",
      readTime: "4분",
      image: "🦠"
    },
    {
      id: 4,
      title: "단백질, 하루에 얼마나 먹어야 할까?",
      summary: "나이, 활동량별 적정 단백질 섭취량과 효과적인 단백질 공급원을 소개합니다.",
      category: "영양소",
      date: "2025-02-05",
      readTime: "6분",
      image: "🥩"
    },
    {
      id: 5,
      title: "밤에 먹으면 살찐다? 야식의 진실",
      summary: "야식이 체중에 미치는 영향에 대한 최신 연구 결과를 분석했습니다.",
      category: "식습관",
      date: "2025-02-04",
      readTime: "5분",
      image: "🌙"
    },
    {
      id: 6,
      title: "물, 하루 8잔 꼭 마셔야 할까?",
      summary: "적정 수분 섭취량에 대한 오해와 진실을 파헤칩니다.",
      category: "수분",
      date: "2025-02-03",
      readTime: "4분",
      image: "💧"
    },
    {
      id: 7,
      title: "비타민 D, 햇빛만으로 충분할까?",
      summary: "한국인의 90%가 부족한 비타민 D, 효과적인 보충 방법을 알려드립니다.",
      category: "영양제",
      date: "2025-02-02",
      readTime: "5분",
      image: "☀️"
    },
    {
      id: 8,
      title: "탄수화물, 적으로만 보지 마세요",
      summary: "통곡물과 정제 탄수화물의 차이, 그리고 건강한 탄수화물 섭취법.",
      category: "영양소",
      date: "2025-02-01",
      readTime: "6분",
      image: "🌾"
    },
    {
      id: 9,
      title: "오메가3, 생선 vs 영양제 뭐가 좋을까?",
      summary: "EPA와 DHA의 차이점과 효과적인 오메가3 섭취 전략.",
      category: "영양제",
      date: "2025-01-31",
      readTime: "5분",
      image: "🐟"
    },
    {
      id: 10,
      title: "식이섬유, 왜 먹어야 할까?",
      summary: "장 건강부터 혈당 조절까지, 식이섬유의 놀라운 효과.",
      category: "영양소",
      date: "2025-01-30",
      readTime: "4분",
      image: "🥦"
    },
    {
      id: 11,
      title: "케토 다이어트, 당신에게 맞을까?",
      summary: "저탄수화물 고지방 식단의 장단점과 주의사항.",
      category: "다이어트",
      date: "2025-01-29",
      readTime: "7분",
      image: "🥑"
    },
    {
      id: 12,
      title: "카페인, 얼마나 마셔도 괜찮을까?",
      summary: "커피와 차의 카페인 함량, 적정 섭취량과 부작용.",
      category: "식습관",
      date: "2025-01-28",
      readTime: "5분",
      image: "☕"
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
              <span className="text-3xl">📰</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">식이 - 최신 기사</h1>
                <p className="text-sm text-gray-500">AI가 재해석한 영양학 연구</p>
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
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>총 120개 기사</span>
          </div>
          <span>•</span>
          <div>이번 주 신규 12개</div>
          <span>•</span>
          <div>매일 업데이트</div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/diet/articles/${article.id}`}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image/Icon */}
              <div className="text-6xl mb-4 text-center">{article.image}</div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {article.summary}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <span>⏱️</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="mt-4 flex items-center text-sm font-medium text-green-600 group-hover:translate-x-1 transition-transform">
                읽어보기
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transition-all">
            더 많은 기사 보기
          </button>
        </div>
      </main>
    </div>
  );
}
