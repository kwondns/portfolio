'use client';

export default function BackToTopButtonClient() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-info cursor-pointer mt-4 sm:mt-8 sm:mb-4 text-lg"
    >
      Back To Top
    </button>
  );
}
