//const API_TOKEN = "e393b0f7482e102bf0da20018541fe80"; 

export function getProductsFromApiWithSearchedText (text) {
    //const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    //console.log(JSON.parse('{"q": "bob"}'))

    const url = "http://192.168.50.200:81/api/homepage?q="+text
    return fetch(url)  
        .then((response) =>response.json())
        .catch((error) =>console.error(error)); 
   
    
  }
export function getImageFromApi(name) {

    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getProductDetailFromApi(id){
    return fetch('http://192.168.50.200:81/api/product/'+id)
    .then((response) =>response.json())
    .catch((error) => console.error(error));
}