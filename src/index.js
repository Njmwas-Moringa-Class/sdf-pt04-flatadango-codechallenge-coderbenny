// Your code here
const filmsContainer = document.querySelector('.list-container')
const ul = document.getElementById('films')
const movieTitle = document.querySelector('#title')


document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/films'
    
    // load all movie titles
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        printAllMovieHeaders(data);
    })
    
    // showing first movie
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(movie => {
        showMovie(movie[0])
        
    })
    
    //book ticket
    


});




function printAllMovieHeaders(data){
    data.forEach(data => {
        // console.log(data.title)
        let li = document.createElement('li')
        li.textContent = data.title;
        li.className = 'film item'
        ul.appendChild(li)
        filmsContainer.appendChild(ul)
    })
}

function showMovie(movie){
    // console.log(movie)
    let runtime = document.getElementById('runtime')
    let description = document.getElementById('film-info')
    let showTime = document.getElementById('showtime')
    let poster = document.getElementById('poster')
    let remTickets = document.getElementById('ticket-num')
    let capacity = movie.capacity 
    let soldTickets = movie.tickets_sold
    let remainingTickets = capacity - soldTickets
    console.log(remainingTickets)
    

    movieTitle.textContent = movie.title
    runtime.textContent = `${movie.runtime} minutes`
    description.textContent = movie.description
    showTime.textContent = movie.showtime
    poster.src = movie.poster
    poster.alt = movie.title
    remTickets.textContent = remainingTickets
    document.getElementById('buy-ticket').addEventListener('click', (e)=> {
        const button = document.querySelector('#buy-ticket')

        if(remainingTickets > 0){
            movie.tickets_sold++;
            remainingTickets = capacity - movie.tickets_sold
            remTickets.textContent = remainingTickets 
            console.log(remainingTickets)

        } else {
            console.log('Fully Booked!');
            button.disabled  = true;
            button.style.color = 'black';
        }
    })
}

   