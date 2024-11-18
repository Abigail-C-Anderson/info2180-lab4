window.onload = function () {
    // Select the search button
    var searchButton = document.querySelector("button");
    var searchInput = document.querySelector("input");
    var httpRequest;

    // Add click event listener to the search button
    searchButton.addEventListener('click', function (ele) {
        ele.preventDefault(); // Prevent the default form submission

        // Get the trimmed input value
        var input = searchInput.value.trim();
        console.log(input); // Log the input value

        // Create a new XMLHttpRequest
        httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8080/superheroes.php?query=" + input;

        // Define the function to be called when the readyState changes
        httpRequest.onreadystatechange = myFunction;
        httpRequest.open('GET', url); // Initialize the request
        httpRequest.send(); // Send the request
    });

    // Function to handle the response
    function myFunction() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Update the result element with the response text
            var t = document.getElementById("result").innerHTML = this.responseText;
            console.log(t); // Log the updated result
        }
    }
};