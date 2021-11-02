import axios from 'axios';

const twitterURL = 'https://api.waaiez.repl.co/twitter';
const youtubeURL = 'https://api.waaiez.repl.co/youtube';
const mlhURL = 'https://api.waaiez.repl.co/mlh';
const quizURL = 'https://api.waaiez.repl.co/quiz';

export const fetchTwitterData = async () => {
	try {
		const data = await axios.get(twitterURL);
		return data;
	} catch (error) {
		return 'Error';
	}
};

export const fetchYoutubeData = async () => {
	try {
		const data = await axios.get(youtubeURL);
		return data;
	} catch (error) {
		return 'Error';
	}
};

export const fetchMlhData = async () => {
	try {
		const data = await axios.get(mlhURL);
		return data;
	} catch (error) {
		return 'Error';
	}
};

export const fetchQuizData = async (category, difficulty, tag) => {
	try {
		const data = await axios.get(
			`${quizURL}/${category}/${difficulty}/10/${tag}`
		);
		return data;
	} catch (error) {
		return error;
	}
};
