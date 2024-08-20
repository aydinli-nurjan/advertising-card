document.addEventListener("DOMContentLoaded", function() {
    const adCard = document.getElementById("ad-card");
    const timerDiv = document.getElementById("timer");
    const closeBtn = document.getElementById("close-btn");
    let countdown = 10;

    // Показать рекламную карту через 5 секунд
    setTimeout(function() {
        adCard.classList.remove("hidden");
        startCountdown();
    }, 2000);

    function startCountdown() {
        const countdownInterval = setInterval(function() {
            timerDiv.textContent = countdown;
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                timerDiv.classList.add("hidden");
                closeBtn.classList.remove("hidden");
            }
        }, 1000);
    }

    // Закрытие рекламной карты
    closeBtn.addEventListener("click", function() {
        adCard.classList.add("hidden");
    });
});