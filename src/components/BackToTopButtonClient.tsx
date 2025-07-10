'use client';

export default function BackToTopButtonClient() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-info cursor-pointer mt-8 mb-4 text-lg"
    >
      Back To Top
    </button>
  );
}
