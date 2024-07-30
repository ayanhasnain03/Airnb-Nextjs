"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
interface CalenderProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabled?: boolean;
  disabledDates: Date[];
}
const Calender: React.FC<CalenderProps> = ({
  value,
  onChange,
  disabledDates,
  disabled,
}) => {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    ></DateRange>
  );
};
export default Calender;
