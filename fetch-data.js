async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById('api_data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
    }
};