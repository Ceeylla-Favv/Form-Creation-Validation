async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create unordered list element
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any error during fetching
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
