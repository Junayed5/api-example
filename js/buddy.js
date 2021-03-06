const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}

const displayBuddy = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerHTML= `<b>Name:</b>${buddy.name.title} ${buddy.name.first} ${buddy.name.last} <b>Email:</b> ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}