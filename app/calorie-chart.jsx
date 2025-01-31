import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

function  CalorieChart() {

    return(
        <View style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <View style={styles.innerContainer}>
                <Text style={styles.textStyle}>Calories</Text>
                <Text style={[styles.textStyle, styles.goalText]}>Daily Calorie Goal: {caloriesGoal}</Text>
            </View>
            <BarChart
                data={barData}
                width={Dimensions.get("window").width * 0.95}
                height={220}
                yAxisLabel={"#"}
                chartConfig={chartConfig}
                fromZero
                withCustomBarColorFromData={true}
                flatColor={true}
                style={{
                    borderRadius: 16,
                }}
                showValuesOnTopOfBars
                showBarTops={false}
            />
        </View>
    )

}

const caloriesGoal = 3000;
const dataValues = [3100, 2000, 1900, 1500, 2500, 3000, 3500]

const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: dataValues,
            colors: dataValues.map((value) => (
                value > caloriesGoal ? (opacity = 1) => `rgba(224, 254, 16, ${opacity})` : (opacity = 1) => `rgba(0, 255, 255, ${opacity})`
            ))
        }
    ]
}

const chartConfig = {
    backgroundColor: '#2A2E37',
    backgroundGradientFrom: '#2A2E37',
    backgroundGradientTo: '#2A2E37',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.7,
    barRadius: 5,
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