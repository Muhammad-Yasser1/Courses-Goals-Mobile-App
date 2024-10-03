import { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
	Pressable,
} from 'react-native';
import GoalCockpit from './components/GoalCockpit';
import GoalsList from './components/GoalsList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [goals, setGoals] = useState([
		{ id: 1, title: 'Study react native basics' },
		{ id: 2, title: 'Study styles in RN' },
		{ id: 3, title: 'Study react native APIs' },
	]);
	const [goalTitle, setGoalTitle] = useState('');
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const handleGoalInputChange = (titleInput) => {
		setGoalTitle(titleInput);
	};

	const handleAddBtnPress = () => {
		if (goalTitle === '') return;
		setGoals((prevGoals) => [
			...prevGoals,
			{ id: prevGoals.length + 1, title: goalTitle },
		]);
		setGoalTitle('');
		setModalIsVisible(false);
	};

	const deleteGoal = (id) => {
		setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
	};

	const handleCancelBtnPress = () => {
		setModalIsVisible(false);
	};

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.container}>
				<View style={styles.addButton}>
					<Pressable onPress={() => setModalIsVisible(true)}>
						<Text style={styles.plusSign}>+</Text>
					</Pressable>
				</View>
				<GoalCockpit
					inputValue={goalTitle}
					onChangeText={handleGoalInputChange}
					onAddButtonPressed={handleAddBtnPress}
					isVisible={modalIsVisible}
					onCancelPressed={handleCancelBtnPress}
				/>
				<GoalsList data={goals} onItemPress={deleteGoal} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		padding: 30,
		// paddingHorizontal: 16,
	},
	addButton: {
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 'auto',
		backgroundColor: 'rgb(14, 21, 219)',
	},
	plusSign: {
		color: 'white',
		fontSize: 22,
		padding: 10,
	},
});
