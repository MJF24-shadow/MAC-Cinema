document.addEventListener("DOMContentLoaded", () => {

    const moviesNowShowing = [

        {
            id: 'clayface', 
            title: 'Clayface',
            genre: 'Horror',
            duration: '1h 48m',
            price: 14.00,
            image: 'images/clayface.jpg',
            description: 'Rising Hollywood star Matt Hagen descends into a horrifying revenge-filled monster when scientific ambition strips him of his identity and humanity.'
        },

        {
            id: 'ebenezer', 
            title: 'Ebenezer',
            genre: 'Drama',
            duration: '1h 55m',
            price: 14.00,
            image: 'images/ebenezer.jpg',
            description: "A thrilling ghost story set in Dickens London, following one man's supernatural journey to face his past, present and future as he fights for a second chance at redemption."
        },

        {
            id: 'hunger-games', 
            title: 'The Hunger Games: Sunrise on the Reaping',
            genre: 'Action/Adventure',
            duration: '2h 38m',
            price: 14.00,
            image:'images/hunger-games.jpg',
            description: "Revisit the world of Panem 24 years before the events of The Hunger Games, starting on the morning of the reaping of the 50th Hunger Games, also known as the Second Quarter Quell."
        },

        {
            id: 'focker-in-law', 
            title: 'Focker in-Law',
            genre: 'Comedy',
            duration: '1h 45m',
            price: 14.00,
            image:'images/focker-in-law.jpg',
            description: "A young man named Henry, son of Greg and Pam Focker, faces family chaos when he decides to marry a strong-willed woman who appears to be his complete mismatch."
        },

        {
            id: 'cat-in-hat', 
            title: 'The Cat in the Hat',
            genre: 'Animation',
            duration: '1h 53m',
            price: 12.50,
            image:'images/cat-in-the-hat.jpg',
            description: "Meet the Cat in the Hat you don't know in an all-new, epic adventure where mischief, magic and mayhem reign supreme."
        },

        {
            id: 'godzilla', 
            title: 'Godzilla Minus Zero',
            genre: 'Action/Adventure',
            duration: '2h 15m',
            price: 14.00,
            image:'images/godzilla.jpg',
            description: "Set in 1949, the Shikishima family confronts a fresh catastrophe two years after surviving their previous ordeal with the legendary monster."
        }

    ];
    
    const movieTheaterGrid = document.getElementById('movies-theatres-grid');

    // 2. Render all movie cards dynamically
    if (movieTheaterGrid){
      moviesNowShowing.forEach(movie => {
        const card = document.createElement('article');
        card.className = 'movie-card';
        
        card.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.image}" alt="${movie.title} poster" class="movie-poster"> 
        <div class="movie-card-content">
        <p class="movie-description">${movie.description}</p>
        <p class="movie-meta">${movie.genre} • ${movie.duration} • $${movie.price.toFixed(2)}</p>`;
      
        card.addEventListener("click", (e) => {
          if (e.target.tagName !== "A") {
            window.location.href = `booking.html?movie=${movie.id}`;
          }

        });
        
        movieTheaterGrid.appendChild(card);
      });
    }


})