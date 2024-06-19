function getCurrentTime() {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
  const day = currentDate.getDate().toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const time = `${month}/${day}/${year}, ${hours}:${minutes} ${meridiem}`;
  return time;
}

module.exports = getCurrentTime;
