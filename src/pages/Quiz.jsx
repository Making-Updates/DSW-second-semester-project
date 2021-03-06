import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
	useIonViewDidLeave,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import Quiz from '../components/Quiz/Quiz';
import DifficultySelect from '../components/Quiz/DifficultySelect';
import CategorySelect from '../components/Quiz/CategorySelect';
import Offline from '../components/Quiz/Offline';
import {
	QuizCategoryContext,
	QuizDifficultyContext,
	QuizDataContext,
	QuizScoreContext,
	QuizShowScoreContext,
} from '../context/QuizContext';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import { fetchQuizData } from '../api';
import Score from '../components/Quiz/Score';
import { useNetwork } from '../context/NetworkContext';

const Page = () => {
	const [page, setPage] = useState(null);
	const [category, setCategory] = useState(null);
	const [difficulty, setDifficulty] = useState(null);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [quizData, setQuizData] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const { networkStatus } = useNetwork();

	function setDefaultOptions() {
		setCategory(null);
		setDifficulty(null);
		setError(false);
		setErrorMessage(null);
		setQuizData(null);
		setScore(0);
		setShowScore(false);
	}

	useIonViewDidEnter(() => {
		setDefaultOptions();
	});

	useIonViewDidLeave(() => {
		setPage('category');
	});

	function renderSwitch(param) {
		switch (param) {
			case 'category':
				return <CategorySelect />;
			case 'difficulty':
				return <DifficultySelect />;
			case 'quiz':
				return <Quiz data={quizData} />;
			case 'score':
				return (
					<Score
						score={score}
						category={category}
						difficulty={difficulty}
					/>
				);
			case 'offline':
				return <Offline />;
			default:
				return <CategorySelect />;
		}
	}

	useEffect(() => {
		if (category != null) {
			setPage('difficulty');
		}
	}, [category]);

	useEffect(() => {
		if (difficulty != null) {
			setIsLoading(true);
			const fetchMyAPI = async () => {
				let cat = 'code';
				if (category === 'mysql') cat = 'sql';
				const quiz = await fetchQuizData(cat, difficulty, category);
				setQuizData(quiz.data.questions);
				setPage('quiz');
				setIsLoading(false);
			};

			fetchMyAPI();
		}
	}, [difficulty]);

	useEffect(() => {
		if (showScore !== false) {
			setPage('score');
		}
	}, [showScore]);

	useEffect(() => {
		setIsLoading(true);
		networkStatus ? setPage('category') : setPage('offline');
		setIsLoading(false);
	}, []);

	useEffect(() => {
		setIsLoading(true);
		networkStatus ? setPage('category') : setPage('offline');
		setIsLoading(false);
	}, [networkStatus]);

	return (
		<QuizCategoryContext.Provider value={[category, setCategory]}>
			<QuizDifficultyContext.Provider value={[difficulty, setDifficulty]}>
				<QuizDataContext.Provider value={[quizData, setQuizData]}>
					<QuizScoreContext.Provider value={[score, setScore]}>
						<QuizShowScoreContext.Provider
							value={[showScore, setShowScore]}
						>
							<IonPage>
								<IonHeader>
									<IonToolbar>
										<IonButtons slot='start'>
											<IonMenuButton />
										</IonButtons>
										<IonTitle>Quiz</IonTitle>
									</IonToolbar>
								</IonHeader>

								<IonContent fullscreen>
									<IonHeader collapse='condense'>
										<IonToolbar>
											<IonTitle size='large'>
												Quiz
											</IonTitle>
										</IonToolbar>
									</IonHeader>
									{isLoading ? (
										<LoadingIcon />
									) : (
										renderSwitch(page)
									)}
								</IonContent>
							</IonPage>
						</QuizShowScoreContext.Provider>
					</QuizScoreContext.Provider>
				</QuizDataContext.Provider>
			</QuizDifficultyContext.Provider>
		</QuizCategoryContext.Provider>
	);
};

export default Page;
