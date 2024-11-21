// Select elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

// Add event listener for the search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                // Clear previous results
                searchResults.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = `<strong>${item.show.name}</strong> - ${item.show.genres.join(', ')} <br>
                                        <em>${item.show.summary || 'No description available.'}</em>`;
                        searchResults.appendChild(li);
                    });
                } else {
                    searchResults.innerHTML = '<li>No results found.</li>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                searchResults.innerHTML = '<li>Error fetching results. Please try again later.</li>';
            });
    }
});
