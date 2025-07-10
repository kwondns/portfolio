import DynamicIcon from '@/components/DynamicIcon';
import BackToTopButtonServer from '@/components/BackToTopButtonServer';
import BackToTopButtonClient from '@/components/BackToTopButtonClient';

export default function Contact() {
  return (
    <div className="text-center bg-secondary p-4">
      <h2 className="text-3xl font-bold mb-8 bg-timeline-marker !bg-clip-text text-transparent inline-block">
        Contact
      </h2>
      <p className="text-info mb-8">새로운 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요.</p>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="mailto:kwon96718@gmail.com" className="flex items-center gap-2 text-text">
          <DynamicIcon name="mail" />
          <span>kwondns@gmail.com</span>
        </a>
        <a href="https://github.com/kwondns" className="flex items-center gap-2 text-text">
          <DynamicIcon name="github" />
          <span>GitHub</span>
        </a>
      </div>
      <BackToTopButtonServer />
      <BackToTopButtonClient />
    </div>
  );
}
