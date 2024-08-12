import React, { ReactNode } from 'react';

interface TimeRangePickerProps {
  initialStartTime?: string;
  initialEndTime?: string;
  onTimeRangeChange?: (startTime: string, endTime: string) => void;
  sort?: boolean;
  showApplyButton?: boolean;
  selectWidth?: string;
  selectHeight?: string;
  applyButtonText?: string;
  applyButtonClassName?: string;
  customApplyButton?: ReactNode;
}

declare const TimeRangePicker: React.FC<TimeRangePickerProps>;

export { type TimeRangePickerProps, TimeRangePicker as default };
