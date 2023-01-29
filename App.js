import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import Task from "./components/Task";

export default function App() {
	const [task, setTask] = useState();
	const [tasks, setTasks] = useState([]);

	const handleAddTask = () => {
		setTasks([...tasks, task]);
		setTask(null);
	};

	const handleDeleteTask = (index) => {
		let newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.title}>Tasks</Text>
				<View style={styles.items}>
					{tasks.map((task, index) => {
						return (
							<Pressable
								key={index}
								onPress={() => handleDeleteTask(index)}
							>
								<Task text={task} />
							</Pressable>
						);
					})}
				</View>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.taskInput}
			>
				<TextInput
					style={styles.input}
					placeholder={"Write a task"}
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<Pressable
					onPress={() => {
						handleAddTask();
					}}
					style={({ pressed }) => [
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				>
					<Text style={styles.add}>+</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: "#D3D3D3",
		paddingTop: 60,
	},
	tasksWrapper: {},
	title: {
		color: "#1E1E1E",
		fontSize: 50,
		fontWeight: "bold",
		marginBottom: 20,
	},
	items: {},
	taskInput: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "#FFF",
		position: "absolute",
		bottom: 60,
		width: "100%",
		marginLeft: 20,
	},
	input: {
		padding: 15,
	},
	add: {
		color: "green",
		fontSize: 30,
		paddingRight: 10,
	},
});
