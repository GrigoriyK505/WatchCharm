"use strict";



import './js/slider.js'

document.querySelectorAll("load[src]").forEach(async el => {
  const src = el.getAttribute("src");
  if (src) {
    try {
      const res = await fetch(src);
      const html = await res.text();
      el.outerHTML = html; // заменяем <load> на содержимое файла
    } catch (err) {
      console.error(`Не удалось загрузить ${src}`, err);
    }
  }
});
