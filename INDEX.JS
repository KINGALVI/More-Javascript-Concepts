// ১। API সহ Javascript এর বিভিন্ন Code এ Promise, Async/Await এর ব্যবহার : 


// Example - 1

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

// Example - 2

async function LoadData1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

LoadData1();

// Example 3

const LoadData2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

LoadData2();