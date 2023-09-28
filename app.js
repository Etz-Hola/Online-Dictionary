const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");


  // Event listener for the search button
btn.addEventListener("click", () => {
    let inputWord = document.getElementById('input-word').value;
    // console.log(inputWord);
    fetch (`${url} ${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0].meanings[0].partOfSpeech);
        console.log(data[0].phonetic);
        result.innerHTML = `
        <div class="word">
                <h3>${inputWord}</h3>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, beatae?
            </p>
            <p class="word-example">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, beatae?
            </p>        
        `
    })
});


