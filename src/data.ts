import type { catApi } from "./types";

export async function getCatImage(): Promise<catApi> {  
try {
    //btnCat.disabled = true;
    const response = await fetch("https://api.thecatapi.com/v1/images/search"); //https://api.thecatapi.com/");//
    const data: catApi[] = await response.json();
    //const data: catApi = await response.json();// as catApi[];
    //data.remove(0, 1);
    //data.remove(data.length - 1, 1);
    const cat = data[0];
    if (!cat || !cat.url) {
      throw new Error("No cat image URL returned from API");
    }
    //image.src = cat.url;
    //document.getElementById("debug-area")!.textContent = `Fetched cat image: ${cat.url} data length: ${data.length} data: ${JSON.stringify(data)}`;
    return cat;
  } 
  catch (error) {
    console.error("Error fetching cat image:", error);
    throw error;
  } finally {
    //btnCat.disabled = false;
  }
}