import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
		setGoals((prevGoals) => [
			...prevGoals,
			{ id: prevGoals.length + 1, title: goalTitle },
		]);
		setGoalTitle('');
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					value={goalTitle}
					style={styles.inputEl}
					onChangeText={handleGoalInputChange}
					placeholder='Your Course Goal...'
				/>
				<Button title='Add' onPress={handleAddBtnPress} />
			</View>
			<View style={styles.listContainer}>
				{goals.map((goal) => {
					return (
						<View style={styles.goalItemContainer} key={goal.id}>
							<Text style={styles.goalItemText}>
								{goal.title}
							</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,
	},
	inputContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 25,
	},
	inputEl: {
		flex: 1,
		borderColor: '#ccc',
		borderBottomWidth: 1,
		padding: 0,
		marginRight: 10,
	},
	listContainer: {
		height: 500,
		alignContent: 'center',
	},
	goalItemContainer: {
		backgroundColor: 'rgb(115, 38, 159)',
		borderColor: '#aaa',
		borderRadius: 2,
		borderWidth: 1,
		padding: 10,
		marginBottom: 15,
	},
	goalItemText: {
		color: 'white',
		fontSize: 17,
	},
});
