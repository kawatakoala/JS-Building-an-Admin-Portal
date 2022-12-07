const getBooks = async () => {
    let response = await fetch('http://localhost:3001/listBooks')
    let json = await response.json();
}

async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBookTitle)
}

function renderBookTitle(book) {
    let bookTitle = document.getElementById("root")
    bookTitle.innerHTML += `
        <div class = "book-title">
            <h1 class = "title">${book.title}</h1>
            <input type = "number"
                    id = "${book.id}">
            <button onclick = "handleSaveButtonClicked('${book.id}')">Save</button>
        </div>
        `
}

const handleSaveButtonClicked = async (id) => {
    const input = document.getElementById(id)
    console.log(input.value)
    let response = await fetch('http://localhost:3001/updateBook', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            quantity: input.value
        })
    })
}

main()