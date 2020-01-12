import { navHeight } from '.';

export function scrollToElement(selector: string) {
  const element = document.querySelector(selector);

  if (element) {
    const { y } = element.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    const top = scrollPosition + y - navHeight;

    window.scrollTo({
      behavior: 'smooth',
      top,
    });
  }
}
