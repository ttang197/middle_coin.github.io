function calculateChange() {
    const amountInput = document.getElementById('amount');
    const amount = parseInt(amountInput.value);
    const errorMessage = document.getElementById('error-message');
    const resultDiv = document.getElementById('result');

    // 입력값 검증
    if (!amount || amount < 10) {
        errorMessage.textContent = '10원 이상의 금액을 입력해주세요.';
        errorMessage.style.display = 'block';
        resultDiv.classList.remove('show');
        return;
    }

    if (amount % 10 !== 0) {
        errorMessage.textContent = '10원 단위로 입력해주세요.';
        errorMessage.style.display = 'block';
        resultDiv.classList.remove('show');
        return;
    }

    errorMessage.style.display = 'none';
    const coins = [500, 100, 50, 10]; // 사용할 수 있는 동전 종류
    let change = amount;
    let coinCount = 0;
    let coinDetailsHTML = '';

    // 동전 개수 계산
    for (let coin of coins) {
        if (change >= coin) {
            const count = Math.floor(change / coin);
            coinCount += count;
            coinDetailsHTML += `
                <div class="coin-item">
                    <span>${coin}원 동전</span>
                    <span>${count}개</span>
                </div>`;
            change -= count * coin;
        }
    }

    // 결과 출력
    document.getElementById('total-coins').innerHTML = `총 필요한 동전: ${coinCount}개`;
    document.getElementById('coin-details').innerHTML = coinDetailsHTML;
    resultDiv.classList.add('show');
}

// Enter 키로도 계산 가능하도록 설정
document.getElementById('amount').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateChange();
    }
});
