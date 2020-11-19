import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Make great friends", "Dream in Code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
