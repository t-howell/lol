
//Joke Api (https://github.com/15Dkatz/official_joke_api)

const jokeApi = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';
let jokes = [];
let joke;

function getJokes(jokes) {
	return jokes[0];
}
//Version 1
fetch(jokeApi) 
	.then(res => res.json())
	.then(data => {
		jokes = [...data];
		joke = getJokes(jokes);
		showJoke1(joke);
	});

//Version 2
async function receiveJokes() {
	const response = await fetch(jokeApi);
	const data = await response.json();
	jokes = [...data];
	joke = getJokes(jokes);
	showJoke2(joke);
}
receiveJokes();

//showJoke1 or showJoke2
function showJoke2(joke) {
	let jokeDiv = document.getElementById('joke');
	jokeDiv.innerHTML = `
		<p> ${joke.setup} </p>
	`
}

//Call showPunchline when spacebar is pressed
window.addEventListener('keydown', spacebar, false);

function spacebar(e) {
	if (e.keyCode == 32) {
		showPunchline(joke);
	}
}
//Change the inner html to punchline
function showPunchline(joke) {
	
	let punchline = document.getElementById('punchline');
	punchline.innerHTML = `
		<p> ${joke.punchline} </p>
	`
	//Play bell sound
	const sound = document.querySelector('audio');
	//Reset time on bite when key is pressed
	sound.currentTime = 0;
	sound.play();
}

//Refresh page when refresh icon is clicked
let refresh = document.getElementById('refresh');

refresh.addEventListener('click', function() {
	location.reload();
})
