export function getCurrentDate() {
  let GameDate = new Date();
  let DateYear = GameDate.getFullYear();
  let DateMonth =
    GameDate.getMonth() + 1 < 10
      ? "0" + (GameDate.getMonth() + 1)
      : GameDate.getMonth() + 1;
  let DateDay =
    GameDate.getDate() < 10 ? "0" + GameDate.getDate() : GameDate.getDate();
  let DateHour =
    GameDate.getHours() < 10 ? "0" + GameDate.getHours() : GameDate.getHours();
  let DateMinute =
    GameDate.getMinutes() < 10
      ? "0" + GameDate.getMinutes()
      : GameDate.getMinutes();

  GameDate =
    DateDay +
    "-" +
    DateMonth +
    "-" +
    DateYear +
    " " +
    DateHour +
    ":" +
    DateMinute;

  return GameDate;
}
