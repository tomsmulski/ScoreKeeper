function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const LocalStorageKeyNameGame = "ScoreKeeper";
const LocalStorageKeyNameHistory = "ScoreKeeperHistory";

export {
  getLocalStorage,
  setLocalStorage,
  LocalStorageKeyNameGame,
  LocalStorageKeyNameHistory,
};
