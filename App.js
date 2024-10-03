import { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
} from 'react-native';
import GoalCockpit from './components/GoalCockpit';
import GoalsList from './components/GoalsList';

export default function App() {
	const [goals, setGoals] = useState([
		{ id: 1, title: 'Study react native basics' },
		{ id: 2, title: 'Study styles in RN' },
		{ id: 3, title: 'Study react native APIs' },
	]);
	const [goalTitle, setGoalTitle] = useState('');

	const handleGoalInputChange = (titleInput) => {
		setGoalTitle(titleInput);
	};

	const handleAddBtnPress = () => {
		// if (goalTitle === '') return;
		setGoals((prevGoals) => [
			...prevGoals,
			{ id: prevGoals.length + 1, title: goalTitle },
		]);
		// setGoalTitle('');
	};
	return (
		<View style={styles.container}>
			<GoalCockpit
				inputValue={goalTitle}
				onChangeText={handleGoalInputChange}
				onPress={handleAddBtnPress}
			/>
			<GoalsList data={goals} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		padding: 30,
		// paddingHorizontal: 16,
	},
});
