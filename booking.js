document.addEventListener("DOMContentLoaded", () => {
    // reads movie parameter from url
    const parameters = new URLSearchParams(window.location.search);
    const movieId = parameters.get("movie");

    // DOM element references
    const movieTitle = document.getElementById("booking-movie-title");
    const movieMeta = document.getElementById("booking-movie-meta");
    const movieDesc = document.getElementById("booking-movie-description");
    const moviePoster = document.getElementById("booking-movie-poster");
    
    const showtimeBanner = document.getElementById("selected-showtime-banner");
    const showtimeBtns = document.getElementById("showtime-btns");

    const seatSelection = document.getElementById("seat-selection"); 
    const seatMap = document.getElementById("seat-map");
    const seatSelectedList = document.getElementById("selected-seats-list");

    const totalPrice = document.getElementById("total-price");

    const bookingForm = document.getElementById("booking-form");
    const formMovieId = document.getElementById("form-movie-id");
    const formShowtime = document.getElementById("form-showtime");

    const errorMessage = document.getElementById("error-message");

    // Guard in case script runs on a different page
    if (!movieTitle || !showtimeBtns) return;


    // finds movie in array (movie-data.js)
    const movie = typeof moviesNowShowing !== "undefined"

    // returns movie id if found in array, or else returns null
    ? moviesNowShowing.find((m) => m.id === movieId) : null;

    // handles missing or invalid movie id in url
    if (!movie){
        movieTitle.textContent="Movie Not Found";
        movieMeta.innerHTML='Return to <a href="index.html">Main Menu</a> to select a movie.';
        return
    }

    // variables for current booking session
    let selectedShowtime = "";
    let selectedSeats = [];

    // displays movie header details
    movieTitle.textContent = movie.title;
    movieMeta.textContent = `${movie.genre} • ${movie.duration} • $${movie.price.toFixed(2)} per ticket`;
    movieDesc.textContent = movie.description;
    moviePoster.src = movie.image;
    moviePoster.alt = `${movie.title} Poster`;
    moviePoster.hidden = false;

    // renders showtime buttons
    movie.showtimes.forEach((time) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "showtime-btn"
        btn.textContent = time;


        btn.addEventListener("click", () => {
            // highlights only selected showtime button
            document.querySelectorAll(".showtime-btn").forEach((b) => b.classList.remove("active"));

            btn.classList.add("active");


            // updates state and resets previous seat selections
            selectedShowtime = time;
            selectedSeats = [];
            updateSummary();

            errorMessage.innerHTML="";
            errorMessage.hidden = true;

            // updates hidden form inputs and banner
            formMovieId.value = movie.id;
            formShowtime.value =selectedShowtime;
            showtimeBanner.textContent = `Showtime: ${selectedShowtime} - $${movie.price.toFixed(2)} / ticket`;

            // generates seat grid for this showtie and reveal section
            renderSeatMap(movie, selectedShowtime);
            seatSelection.hidden = false;
            seatSelection.scrollIntoView({ behavior: "smooth"});

        });

        showtimeBtns.appendChild(btn);
    });

    // generates interactive map
    function renderSeatMap(selectedMovie, showtime){
        seatMap.innerHTML = "";
        const rows = ["A", "B", "C", "D", "E", "F"];
        const cols = 10;
        const occupied = [];

        rows.forEach((row) => {
            for (let col=1; col <= cols; col++) {
                const seatId = `${row}${col}`;
                const seatBtn = document.createElement("button");
                seatBtn.type = "button";
                seatBtn.className = "seat";
                seatBtn.textContent = seatId;
                seatBtn.dataset.seat = seatId;

                if (occupied.includes(seatId)){
                    seatBtn.classList.add("occupied");
                    seatBtn.disabled = true;
                    seatBtn.setAttribute("aria-label", `Seat ${seatId} (Occupied)`);

                } else {
                    seatBtn.setAttribute("aria-label", `Seat ${seatId} (Available)`);
                    seatBtn.setAttribute("aria-pressed", "false");
                    seatBtn.addEventListener("click", () => toggleSeat(seatBtn, seatId));

                }

                seatMap.appendChild(seatBtn);

            }

        });
    }

    // toggles seat selection and live running total
    function toggleSeat(seatBtn, seatId){
        const index = selectedSeats.indexOf(seatId);

        if (index > -1){
            selectedSeats.splice(index, 1);
            seatBtn.classList.remove("selected");
            seatBtn.setAttribute("aria-pressed", "false");
        } else {
            selectedSeats.push(seatId);
            seatBtn.classList.add("selected");
            seatBtn.setAttribute("aria-pressed", "true");
        }

        updateSummary();
    }

    // updates summary
    function updateSummary(){
        if (selectedSeats.length === 0){
            seatSelectedList.textContent = "None";
            totalPrice.textContent = "0.00";
        } else {
            const sortedSeats = [...selectedSeats].sort();
            seatSelectedList.textContent = sortedSeats.join(", ");
            const total = selectedSeats.length*movie.price;
            totalPrice.textContent = total.toFixed(2);
        }
    }

    // clent side booking form validation
    if (bookingForm){
        bookingForm.addEventListener("submit", (event) => {
            // prevents default browser form reload to handle validation
            event.preventDefault();

            // assigns variables to input values
            const customerName = document.getElementById("customer-name").value.trim();
            const customerEmail = document.getElementById("customer-email").value.trim();
            
            // clear previous errors
            errorMessage.innerHTML= "";
            errorMessage.hidden = true;
            let errors = [];

            // checks if showtime is chosen
            if (!selectedShowtime) {
                errors.push("- Select a showtime.");
            }

            // checks if seats are chosen
            if (selectedSeats.length === 0) {
                errors.push("- Select at least one seat.");
            }

            // checks if name field is empty
            if (!customerName) {
                errors.push("- Full name is required.");
            }

            // checks if email field is empty
            if (!customerEmail){
            errors.push("- Email is required.");
            }
            
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(customerEmail)){
                errors.push("- Please enter a valid email address (ex: jsmith123@email.com).");
                }
            }

            if (errors.length > 0){
                errorMessage.innerHTML = errors.join("<br>"); // displays all errors
                errorMessage.hidden = false;
                return; // stops execution if invalid data
            }

            // Reset seats and form for next booking
            selectedSeats = [];
            updateSummary();
            bookingForm.reset();
            renderSeatMap(movie, currentShowtime);


        });
    }
})