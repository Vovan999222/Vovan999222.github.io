(function() {
    const threshold = 160; 
    let isCaught = false;

    function triggerLockdown() {
        if (isCaught) return;
        isCaught = true;
        document.body.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #010409; color: #39d353; font-family: ui-monospace, SFMono-Regular, monospace; margin: 0; overflow: hidden; text-align: center;">
                <div style="width: 350px; height: 350px; background-image: url('photo.jpg'); background-size: cover; background-position: center; margin-bottom: 30px; border-radius: 12px; box-shadow: 0 0 30px rgba(255, 95, 86, 0.4);"></div>
                <h1 style="font-size: 3rem; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 15px rgba(57, 211, 83, 0.5); margin-bottom: 10px;">Вас обнаружили</h1>
                <p style="font-size: 1.2rem; color: #8b949e;">Соединение разорвано. Доступ к исходному коду закрыт.</p>
            </div>
        `;
        document.body.style.margin = "0";
        document.body.style.padding = "0";
    }
    window.addEventListener('resize', () => {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;
            
        if (widthDiff > threshold || heightDiff > threshold) {
            triggerLockdown();
        }
    });
    setInterval(() => {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;
            
        if (widthDiff > threshold || heightDiff > threshold) {
            triggerLockdown();
        }
    }, 500);
})();
