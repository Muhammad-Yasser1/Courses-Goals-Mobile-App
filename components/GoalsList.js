import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalsList = ({ data }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				data={data}
				// keyExtractor={(item, index) => item.id} // by default it extracts key and id prop
				renderItem={(itemData) => {
					return (
						<View style={styles.goalItemContainer}>
							<Text style={styles.goalItemText}>
								{itemData.item.title}
							</Text>
						</View>
					);
				}}
			></FlatList>
		</View>
	);
};

export default GoalsList;

const styles = StyleSheet.create({
	listContainer: {
		alignContent: 'center',
	},
	goalItemContainer: {
		backgroundColor: 'rgb(115, 38, 159)',
		borderColor: '#aaa',
		borderRadius: 5,
		borderWidth: 1,
		padding: 10,
		marginBottom: 15,
	},
	goalItemText: {
		color: 'white',
		fontSize: 15,
	},
});
