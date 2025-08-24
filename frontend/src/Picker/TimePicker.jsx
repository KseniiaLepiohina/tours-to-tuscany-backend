import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime, } from "../slices/dateSlice";

export default function TimePicker() {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.datepicker.selectedTime);

  const Time = [
    { id: 0, label: "Select time",value:"", },
    { id: 1, label: "13:00", value: new Date().setHours(13, 0, 0, 0) },
    { id: 2, label: "15:00", value: new Date().setHours(15, 0, 0, 0) },
    { id: 3, label: "17:00", value: new Date().setHours(17, 0, 0, 0) },
  ];

  const handleTimeChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    const selectedOption = Time.find((t) => t.value === selectedValue);

    if (selectedOption) {
      dispatch(setTime(selectedOption.label));
    }
  };

  return (
    <section className="custom_container">
      <select value={selectedTime || ""} onChange={handleTimeChange}>
        <option value="" disabled>
          Choose a time
        </option>
        {Time.map((time) => (
          <option key={time.id} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>
      {/* <h3>Selected time is: {selectedTime || "None"}</h3> */}
    </section>
  );
}
