// Your code here
const filmsContainer = document.querySelector('.list-container')
const ul = document.getElementById('films')
const btn = document.getElementById('buy-ticket')
let movieTitle = document.querySelector('#title')
let remTickets = document.getElementById('ticket-num')
let runtime = document.getElementById('runtime')
let description = document.getElementById('film-info')
let showTime = document.querySelector('span#showtime')
let runTime = document.getElementById('runtime')
let poster = document.getElementById('poster')


// Function For Printing All Movie Headers
function printAllMovieHeaders(movies){
    
    //Displaying each movie
    movies.map(movie => {
        // console.log(data.title)
        let li = document.createElement('li')
        li.textContent = movie.title
        li.className = 'film-item'
        li.style.cursor = 'pointer'

        // Event Listener to Update current movie when title is clicked
        li.addEventListener('click', (e) => {
            let movieProp = e.target
            let banner = document.querySelector('#poster')
            banner.src = movie.poster
            movieTitle.textContent = movie.title
            description.textContent = movie.description
            showTime.textContent = movie.showtime
            runTime.textContent = `${movie.runtime} minutes`
            
            let movieCapacity = movie.capacity
            let sold = movie.tickets_sold
            remTickets.innerHTML = movieCapacity - sold  
        });

        ul.appendChild(li)
        filmsContainer.appendChild(ul)
    })
        btn.addEventListener('click', bookTicket)
}
    // Function For Booking Ticket
    function bookTicket(event) {
        // console.log(event)
        let remainingTickets = parseInt(document.getElementById('ticket-num').textContent)
        // console.log(button)

        if(remainingTickets > 0){
            remainingTickets -= 1 
            remTickets.textContent = remainingTickets

            // const movieId = 
            // console.log(movieId)

        //     fetch(`http://localhost:3000/films/${movieId}`, {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({sold_tickets: parseInt(remTickets.textContent)})
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.tickets_sold === 0){
        //             btn.disabled = true
        //             btn.textContent = 'Sold out!'
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error updating tickets sold!')
        //     })
        // }
        // if (remainingTickets === 0){
        //     btn.disabled = true
        //     btn.textContent = "Sold out!"
        }
        


        //     // console.log(remainingTickets)
        // } 
        // if (remainingTickets === 0){
        //     btn.disabled  = true;
        //     btn.textContent = "Sold Out"
        //     console.log('Fully Booked!');
        // } else {
        //     console.log("Booked!")
        // }
    }


//Function for displaying the first movie
function showMovie(movie){
    // console.log(movie)
    let capacity = movie.capacity 
    let soldTickets = movie.tickets_sold
    let remainingTickets = capacity - soldTickets
    
    // console.log(remainingTickets)
    movieTitle.textContent = movie.title
    runtime.textContent = `${movie.runtime} minutes`
    description.textContent = movie.description
    showTime.textContent = movie.showtime
    poster.src = movie.poster
    remTickets.textContent = remainingTickets
};


document.addEventListener('DOMContentLoaded', () => {

    const apiUrl = 'http://localhost:3000/films'

    // load all movie titles
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
        },
    })
    .then(response => response.json())
    .then(movies => {
        // console.log(data)
        printAllMovieHeaders(movies);
    })
    .catch(error => {
        console.error('Error:', error);
    })

    
    // show first movie
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(movie => {
        showMovie(movie[0])
        
    })  
    .catch(error => {
        console.error('Error:', error);
    })

})