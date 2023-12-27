type ElementsType = {
  ref: HTMLElement | null;
  action: () => void;
}[];
export const generateObserver = (elements: ElementsType) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = elements.find((el) => el.ref === entry.target);
          if (targetElement) {
            targetElement.action();
          }
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    },
  );

  elements.forEach(({ ref }) => {
    if (ref) {
      observer.observe(ref);
      return () => observer.unobserve(ref);
    }
  });
};
