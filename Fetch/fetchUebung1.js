async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Bitcoin Price Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error.message);
    }
}

fetchBitcoinPrice();


async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Cat Fact:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching Cat Fact:', error.message);
    }
}

fetchCatFact();