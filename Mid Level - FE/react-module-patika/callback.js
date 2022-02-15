import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json().then(json => {
//   console.log(json);
// }));

// (async () => {
//     const {data:user} = await axios('https://jsonplaceholder.typicode.com/users');
//     const {data:post1} = await axios('https://jsonplaceholder.typicode.com/posts/1');
//     const {data:post2} = await axios('https://jsonplaceholder.typicode.com/posts/2');

//     console.log('Users',user);
//     console.log('Post1',post1);
//     console.log('Post2',post2);
// })();

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         console.log('getComments');
//         resolve();
//     });
// };

// getComments().then(() => console.log('Bitti'))
//     .catch(() => console.log('Hata',e));

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         number === 1 ? resolve({text: "Koşul Sağlandı"}) : reject(  {text: "Koşul sağlanamadı"});
//     });
// };

// getComments(2).then((data) => console.log(data))
//     .catch((e) => console.log('Hata',e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    //resolve(data);
    reject('Bir sorun daha oluştu');
  });
};

Promise.all([getUsers, getPost(1)])
    .then(console.log)
    .catch(console.log);