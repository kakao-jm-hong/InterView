function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer}\n)`;
    const format = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumIntegerDigits: 2}).format;

    for(let perf of invoice.performances) {
        const play = play[perf.playId];
        let thisAmount = 0;
    }
}