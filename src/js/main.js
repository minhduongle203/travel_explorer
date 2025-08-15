// index.html

// Slide Show
document.addEventListener("DOMContentLoaded", function () {
    // Chỉ chạy Slide Show nếu trang là index.html (tiêu đề chứa "Du Lịch Việt Nam")
    if (document.querySelector('title').textContent.includes('Du Lịch Việt Nam')) {

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        // if (slides.length === 0) {
        //     console.warn("Không tìm thấy phần tử có class 'slide'. Vui lòng thêm vào HTML.");
        //     return;
        // };

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length; //Set ảnh vị trí n khi hết quay lại từ đầu
            slides[currentSlide].classList.add('active');
        };

        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        };

        // Liên kết nút điều hướng
        document.querySelector('button:nth-of-type(1)').addEventListener('click', () => changeSlide(-1)); // Nút ❮
        document.querySelector('button:nth-of-type(2)').addEventListener('click', () => changeSlide(1)); // Nút ❯

        window.changeSlide = changeSlide;
        // Tự động chuyển sau 3 giây
        setInterval(() => changeSlide(1), 3000);
    }
});


function searchSubmit() {
    console.log("Click submitted");
    alert("Click Submit button");
};

// contact.html
// Validate form
document.addEventListener("submit", (e) => {
    if (e.target.classList.contains("contact-form")) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = Number(document.getElementById("age").value.trim());
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        const country = document.getElementById("country").value;
        const message = document.getElementById("message").value;

        const validateEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        if (!name) {
            alert("Vui lòng nhập họ và tên!");
            return;
        }
        if (!validateEmail(email)) {
            alert("Email không hợp lệ!");
            return;
        }
        if (isNaN(age) || age < 16) {
            alert("Tuoi không hợp lệ!");
            return;
        }
        alert("Gửi thành công!");
        const data = "Ten: " + name + " Email: " + email +
            " Tuoi: " + age + " Gioi tinh: " + gender +
            " Country: " + country + " Message: " + message;
        console.log(data);
        sessionStorage.setItem('data', JSON.stringify(data));
    };
});

