import './index.css';
import {deleteUser, getUsers} from './api/UserApi';
import getBaseUrl from './api/baseUrl';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `
        <tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`;
    })

    global.document.getElementById("users").innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName("deleteUser");

    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    })
})








// My Test
// const linkArray = Array.from(testLinks);
// console.log(linkArray);













// Array.from(deleteLinks, function(link) {
//     console.log(link)
// })
