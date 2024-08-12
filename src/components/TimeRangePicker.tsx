import React, { useState, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";
import { Button, ButtonProps } from "../components/Button";
import { cn } from "../lib/util";

const generateTimeOptions = (step: number) => {
  const options: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += step) {
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
  applyButtonText?: string;
  startTimeLabel?: string;
  startTimePlaceholder?: string;
  endTimeLabel?: string;
  endTimePlaceholder?: string;
  layout?: "row" | "column";
  step?: number;
  buttonProps?: ButtonProps;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({
  initialStartTime = "00:00",
  initialEndTime = "23:30",
  onTimeRangeChange,
  sort = false,
  showApplyButton = true,
  applyButtonText = "Apply",
  startTimeLabel = "Start Time",
  startTimePlaceholder = "Select start time",
  endTimeLabel = "End Time",
  endTimePlaceholder = "Select end time",
  layout = "row",
  step = 30,
  buttonProps,
}) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  const timeOptions = useMemo(() => generateTimeOptions(step), [step]);

  const sortTimes = (start: string, end: string): [string, string] => {
    return start <= end ? [start, end] : [end, start];
  };

  const formatTimeRange = (start: string, end: string): string =>
    `${start}-${end}`;

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
  }, [sort, startTime, endTime, showApplyButton, onTimeRangeChange]);

  const handleApply = () => {
    onTimeRangeChange?.(formatTimeRange(startTime, endTime));
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        layout === "column"
          ? "flex-col space-y-4"
          : "flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
      )}
    >
      <div
        className={cn(
          layout === "column"
            ? "space-y-4"
            : "flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
        )}
      >
        <div className="flex flex-col space-y-2 items-center justify-center">
          {startTimeLabel && (
            <label htmlFor="start-time">{startTimeLabel}</label>
          )}
          <Select
            value={startTime}
            onValueChange={(value) => handleTimeChange(value, endTime)}
          >
            <SelectTrigger id="start-time" className="w-[180px]">
              <SelectValue placeholder={startTimePlaceholder} />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {timeOptions.map((time) => (
                <SelectItem key={`start-${time}`} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          {endTimeLabel && <label htmlFor="end-time">{endTimeLabel}</label>}
          <Select
            value={endTime}
            onValueChange={(value) => handleTimeChange(startTime, value)}
          >
            <SelectTrigger id="end-time" className="w-[180px]">
              <SelectValue placeholder={endTimePlaceholder} />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {timeOptions.map((time) => (
                <SelectItem key={`end-${time}`} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {showApplyButton && (
        <Button
          onClick={handleApply}
          className={cn(
            layout === "column"
              ? "w-full sm:w-auto"
              : "w-full sm:w-auto mt-4 sm:mt-0",
            buttonProps?.className
          )}
          {...buttonProps}
        >
          {applyButtonText}
        </Button>
      )}
    </div>
  );
};

export default TimeRangePicker;
