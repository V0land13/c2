const cats_progress = document.querySelector('.progress-bar-cats')

const dogs_progress = document.querySelector('.progress-bar-dogs')

const parrots_progress = document.querySelector('.progress-bar-parrots')

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)


ES.onerror = error => {
    ES.readyState ? (cats_progress.textContent = "Some error", cats_progress.style.cssText = `width: "" `) : null;
    ES.readyState ? (dogs_progress.textContent = "Some error", dogs_progress.style.cssText = `width: "" `) : null;
    ES.readyState ? (parrots_progress.textContent = "Some error", parrots_progress.style.cssText = `width: "" `) : null;
}

ES.onmessage = message => {
    //cats stat
    vote_data = JSON.parse(message.data);
    pets_sum = vote_data.cats + vote_data.dogs + vote_data.parrots;
    persent_cats = (vote_data.cats*100)/pets_sum;
    persent_dogs = (vote_data.dogs*100)/pets_sum;
    persent_parrots = (vote_data.parrots*100)/pets_sum;

    cats_progress.style.cssText = `width: ${persent_cats}%;`
    cats_progress.textContent = `${vote_data.cats} for cats`
    // dogs stat
    dogs_progress.style.cssText = `width: ${persent_dogs}%;`
    dogs_progress.textContent = `${vote_data.dogs} for dogs`
    //parrots stat
    parrots_progress.style.cssText = `width: ${persent_parrots}%;`
    parrots_progress.textContent = `${vote_data.parrots} for parrots`
}



