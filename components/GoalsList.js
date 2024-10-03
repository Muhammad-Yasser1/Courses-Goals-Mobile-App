import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalsList = ({ data, onItemPress }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				data={data}
				// keyExtractor={(item, index) => item.id} // by default it extracts key and id prop
				renderItem={(itemData) => {
					return (
						<View style={styles.goalItemContainer}>
							<Pressable
								android_ripple={{ color: 'rgb(48, 11, 70)' }}
								// style={(pressData) =>
								// 	pressData.pressed && styles.goalPressed
								// } // for ios
								onPress={() => onItemPress(itemData.item.id)}
							>
								<Text style={styles.goalItemText}>
									{itemData.item.title}
								</Text>
							</Pressable>
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
		marginTop: 25,
	},
	goalItemContainer: {
		backgroundColor: 'rgb(115, 38, 159)',
		borderColor: '#aaa',
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 15,
	},
	goalItemText: {
		color: 'white',
		fontSize: 15,
		padding: 10,
	},
	goalPressed: {
		backgroundColor: '#300b46',
	},
});
