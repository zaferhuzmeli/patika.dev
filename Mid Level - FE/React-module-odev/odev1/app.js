import getData from "./getData.js";

(async () => {
    const user = await getData(1);
    console.log(user);
})();