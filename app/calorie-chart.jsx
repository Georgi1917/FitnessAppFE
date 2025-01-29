import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

function  CalorieChart() {

    return(
        <BarChart
            data={barData}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel={"#"}
            chartConfig={chartConfig}
        />
    )

}

const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: [2300, 2000, 1900, 1500, 2500, 3000, 3100]
        }
    ]
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
}

export default CalorieChart;