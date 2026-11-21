document.addEventListener("DOMContentLoaded", () => {
    // reads movie parameter from url
    const parameters = new URLSearchParams(window.location.search);
    const movieId = parameters.get("movie");

    const movieTitle = document.getElementById("booking-movie-title");
    const movieMeta = document.getElementById("booking-movie-meta");
    const movieDesc = document.getElementById("booking-movie-description");
    const moviePoster = document.getElementById("booking-movie-poster");
    
    const showtimeBanner = document.getElementById("selected-showtime-banner");
    const showtimeBtns = document.getElementById("showtime-btns");

    const seatSelection = document.getElementById("seat-selection"); 
    const seatMap = document.getElementById("seat-map");
    const seatSelectedList = document.getElementById("selected-seats-list");

    const totalPrice = document.getElementById("booking-movie-title");

    const bookingForm = document.getElementById("booking-form");
    const formMovieId = document.getElementById("form-movie-id");
    const formShowtime = document.getElementById("form-showtime");

    const errorMessage = document.getElementById("error-message");




})