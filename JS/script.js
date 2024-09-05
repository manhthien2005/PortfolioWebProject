document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    function changeActiveLink() {
        // Xóa lớp active từ tất cả các liên kết
        navLinks.forEach(link => link.classList.remove('active'));

        // Kiểm tra từng phần tử section
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Vị trí cuộn giữa cửa sổ

            // Kiểm tra xem người dùng đã cuộn đến phần tử này chưa
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                console.log(`Currently in section: ${section.id}`);
                navLinks[index].classList.add('active');
            } else {
                console.log('Base');
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); // Kiểm tra khi trang được tải
});
