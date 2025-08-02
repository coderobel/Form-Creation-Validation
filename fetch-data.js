async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        const userList = document.createElement("ul");
        users.foreach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userlist.appendChild(listItem);
    });
        dataContainer.innerHTML = '';
    }catch(error){
        dataContainer.innerHTML = 'Failed to load user data.';
        console.log('Error: ' , error);
    }
};
document.addEventListener('DOMContentLoaded', fetchUserData)