import React, { ReactNode } from "react";
import { ButtonProps } from "./additional-types";

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
  labelClassName?: string;
}

declare const TimeRangePicker: React.FC<TimeRangePickerProps>;

export { type TimeRangePickerProps, TimeRangePicker as default };
