import React, { useState, useEffect, ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";
import { Button } from "../components/Button";

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
  onTimeRangeChange?: (timeRange: string) => void;
  sort?: boolean;
  showApplyButton?: boolean;
  selectWidth?: string;
  selectHeight?: string;
  applyButtonText?: string;
  applyButtonClassName?: string;
  customApplyButton?: ReactNode;
  buttonPosition?: "row" | "column";
  startTimeLabel?: string;
  startTimePlaceholder?: string;
  endTimeLabel?: string;
  endTimePlaceholder?: string;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({
  initialStartTime = "00:00",
  initialEndTime = "23:30",
  onTimeRangeChange,
  sort = false,
  showApplyButton = true,
  selectWidth = "180px",
  selectHeight = "200px",
  applyButtonText = "Apply",
  applyButtonClassName = "",
  customApplyButton,
  buttonPosition = "row",
  startTimeLabel = "Start Time",
  startTimePlaceholder = "00:00",
  endTimeLabel = "End Time",
  endTimePlaceholder = "00:00",
}) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const timeOptions = generateTimeOptions();

  const sortTimes = (start: string, end: string) => {
    return start <= end ? [start, end] : [end, start];
  };

  const formatTimeRange = (start: string, end: string) => `${start}-${end}`;

  const handleTimeChange = (newStartTime: string, newEndTime: string) => {
    const [sortedStart, sortedEnd] = sort
      ? sortTimes(newStartTime, newEndTime)
      : [newStartTime, newEndTime];

    setStartTime(sortedStart);
    setEndTime(sortedEnd);

    if (!showApplyButton) {
      onTimeRangeChange?.(formatTimeRange(sortedStart, sortedEnd));
    }
  };

  useEffect(() => {
    if (sort) {
      const [sortedStart, sortedEnd] = sortTimes(startTime, endTime);
      setStartTime(sortedStart);
      setEndTime(sortedEnd);

      if (!showApplyButton) {
        onTimeRangeChange?.(formatTimeRange(sortedStart, sortedEnd));
      }
    }
  }, [sort]);

  const handleApply = () => {
    onTimeRangeChange?.(formatTimeRange(startTime, endTime));
  };

  const renderApplyButton = () => {
    if (customApplyButton) {
      return React.cloneElement(customApplyButton as React.ReactElement, {
        onClick: handleApply,
      });
    }
    return (
      <Button onClick={handleApply} className={applyButtonClassName}>
        {applyButtonText}
      </Button>
    );
  };

  return (
    <div
      className={`flex ${
        buttonPosition === "row" ? "space-x-4" : "space-y-4 flex-col"
      }`}
    >
      <div className="flex flex-col">
        <label>{startTimeLabel}</label>
        <Select
          value={startTime}
          onValueChange={(value) => handleTimeChange(value, endTime)}
        >
          <SelectTrigger className={`w-[${selectWidth}]`}>
            <SelectValue placeholder={startTimePlaceholder} />
          </SelectTrigger>
          <SelectContent className={`max-h-[${selectHeight}] overflow-y-auto`}>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
        <label>{endTimeLabel}</label>
        <Select
          value={endTime}
          onValueChange={(value) => handleTimeChange(startTime, value)}
        >
          <SelectTrigger className={`w-[${selectWidth}]`}>
            <SelectValue placeholder={endTimePlaceholder} />
          </SelectTrigger>
          <SelectContent className={`max-h-[${selectHeight}] overflow-y-auto`}>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {showApplyButton && renderApplyButton()}
    </div>
  );
};

export default TimeRangePicker;
