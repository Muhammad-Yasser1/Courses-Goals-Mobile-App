import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const GoalCockpit = ({ onChangeText, inputValue, onPress }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={inputValue}
				style={styles.inputEl}
				onChangeText={onChangeText}
				placeholder='Your Course Goal...'
			/>
			<Button title='Add' onPress={onPress} />
		</View>
	);
};

export default GoalCockpit;

const styles = StyleSheet.create({
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
});
