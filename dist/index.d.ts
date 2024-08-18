import React$1 from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

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

declare const TimeRangePicker: React$1.FC<TimeRangePickerProps>;

export { type TimeRangePickerProps, TimeRangePicker as default };
