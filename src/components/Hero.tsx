import { TypingRole } from '@/components/TypingRole';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-here">
        <div className="absolute inset-0  opacity-10"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="space-y-2">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
              권한준
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-text-secondary">Kwon HanJun</span>
          </h1>
          <div className="flex items-center justify-center space-x-1">
            <TypingRole />
          </div>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed">
            웹과 인프라를 아우르는 풀스택 개발자로, 사용자 중심의 웹 애플리케이션을 구축하고 AWS 기반 클라우드 인프라를
            설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/kwondns"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-btn-primary-text rounded-lg font-medium transition-all duration-300 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/40"
            >
              GitHub
            </a>
            <a
              href="mailto:kwondns@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-border text-text rounded-lg font-medium transition-all duration-300 hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/40"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
