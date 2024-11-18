window.onload = function () {
    // Select the search button
    var searchButton = document.querySelector("button");
    console.log(searchButton);
    var httpRequest;

    // Add click event listener to the search button
    searchButton.addEventListener('click', function (ele) {
        ele.preventDefault(); // Prevent the default form submission

        // Create a new XMLHttpRequest
        httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8080/superheroes.php";

        // Define the function to be called when the readyState changes
        httpRequest.onreadystatechange = myFunction;
        httpRequest.open('GET', url); // Initialize the request
        httpRequest.send(); // Send the request
    });

    // Function to handle the response
    function myFunction() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response); // Alert the response text
            } else {
                alert("No PHP found!"); // Alert if the request was not successful
            }
        }
    }
}