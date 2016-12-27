const validityTime = 12 * 60 * 60 * 1000; // 12 hours

export default {
  set(key, value, expiration = validityTime) {
    const record = {
      value: JSON.stringify(value),
      timestamp: Date.now() + expiration,
    };
    localStorage.setItem(key, JSON.stringify(record));
  },
  get(key) {
    const item = localStorage.getItem(key);
    if (item) {
      const record = JSON.parse(item);
      if (Date.now() < record.timestamp) {
        return JSON.parse(record.value);
      }
      return localStorage.removeItem(key);
    }
    return null;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
