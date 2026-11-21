document.addEventListener("DOMContentLoaded", () => {
    
    const movieTheaterGrid = document.getElementById('movies-theatres-grid');
    

    // Renders all movie cards dynamically (Movies Now Showing)
    if (movieTheaterGrid && typeof moviesNowShowing !== "undefined"){
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
    if (movieSoonGrid && typeof moviesSoon !== "undefined"){
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