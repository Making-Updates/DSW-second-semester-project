import axios from 'axios';

const twitterURL = 'https://api.waaiez.repl.co/twitter';
const youtubeURL = 'https://api.waaiez.repl.co/youtube';
const mlhURL = 'https://api.waaiez.repl.co/mlh';
const quizURL = 'https://api.waaiez.repl.co/quiz'


export const fetchTwitterData = async () => {
    try {
        const data = await axios.get(twitterURL);
        return data;
    } catch (error) {
        return error;
    }
};
export const fetchYoutubeData = async () => {
    try {
        const data = await axios.get(youtubeURL);
        return data;

    } catch (error) {
        return error;
    }
};