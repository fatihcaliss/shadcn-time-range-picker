import React, { ReactNode } from "react";

export interface TimeRangePickerProps {
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

declare const TimeRangePicker: React.FC<TimeRangePickerProps>;

export default TimeRangePicker;
