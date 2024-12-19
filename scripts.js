let lastScrollY = window.scrollY; // Store the last scroll position

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // إذا كان المستخدم ينزل، إخفاء الهيدر
        header.classList.add('hidden');
    } else {
        // إذا كان المستخدم يصعد، إظهار الهيدر
        header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY; // تحديث آخر قيمة للتمرير
});
