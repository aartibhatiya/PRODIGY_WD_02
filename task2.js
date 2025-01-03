let timer;
        let elapsedTime = 0;
        let running = false;

        const timeDisplay = document.querySelector('.time');
        const lapsContainer = document.querySelector('.laps');

        function formatTime(milliseconds) {
            const totalSeconds = Math.floor(milliseconds / 1000);
            const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
            const seconds = (totalSeconds % 60).toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function updateTime() {
            elapsedTime += 100;
            timeDisplay.textContent = formatTime(elapsedTime);
        }

        document.getElementById('start').addEventListener('click', () => {
            if (!running) {
                timer = setInterval(updateTime, 100);
                running = true;
            }
        });

        document.getElementById('pause').addEventListener('click', () => {
            clearInterval(timer);
            running = false;
        });

        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(timer);
            elapsedTime = 0;
            running = false;
            timeDisplay.textContent = "00:00:00";
            lapsContainer.innerHTML = '';
        });

        document.getElementById('lap').addEventListener('click', () => {
            if (running) {
                const lapItem = document.createElement('li');
                lapItem.textContent = formatTime(elapsedTime);
                lapsContainer.appendChild(lapItem);
            }
        });
