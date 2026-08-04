// رسالة ترحيب
console.log("مرحبًا بك في موقع مغسلة الانتريهات والموكيت الكامل");

// تكبير الصور عند الضغط
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", function () {
    window.open(this.src, "_blank");
  });
});

// تأثير ظهور الأقسام أثناء التمرير
const sections = document.querySelectorAll("section");

function showSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s";
});

window.addEventListener("scroll", showSections);
showSections();
