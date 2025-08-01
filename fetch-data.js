async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
    }catch(error){
        console.log('Error:', error);
    }
};