//import { getCatImage } from "./data";
const button = document.querySelector("#button");
const btnCat = document.querySelector("#cat-button");
const image = document.querySelector("#cat-image");
const url = "https://cdn2.thecatapi.com/images/MTk2NjI0Mw.jpg";
//image.src = url;
// btnCat.addEventListener("click", async () => {
//   try {
//     document.getElementById("debug-area")!.textContent = "Fetching cat image...";
//     btnCat.disabled = true;
//     const cat = await getCatImage();
//     image.src = cat.url;
//     document.getElementById("debug-area")!.textContent = `Fetched cat image: ${cat.url} data: ${JSON.stringify(cat)}`;
//   } catch (error) {
//     console.error("Error fetching cat image:", error);
//   } finally {
//     btnCat.disabled = false;
//   }
// });
button.addEventListener("click", getDogImage);
btnCat.addEventListener("click", getCatImage);
//button.addEventListener("click", async () => {
async function getDogImage() {
    try {
        button.disabled = true;
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        image.src = data.message;
    }
    catch (error) {
        console.error("Error fetching dog image:", error);
    }
    finally {
        button.disabled = false;
    }
}
//working version of getCatImage function
async function getCatImage() {
    try {
        btnCat.disabled = true;
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        const url = data[0]?.url;
        if (!url) {
            throw new Error("No cat image URL returned from API");
        }
        image.src = url;
        //document.getElementById("debug-area")!.textContent = `Fetched cat image: ${url} data length: ${data.length} data: ${JSON.stringify(data)}`;
    }
    catch (error) {
        console.error("Error fetching cat image:", error);
    }
    finally {
        btnCat.disabled = false;
    }
}
export {};
//# sourceMappingURL=main.js.map