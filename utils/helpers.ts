const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const timeStampToDate = (time) => {
    const date = new Date(parseInt(time));
    const today = new Date();
    let day = days[date.getDay()];
    if (date.toDateString() === today.toDateString()){
        day = "Today";
    }
    return `${day} ${date.getMonth()+1}/${date.getDate()}`;
  };

  export const timeStampToDateWithMonth = (time) => {
    const date = new Date(parseInt(time));
    const today = new Date();
    let day = days[date.getDay()];
    if (date.toDateString() === today.toDateString()){
        day = "Today";
    }
    return `${day} ${months[date.getMonth()+1]} ${date.getDate()}`;
  };  

  export const timeToTime = (time) => {
    const date = new Date(parseInt(time));
    return `${date.getHours()}:${date.getMinutes()}`
  };