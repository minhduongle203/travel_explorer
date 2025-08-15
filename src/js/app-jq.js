$(document).ready(function () {
    // Hàm gắn sự kiện toggle cho ảnh
    function bindImageToggle() {
        $(".gallery-item img").click(function () {
            $(this).closest(".gallery-item").toggle();  // Toggle cả figure
        });
    }
    bindImageToggle();  // Áp dụng khi trang tải

    // Lọc ảnh theo danh mục với hiệu ứng fade
    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        const filterValue = $(this).data("filter");

        $(".gallery-item").each(function () {
            if (filterValue === "all" || $(this).data("category") === filterValue) {
                $(this).fadeIn(500);
            } else {
                $(this).fadeOut(300);
            }
        });
    });

    // Ẩn/hiện gallery
    $("#toggle-gallery").click(function () {
        $(".gallery").slideToggle(500);
    });

    // AJAX load từ JSON
    $("#load-gallery").click(function () {
        $.ajax({
            url: "../data/gallery.json",  // Đường dẫn tới data
            method: "GET",  //method
            dataType: "json", // Kiểu dữ liệu
            success: function (data) {
                let html = "";
                $.each(data, function (i, item) {
                    // đoạn HTML thay thế
                    html += `<figure class="gallery-item" data-category="${item.category}">
                                <img src="${item.img}" alt="${item.title}">
                                <figcaption>${item.title}</figcaption>
                             </figure>`;
                });
                $(".gallery-grid").html(html);  // Thay thế grid
                bindImageToggle();  // Gắn lại sự kiện toggle
            },
            error: function (textStatus, errorThrown) {
                console.error("Lỗi tải gallery.json:", textStatus, errorThrown);
                alert("Không thể tải gallery.json. Kiểm tra tệp hoặc đường dẫn!");
            }
        });
    });

    // jQuery chaining cho slogan
    $(".slogan")
        .slideUp(800)
        .slideDown(800)
        .fadeOut(500)
        .fadeIn(500);
});