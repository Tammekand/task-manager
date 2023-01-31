import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function Task(props) {
	return (
		<View style={styles.item}>
			<View style={styles.task}>
				<Image
					style={styles.icon}
					source={require("../assets/task-ico.png")}
				></Image>
				<Text style={styles.text}>{props.text}</Text>
			</View>
			<View>
				<Pressable onPress={() => props.handleDelete(props.index)}>
					<Text style={styles.delete}>X</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#FFF",
		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	task: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	text: {
		maxWidth: "100%",
	},
	delete: {
		paddingHorizontal: 10,
		color: "#FF0000",
		fontWeight: "bold",
		fontSize: 15,
	},
});
