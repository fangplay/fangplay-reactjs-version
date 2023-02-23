import React from 'react';

//date & time processing
export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();

    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return {
      date,
      time,
      wish
    };
  };


function Home(){

    const { date, time } = useDate();

    return (
            <div class="container">
                <h2 class="display-3">FANGPLAY Sirirak Official</h2>
                <p class="display-5">Welcome to my page on website.</p>
                <div class="container">
                <h2 class="display-5">The genius spectrum gamer.</h2>
                </div>
                <div class="container">
                    <h5 class="display-5">{date}<br />{time}</h5>
                </div>
            </div>
            
    );
}
export default Home;