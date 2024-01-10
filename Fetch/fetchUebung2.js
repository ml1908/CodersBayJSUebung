// ---------- GET ---------- //
fetch('https://reqres.in/api/users/23')
    .then(response => {
        if (response.ok) {
            console.log('GET Request erfolgreich:', response.status);
        } else {
            console.error('GET Request fehlgeschlagen:', response.status);
        }
    })
    .catch(error => console.error('Fehler beim GET Request:', error));

// ---------- POST ---------- //
let url = 'https://reqres.in/api/users'
let data = {
    name: 'Robert',
    job: 'Developer',
};
try {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        console.log('POST Request erfolgreich:', response.status);
    } else {
        console.error('POST Request fehlgeschlagen:', response.status);
    }

} catch (error) {

    console.error('Fehler beim POST Request:', error);
}

// ---------- PUT ---------- //

fetch('https://reqres.in/api/users/2', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Michael',
        job: 'Junior Developer',
    }),
})
    .then(response => {
        if (response.ok) {
            console.log('PUT Request erfolgreich:', response.status);
        } else {
            console.error('PUT Request fehlgeschlagen:', response.status);
        }
    })
    .catch(error => console.error('Fehler beim PUT Request:', error));

// ---------- DELETE ---------- //

fetch('https://reqres.in/api/users/2', {
    method: 'DELETE',
})
    .then(response => {
        if (response.ok) {
            console.log('DELETE Request erfolgreich:', response.status);
        } else {
            console.error('DELETE Request fehlgeschlagen:', response.status);
        }
    })
    .catch(error => console.error('Fehler beim DELETE Request:', error));
