import {
	Button,
	Image,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import React from 'react';

const GoalCockpit = ({
	onChangeText,
	inputValue,
	onAddButtonPressed,
	onCancelPressed,
	isVisible,
}) => {
	return (
		<Modal visible={isVisible} animationType='slide' style={styles.modal}>
			<View style={styles.inputContainer}>
				<Image
					source={require('../assets/images/goal.png')}
					style={styles.image}
				/>
				<TextInput
					value={inputValue}
					style={styles.inputEl}
					onChangeText={onChangeText}
					placeholder='Your Course Goal...'
					placeholderTextColor='#d4d4d4'
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonView}>
						<Button title='Add' onPress={onAddButtonPressed} />
					</View>
					<View style={styles.buttonView}>
						<Button
							title='cancel'
							onPress={onCancelPressed}
							color='#777'
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalCockpit;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: 'rgb(62, 14, 89)',
	},
	image: {
		width: 200,
		height: 200,
		marginHorizontal: 'auto',
		marginBottom: 30,
		marginTop: -100,
	},
	inputEl: {
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
		marginHorizontal: 20,
		color: 'white',
	},
	modal: {
		height: 400,
		marginHorizontal: 25,
		backgroundColor: '#ccc',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonView: {
		width: 100,
		margin: 20,
	},
});
