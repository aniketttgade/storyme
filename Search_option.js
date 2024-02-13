// Function to perform search
function search() {
  // Get search query
  var query = document.getElementById('searchInput').value.toLowerCase();
  
  // Get all H2 elements
  var headings = document.querySelectorAll('h2');

  // Clear previous search results
  var searchResultsDiv = document.getElementById('searchResults');
  searchResultsDiv.innerHTML = '';

  // Iterate over H2 elements to find matches
  for (var i = 0; i < headings.length; i++) {
    var headingText = headings[i].textContent.toLowerCase();

    // Check if heading contains search query
    if (headingText.includes(query)) {
      // If match found, create a new div to hold the heading and append it to searchResultsDiv
      var resultDiv = document.createElement('div');
      resultDiv.textContent = headings[i].textContent;
      searchResultsDiv.appendChild(resultDiv);
    }
  }
}

// Attach event listener to search input
document.getElementById('searchInput').addEventListener('input', search);
