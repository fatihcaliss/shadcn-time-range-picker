# TimeRangePicker

A flexible and customizable time range picker component built with React and shadcn/ui. This component allows users to select a start and end time from a list of predefined time options, with extensive customization options.

<img src="https://github.com/fatihcaliss/shadcn-time-range-picker/blob/master/time-range-picker-preview.gif?raw=true" alt="Package Preview" height="300">

## Features

- Select start and end times from a predefined list.
- Optional automatic sorting of start and end times.
- Customizable initial start and end times.
- Adjustable time step for generating time options.
- Optional Apply button with full customization support.
- Flexible layout options (row or column).
- Customizable labels and placeholders for start and end time selects.
- Built with shadcn/ui components for a consistent and elegant UI.
- TypeScript support for improved type safety and developer experience.
- Improved button customization with full support for shadcn/ui Button props.

## Installation

You can install the `TimeRangePicker` package via npm:

```bash
npm install shadcn-time-range-picker
```

## GitHub Repository

```
https://github.com/fatihcaliss/shadcn-time-range-picker
```

## Usage

Here's a simple example of how to use the TimeRangePicker component in your React application:

```tsx
import React from "react";
import TimeRangePicker from "shadcn-time-range-picker";

const App = () => {
  const handleTimeRangeChange = (timeRange: string) => {
    console.log(`Selected time range: ${timeRange}`);
  };

  return (
    <div>
      <h1>Select a Time Range</h1>
      <TimeRangePicker
        initialStartTime="08:00"
        initialEndTime="17:00"
        onTimeRangeChange={handleTimeRangeChange}
        sort={true}
        showApplyButton={true}
        layout="row"
        startTimeLabel="Work Start"
        endTimeLabel="Work End"
        step={15}
        buttonProps={{
          variant: "outline",
          className: "font-semibold",
        }}
      />
    </div>
  );
};

export default App;
```

## Props

The TimeRangePicker component accepts the following props:

| Prop                 | Type                        | Default             | Description                                                     |
| -------------------- | --------------------------- | ------------------- | --------------------------------------------------------------- |
| initialStartTime     | string                      | "00:00"             | The initial start time.                                         |
| initialEndTime       | string                      | "23:30"             | The initial end time.                                           |
| onTimeRangeChange    | (timeRange: string) => void | undefined           | Callback function that gets called when the time range changes. |
| sort                 | boolean                     | false               | If true, automatically sorts the start and end times.           |
| showApplyButton      | boolean                     | true                | If true, shows the Apply button.                                |
| layout               | 'row' \| 'column'           | 'row'               | Layout of the component (row or column).                        |
| startTimeLabel       | string                      | "Start Time"        | Label for the start time select.                                |
| endTimeLabel         | string                      | "End Time"          | Label for the end time select.                                  |
| startTimePlaceholder | string                      | "Select start time" | Placeholder for the start time select.                          |
| endTimePlaceholder   | string                      | "Select end time"   | Placeholder for the end time select.                            |
| step                 | number                      | 30                  | Time step in minutes for generating time options.               |
| applyButtonText      | string                      | "Apply"             | Button text                                                     |
| buttonProps          | ButtonProps                 | undefined           | Props to customize the Apply button (shadcn/ui Button props)    |
| labelClassName       | string                      | undefined           | CSS class(es) to apply to the label elements                    |

## Example Usage

### Basic Usage

```tsx
<TimeRangePicker
  initialStartTime="08:00"
  initialEndTime="17:00"
  onTimeRangeChange={(timeRange) => console.log(timeRange)}
  sort={true}
/>
```

### Advanced Usage with Customizations

```tsx
<TimeRangePicker
  initialStartTime="09:00"
  initialEndTime="18:00"
  onTimeRangeChange={(timeRange) => console.log(timeRange)}
  sort={true}
  showApplyButton={true}
  layout="column"
  startTimeLabel="Shift Start"
  endTimeLabel="Shift End"
  startTimePlaceholder="Select shift start"
  endTimePlaceholder="Select shift end"
  step={15}
  labelClassName="text-primary font-bold"
  buttonProps={{
    variant: "secondary",
    size: "sm",
    className: "font-bold text-primary",
  }}
/>
```

## Button Customization

The `buttonProps` prop allows full customization of the Apply button using shadcn/ui Button component props. This includes setting the variant, size, and adding custom classes. For example:

```tsx
<TimeRangePicker
  // ... other props
  buttonProps={{
    variant: "outline",
    size: "sm",
    className: "font-semibold text-primary hover:bg-primary/10",
  }}
/>
```

## Responsive Design

The TimeRangePicker component is designed to be responsive. When the `layout` prop is set to "row", it will automatically switch to a column layout on smaller screens for better mobile user experience.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License.
