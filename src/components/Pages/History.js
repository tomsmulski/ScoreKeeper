import History from "./../History/History";
import {
  getLocalStorage,
  LocalStorageKeyNameHistory,
} from "../LocalStorage/Storage";

export function HistoryPage() {
  let historyStorage = getLocalStorage(LocalStorageKeyNameHistory);

  return (
    <>
      <h2>Previous Games</h2>
      {historyStorage !== null ? (
        <div>Total Played Games {historyStorage.length}</div>
      ) : (
        ""
      )}

      {historyStorage !== null ? (
        historyStorage.map((game) => {
          return <History key={game.id} game={game} />;
        })
      ) : (
        <div>No History</div>
      )}
    </>
  );
}
