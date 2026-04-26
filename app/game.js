import { View } from "react-native";
import { COLORS, GRIDSIZE } from "../constants/AppConstant";
import { AppStyleSheet } from "../styles/AppStyleSheet";

function Game() {
  const getCellColor = (row, col) => {
    if (row < 6 && col < 6) return COLORS.RED;
    if (row < 6 && col > 8) return COLORS.GREEN;
    if (row > 8 && col < 6) return COLORS.BLUE;
    if (row > 8 && col > 8) return COLORS.YELLOW;
    if (row === 7 || col === 7) return COLORS.SAFE;
    return "#f0f0f0";
  };

  const renderRow = (rowIndex) => (
    <View key={rowIndex} style={AppStyleSheet.row}>
      {Array.from({ length: GRIDSIZE }).map((_, colIndex) => (
        <View
          key={colIndex}
          style={[
            AppStyleSheet.cell,
            { backgroundColor: getCellColor(rowIndex, colIndex) },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={AppStyleSheet.container}>
      {Array.from({ length: GRIDSIZE }).map((_, rowIndex) =>
        renderRow(rowIndex),
      )}
    </View>
  );
}

export default Game;
