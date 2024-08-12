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
  endTimeLabel?: string;
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
  buttonPosition = "column",
  startTimeLabel = "Start Time",
  endTimeLabel = "End Time",
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

  const renderTimeSelect = (
    value: string,
    onChange: (value: string) => void,
    label: string
  ) => (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-[${selectWidth}]`}>
          <SelectValue placeholder={label} />
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
  );

  return (
    <div
      className={`flex ${
        buttonPosition === "column"
          ? "flex-col space-y-4"
          : "flex-row space-x-4"
      }`}
    >
      <div className="flex space-x-4">
        {renderTimeSelect(
          startTime,
          (value) => handleTimeChange(value, endTime),
          startTimeLabel
        )}
        {renderTimeSelect(
          endTime,
          (value) => handleTimeChange(startTime, value),
          endTimeLabel
        )}
      </div>
      {showApplyButton && renderApplyButton()}
    </div>
  );
};

export default TimeRangePicker;
