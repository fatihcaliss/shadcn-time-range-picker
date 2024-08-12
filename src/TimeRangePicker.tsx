import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/Select";
import { Button } from "../src/components/Button";

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      options.push(time);
    }
  }
  return options;
};

interface TimeRangePickerProps {
  initialStartTime?: string;
  initialEndTime?: string;
  onTimeRangeChange?: (startTime: string, endTime: string) => void;
  sort?: boolean;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({
  initialStartTime = "00:00",
  initialEndTime = "23:30",
  onTimeRangeChange,
  sort = false,
}) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const timeOptions = generateTimeOptions();

  const sortTimes = (start: string, end: string) => {
    if (start > end) {
      return [end, start];
    }
    return [start, end];
  };

  const handleTimeChange = (newStartTime: string, newEndTime: string) => {
    if (sort) {
      const [sortedStart, sortedEnd] = sortTimes(newStartTime, newEndTime);
      setStartTime(sortedStart);
      setEndTime(sortedEnd);
      onTimeRangeChange?.(sortedStart, sortedEnd);
    } else {
      setStartTime(newStartTime);
      setEndTime(newEndTime);
      onTimeRangeChange?.(newStartTime, newEndTime);
    }
  };

  useEffect(() => {
    if (sort) {
      const [sortedStart, sortedEnd] = sortTimes(startTime, endTime);
      setStartTime(sortedStart);
      setEndTime(sortedEnd);
      onTimeRangeChange?.(sortedStart, sortedEnd);
    }
  }, [sort]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Select
          value={startTime}
          onValueChange={(value) => handleTimeChange(value, endTime)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Start Time" />
          </SelectTrigger>
          <SelectContent>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={endTime}
          onValueChange={(value) => handleTimeChange(startTime, value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="End Time" />
          </SelectTrigger>
          <SelectContent>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={() => console.log(`Selected range: ${startTime} - ${endTime}`)}
      >
        Apply
      </Button>
    </div>
  );
};

export default TimeRangePicker;
