document.addEventListener('DOMContentLoaded', function () {
    var swipers = document.querySelectorAll('.slider');

    swipers.forEach(function (slider) {
        var swiperContent = slider.querySelector('.slider-content');
        var slides = slider.querySelectorAll('.slider-slide');
        var currentIndex = 0;
        var totalSlides = slides.length;
        var startX = 0;
        var endX = 0;

        slider.addEventListener('mousedown', function (event) {
            startX = event.clientX;
        });

        slider.addEventListener('mouseup', function (event) {
            endX = event.clientX;
            handleSwipe();
        });

        slider.addEventListener('touchstart', function (event) {
            startX = event.touches[0].clientX;
        });

        slider.addEventListener('touchend', function (event) {
            endX = event.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            var threshold = 50; // Порог для определения жеста

            if (startX - endX > threshold) {
                // Свайп влево
                navigate(1);
            } else if (endX - startX > threshold) {
                // Свайп вправо
                navigate(-1);
            }
        }

        function navigate(direction) {
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            var translateValue = -currentIndex * 100 + '%';
            swiperContent.style.transform = 'translateX(' + translateValue + ')';
        }

        slider.querySelector('.slider-button-next').addEventListener('click', function () {
            navigate(1);
        });

        slider.querySelector('.slider-button-prev').addEventListener('click', function () {
            navigate(-1);
        });
    });
});
