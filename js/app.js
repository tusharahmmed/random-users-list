const getUsers = ()=>{
    fetch('https://randomuser.me/api/?results=51')
    .then(response => response.json())
    .then(data => showUsers(data));
}

const showUsers = (data)=>{

    let userListDiv = document.getElementById('list-parent');
    //loop
    for(let user of data.results){
        // property value
        let name = `${user.name.first} ${user.name.last}`;
        let userPhoto = user.picture.large;
        let userName = user.login.username;
        let address = `${user.location.city}, ${user.location.country}`;

        // create element 
        let item = document.createElement('div');
        item.innerHTML = `<div class="m-auto">
                            <div class="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                                <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                                <img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src="${userPhoto}" alt="" />
                                <div class="flex flex-col text-center md:text-left">
                                    <div class="font-medium text-lg text-gray-800">${name}</div>
                                    <div class="text-gray-500 mb-3 whitespace-nowrap">${address}</div>
                                    <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                    <a href="https://www.linkedin.com/${userName}" class="hover:cursor-pointer hover:text-blue-500" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.facebook.com/${userName}" class="hover:cursor-pointer hover:text-blue-500" target="_blank"><i class="fab fa-facebook-square"></i></a>
                                    <a href="https://www.github.com/${userName}" class="hover:cursor-pointer hover:text-blue-500" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>`;

        // append
        userListDiv.appendChild(item);
        
    }
}
// call the function
getUsers();