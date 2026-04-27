export const getCtaLink = () => {
  if (typeof window === 'undefined') return 'tel:+917821092963';
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile ? "tel:+917821092963" : "https://wa.me/917821092963";
};
