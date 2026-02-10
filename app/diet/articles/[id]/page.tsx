import Link from "next/link";

// 정적 생성을 위한 ID 목록
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  // 실제로는 데이터베이스에서 가져올 내용
  const article = {
    id: params.id,
    title: "지중해식 다이어트, 정말 효과 있을까?",
    category: "다이어트",
    date: "2025-02-08",
    readTime: "5분",
    author: "Health Magazine AI",
    image: "🫒",
    summary: "최신 연구 결과, 지중해식 식단이 심혈관 질환 위험을 30% 감소시키는 것으로 나타났습니다.",
    content: `
## 지중해식 다이어트란?

지중해식 다이어트는 그리스, 이탈리아 등 지중해 연안 국가들의 전통적인 식습관을 바탕으로 한 식단입니다.
올리브 오일, 신선한 채소와 과일, 통곡물, 생선, 견과류를 중심으로 하며,
적당량의 유제품과 가금류를 포함합니다.

### 🔬 최신 연구 결과

2024년 발표된 대규모 연구(참여자 25,000명, 10년 추적)에서 놀라운 결과가 나왔습니다:

- **심혈관 질환 위험 30% 감소**
- **제2형 당뇨병 발병률 20% 감소**
- **전반적인 사망률 15% 감소**

### 💡 핵심 원리

#### 1. 올리브 오일을 주 지방 공급원으로
불포화지방산이 풍부한 올리브 오일은 HDL(좋은 콜레스테롤)을 높이고
LDL(나쁜 콜레스테롤)을 낮춥니다.

#### 2. 식물성 식품 위주
채소, 과일, 통곡물, 콩류 등 식물성 식품에서
필요한 영양소와 식이섬유를 얻습니다.

#### 3. 생선과 해산물 주 2-3회
오메가-3 지방산이 풍부한 생선은
뇌 건강과 심혈관 건강에 도움을 줍니다.

#### 4. 적당량의 유제품
요구르트와 치즈 등 발효 유제품은
장 건강에 좋은 프로바이오틱스를 제공합니다.

### 📝 실천 가이드

**아침**
- 통곡물 빵 + 올리브 오일
- 그릭 요거트 + 견과류
- 신선한 과일

**점심/저녁**
- 샐러드 (올리브 오일 드레싱)
- 구운 생선 또는 닭가슴살
- 통곡물 (현미, 퀴노아)
- 구운 채소

**간식**
- 견과류 한 줌
- 신선한 과일
- 후무스 + 채소 스틱

### ⚠️ 주의사항

- 올리브 오일도 칼로리가 높으므로 적당량 섭취
- 레드와인은 선택사항 (과음 금지)
- 가공식품과 붉은 고기는 최소화

### 🎯 결론

지중해식 다이어트는 단순한 체중 감량 방법이 아니라
건강한 생활 방식입니다.
급격한 변화보다는 점진적으로 식습관을 개선하는 것이 중요합니다.

---

**참고 자료**
- New England Journal of Medicine, 2024
- Mediterranean Diet and Cardiovascular Health
- 유럽 영양학회 가이드라인
    `
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/diet/articles" className="text-gray-500 hover:text-gray-900 transition text-sm">
            ← 기사 목록으로
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <span>✍️</span>
            <span>{article.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>{article.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Hero Image/Icon */}
        <div className="text-8xl text-center mb-12">
          {article.image}
        </div>

        {/* Summary */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
          <p className="text-lg text-gray-700 font-medium">
            {article.summary}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('##')) {
                  return <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
                } else if (paragraph.startsWith('###')) {
                  return <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace('###', '').trim()}</h3>;
                } else if (paragraph.startsWith('####')) {
                  return <h4 key={idx} className="text-xl font-bold text-gray-900 mt-4 mb-2">{paragraph.replace('####', '').trim()}</h4>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={idx} className="ml-6 text-gray-700">{paragraph.replace('- ', '').trim()}</li>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={idx} className="font-bold text-gray-900">{paragraph.replace(/\*\*/g, '')}</p>;
                } else if (paragraph.trim().startsWith('---')) {
                  return <hr key={idx} className="my-8 border-gray-200" />;
                } else if (paragraph.trim()) {
                  return <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">관련 기사</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 2, title: "간헐적 단식 vs 일반 다이어트", icon: "⏰" },
              { id: 3, title: "유산균, 어떻게 먹어야 효과적일까", icon: "🦠" },
              { id: 4, title: "단백질, 하루에 얼마나 먹어야 할까?", icon: "🥩" }
            ].map(related => (
              <Link
                key={related.id}
                href={`/diet/articles/${related.id}`}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{related.icon}</div>
                <h4 className="font-bold text-gray-900 hover:text-green-600 transition">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
