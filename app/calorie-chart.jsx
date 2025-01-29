import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

function  CalorieChart() {

    return(
        <View style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <View style={styles.innerContainer}>
                <Text style={styles.textStyle}>Calories</Text>
                <Text style={[styles.textStyle, styles.goalText]}>Daily Calorie Goal: 3500</Text>
            </View>
            <BarChart
                data={barData}
                width={Dimensions.get("window").width * 0.95}
                height={220}
                yAxisLabel={"#"}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                fromZero
                style={{
                    borderRadius: 16,
                }}
            />
        </View>
    )

}

const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: [2300, 2000, 1900, 1500, 2500, 3000, 3500]
        }
    ]
}

const chartConfig = {
    backgroundColor: '#1E2923',
    backgroundGradientFrom: '#08130D',
    backgroundGradientTo: '#1F1E30',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.5,
}

const styles = StyleSheet.create(
    {
        innerContainer: {
            width: Dimensions.get("window").width * 0.9,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        textStyle: {
            color: "white",
            textTransform: "uppercase",
        },
        goalText: {
            color: "#7E8188",
        }
    }
)

export default CalorieChart;