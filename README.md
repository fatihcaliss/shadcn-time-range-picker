# TimeRangePicker

A flexible and easy-to-use time range picker component built with React and ShadCN UI. This component allows users to select a start and end time from a list of predefined time options.

## Features

- Select start and end times from a predefined list.
- Automatically sorts the start and end times if desired.
- Customizable with initial start and end times.
- Built with ShadCN UI components for a consistent and elegant UI.

## Installation

You can install the `TimeRangePicker` package via npm:

```bash
npm install time-range-picker
```

## Usage

Here's a simple example of how to use the TimeRangePicker component in your React application:

```ts
import React from "react";
import { TimeRangePicker } from "time-range-picker";

const App = () => {
  const handleTimeRangeChange = (startTime: string, endTime: string) => {
    console.log(`Selected time range: ${startTime} - ${endTime}`);
  };

  return (
    <div>
      <h1>Select a Time Range</h1>
      <TimeRangePicker
        initialStartTime="08:00"
        initialEndTime="17:00"
        onTimeRangeChange={handleTimeRangeChange}
        sort={true}
      />
    </div>
  );
};

export default App;
```

## Props

The TimeRangePicker component accepts the following props:
| Prop | Type | Default | Description |
|--------------------|----------------------------------------------|---------|-----------------------------------------------------------------------------|
| initialStartTime | string | "00:00" | The initial start time. |
| initialEndTime | string | "23:30" | The initial end time. |
| onTimeRangeChange | (startTime: string, endTime: string) => void | undefined | Callback function that gets called when the time range changes. |
| sort | boolean | false | If true, automatically sorts the start and end times. |

## Example Usage

```ts
<TimeRangePicker
  initialStartTime="08:00"
  initialEndTime="17:00"
  onTimeRangeChange={(start, end) => console.log(start, end)}
  sort={true}
/>
```

## Contributing

Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License.
