import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { GLView } from "expo-gl";
import { BarChart } from "react-native-chart-kit";

const StatisticsScreen = ({navigation}) => {
  const screenWidth = Dimensions.get("window").width - 40;

  const data = {
    labels: ["Proyecto 1", "Proyecto 2", "Proyecto 3"],
    datasets: [
      {
        data: [20, 45, 28]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => 'blue',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Apoyo recibido en los proyectos</Text>
            <BarChart
  data={data}
  width={screenWidth}
  height={300}
  yAxisLabel=""
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
        </View>
    );
}

function onContextCreate(gl) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 1, 1, 1);
  
    // Create vertex shader (shape & position)
    const vert = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      vert,
      `
      void main(void) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 150.0;
      }
    `
    );
    gl.compileShader(vert);
  
    // Create fragment shader (color)
    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      frag,
      `
      void main(void) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `
    );
    gl.compileShader(frag);
  
    // Link together into a program
    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);
  
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  
    gl.flush();
    gl.endFrameEXP();
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default StatisticsScreen;