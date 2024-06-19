function getTimestamp() {
    const date = new Date();
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();
    const year = date.getFullYear() % 100; // Get last two digits of the year
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Convert hours to 12-hour format
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
  
    return `${month}/${day}/${year}, ${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
  }
  
  export default getTimestamp;