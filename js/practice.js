const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

const displayComment = comment => {
    const commentDiv = document.getElementById('comment')
    comment.forEach(comments => {
        console.log(comments);
        const div = document.createElement('div')
        div.innerHTML = `
            <h4>Name:${comments.name}</h4>
            <p>Comment:${comments.body}</p>
        `;
        commentDiv.appendChild(div)
    });
}