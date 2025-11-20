// hold on i havent written javascript in a while

const FILENAME = "songs.json";
const pickSong = () =>{
    // fetch the json
    let hi = fetch(FILENAME)
        .then(response => response.json()) // wait for the json to be found
        .then(json => { // parse the json
            
            let rand = Math.floor(Math.random() * json.Songs.length);
        
            let song = json.Songs[rand];
            document.querySelector("#name").textContent = song.Name;
            document.querySelector("#artist").textContent = song.Artist;
            document.querySelector("#art").src = song.Art;
        });
};

// run this script whenever the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    pickSong();
});