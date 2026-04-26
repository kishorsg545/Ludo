import { View } from "react-native";
import { Token } from "../components/Token";
import { COLORS, GRIDSIZE } from "../constants/AppConstant";
import { TOKENPOSITIONS } from "../constants/TokenConstant";
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
      {Array.from({ length: GRIDSIZE }).map((_, colIndex) => {
        const cellColor = getCellColor(rowIndex, colIndex);

        let tokenColor = null;
        if (
          TOKENPOSITIONS.RED.some(([r, c]) => r === rowIndex && c === colIndex)
        ) {
          tokenColor = COLORS.RED;
          console.log(
            "Token placed at:",
            rowIndex,
            colIndex,
            "color:",
            tokenColor,
          );
        } else if (
          TOKENPOSITIONS.GREEN.some(
            ([r, c]) => r === rowIndex && c === colIndex,
          )
        ) {
          tokenColor = COLORS.GREEN;
        } else if (
          TOKENPOSITIONS.BLUE.some(([r, c]) => r === rowIndex && c === colIndex)
        ) {
          tokenColor = COLORS.BLUE;
        } else if (
          TOKENPOSITIONS.YELLOW.some(
            ([r, c]) => r === rowIndex && c === colIndex,
          )
        ) {
          tokenColor = COLORS.YELLOW;
        }

        return (
          <View
            key={colIndex}
            style={[AppStyleSheet.cell, { backgroundColor: cellColor }]}
          >
            {tokenColor && <Token color={tokenColor} />}
          </View>
        );
      })}
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
