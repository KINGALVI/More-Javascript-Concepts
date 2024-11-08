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





// ২। Javascript এ যদি কোনো Function বা Program Browser এর ভিতরে Website Load হয়ে যাওয়ার কিছু সময় পর দেখাতে চায় তাহলে settimeout ব্যবহার করতে হবে ।

setTimeout(() => {
    console.log('Lazy Log')
}, 3000)





// ৩। Javascript এ যদি কোনো Function বা Program Browser এর ভিতরে Website Load হয়ে যাওয়ার কিছু সময় পর পর দেখাতে চায় তাহলে setInterval ব্যবহার করতে হবে ।

let number = 0;

const ColckId = setInterval(() => {

    number++;

    if (number >= 5) {
        clearInterval(ColckId);
    }
    console.log(ColckId, number);
})





// ৪। Javascript এ try, catch, throw এবং finally ব্যবহার করে Error Handling করার পদ্ধতি ।

document.getElementById('input-field-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = ''
    const errorText = document.getElementById('error-text');


    try {
        const number = parseInt(inputFieldText);

        if (isNaN(number)) {
            throw 'Please Put Some Number !';
        }

        else if (number < 18) {
            throw 'Kids Are Not Alowed !'
        }

        else if (number > 50) {
            throw 'Old People Are Not Alowed !'
        }
        errorText.innerText = ''

    }
    catch (error) {
        errorText.innerText = error;
    }
    finally {
        setTimeout(() => {
            alert('All Done Inside Try Catch');
        }, 1000);
    }
})
