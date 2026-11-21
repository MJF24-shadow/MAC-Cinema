document.addEventListener("DOMContentLoaded", () => {

    const moviesNowShowing = [

        {
            id: 'clayface', 
            title: 'Clayface',
            genre: 'Horror',
            duration: '1h 48m',
            image: 'images/clayface.jpg',
        },

        {
            id: 'ebenezer', 
            title: 'Ebenezer',
            genre: 'Drama',
            duration: '1h 55m',
            image: 'images/ebenezer.jpg',
        },

        {
            id: 'hunger-games', 
            title: 'The Hunger Games: Sunrise on the Reaping',
            genre: 'Action/Adventure',
            duration: '2h 38m',
            image:'images/hunger-games.jpg',
        },

        {
            id: 'focker-in-law', 
            title: 'Focker in-Law',
            genre: 'Comedy',
            duration: '1h 45m',
            image:'images/focker-in-law.jpg',
        },

        {
            id: 'cat-in-hat', 
            title: 'The Cat in the Hat',
            genre: 'Animation',
            duration: '1h 53m',
            image:'images/cat-in-the-hat.jpg',
        },

        {
            id: 'godzilla', 
            title: 'Godzilla Minus Zero',
            genre: 'Action/Adventure',
            duration: '2h 15m',
            image:'images/godzilla.jpg'
        }
  
    ];

    const moviesSoon =[
      {
        id: 'behemoth', 
        title: 'Behemoth!',
        genre: 'Drama/Music',
        release: 'December 4th',
        image: 'images/behemoth.jpg',
        trailer:'https://youtu.be/I6tMFYT9s7E?si=u1qj5eBdwagKcVne'
        },

      {
        id: 'dune', 
        title: 'Dune: Part Three',
        genre: 'Sci-Fi/Action',
        release: 'December 18th',
        image: 'images/dune.jpg',
        trailer:'https://youtu.be/NdvqHc56lE0?si=JFyHqimAZYiJEfCW'
        },
      
      {
        id: 'avengers', 
        title: 'Avengers: Doomsday',
        genre: 'Action/Superhero',
        release: 'December 18th',
        image: 'images/avengers.jpg',
        trailer:'https://youtu.be/irVNGjRFZGk?si=quqJ24tfPv8jqbFW'
        },
      
      {
        id: 'angry-birds', 
        title: 'The Angry Birds Movie 3',
        genre: 'Animation/Comedy',
        release: 'December 23rd',
        image: 'images/angry-birds.jpg',
        trailer:'https://youtu.be/a9DB_aUMzME?si=nBfZdMEszc0sVeLj'
        },
      
      {
        id: 'jumanji', 
        title: 'Jumanji: Open World',
        genre: 'Action/Adventure',
        release: 'December 25th',
        image: 'images/jumanji.jpg',
        trailer:'https://youtu.be/zhApeaHMvfs?si=iuvuGzLNVQFhdbZ_'
        },
      
      {
        id: 'werwulf', 
        title: 'Werwulf',
        genre: 'Drama/Horror',
        release: 'December 25th',
        image: 'images/werwulf.jpg',
        trailer:'https://youtu.be/cmjpadVj-Vk?si=CcHhdC7rQF65HO6X'
        },
     


    ];
    
    const movieTheaterGrid = document.getElementById('movies-theatres-grid');
    

    // Renders all movie cards dynamically (Movies Now Showing)
    if (movieTheaterGrid){
      moviesNowShowing.forEach(movie => {
        const card = document.createElement('article');
        card.className = 'movie-card';
        
        card.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="${movie.image}" alt="${movie.title} poster" class="movie-poster"> 
        <div class="movie-card-content">
        <p class="movie-meta">${movie.genre} • ${movie.duration}</p>
        <a href="booking.html?movie=${movie.id}" class="book-link-btn">View Showtimes</a>
        </div>`;
        
      
        card.addEventListener("click", (e) => {
          if (e.target.tagName !== "A") {
            window.location.href = `booking.html?movie=${movie.id}`;
          }

        });
        
        movieTheaterGrid.appendChild(card);
      });
    }

    const movieSoonGrid = document.getElementById('movies-soon-grid');

    // Renders all movie cards dynamically (Movies Coming Soon)
    if (movieSoonGrid){
      moviesSoon.forEach(movie => {
        const card = document.createElement('article');
        card.className = 'movie-card';
        
        card.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="${movie.image}" alt="${movie.title} poster" class="movie-poster"> 
        <div class="movie-card-content">
        <p class="movie-meta">${movie.genre} • ${movie.release}</p>
        <a href="${movie.trailer}" class="trailer-link-btn">View Trailer</a>
        </div>`;
        
        
        movieSoonGrid.appendChild(card);
      });
    }



})