let drawnNumbers = [];
const MAX_NUMBER = 50;

function drawNumber() {
    document.getElementById('spinner').style.display = 'inline-block';

    setTimeout(() => {
        if (drawnNumbers.length === MAX_NUMBER + 1) return;

        let number;
        do {
            number = Math.floor(Math.random() * (MAX_NUMBER + 1));
        } while (drawnNumbers.includes(number));

        drawnNumbers.push(number);
        document.getElementById('drawn-number').textContent = number.toString().padStart(2, '0');

        let historyList = document.getElementById('history-list');
        let newItem = document.createElement('li');
        newItem.textContent = number.toString().padStart(2, '0');
        newItem.classList.add("badge", "bg-light", "text-danger", "border", "border-danger");
        historyList.appendChild(newItem);

        document.getElementById('spinner').style.display = 'none';

        // 🎯 Quando todos os 51 números forem sorteados → exibe modal e desativa botão
        if (drawnNumbers.length === MAX_NUMBER + 1) {
            document.getElementById("draw-btn").disabled = true;
            let modal = new bootstrap.Modal(document.getElementById('endModal'));
            modal.show();
        }

    }, 1000);
}

function toggleRules() {
    const el = document.getElementById('rules');
    el.style.display = el.style.display === "none" ? "block" : "none";
}