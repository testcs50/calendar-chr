import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Calendar = () => {
  const [currentGap, setCurrentGap] = useState(1);
  const gaps = useSelector((store: any) => store.calendar.gapsInHistory);

  const totalCount = Object.keys(gaps).length,
    currentDates = gaps[currentGap].dates,
    currentEvents = gaps[currentGap].events;

  function onSelectGap(gap: number) {
    if (gap === 0) {
      return
    } else if (gap > totalCount) {
      return
    }
    setCurrentGap(gap)
  };

  return (
    <>
      <Header />
      <Main
        totalCount={totalCount}
        dates={currentDates}
        currentGap={currentGap}
        setCurrentGap={onSelectGap} />
      <Footer
        total={totalCount}
        currentGap={currentGap}
        setCurrentGap={onSelectGap}
        events={currentEvents} />
    </>
  )
};

export default Calendar;
