# TimeRangePicker

A flexible and customizable time range picker component built with React and ShadCN UI. This component allows users to select a start and end time from a list of predefined time options, with extensive customization options.

## Features

- Select start and end times from a predefined list.
- Optional automatic sorting of start and end times.
- Customizable initial start and end times.
- Adjustable width and height for select items.
- Optional Apply button with customization options.
- Built with ShadCN UI components for a consistent and elegant UI.

## Installation

You can install the `TimeRangePicker` package via npm:

```bash
npm install shadcn-time-range-picker
```

## GitHub Repository

```bash
https://github.com/fatihcaliss/shadcn-time-range-picker
```

## Usage

Here's a simple example of how to use the TimeRangePicker component in your React application:

```tsx
import React from "react";
import TimeRangePicker from "time-range-picker";

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
        selectWidth="200px"
        selectHeight="250px"
        applyButtonText="Save Time Range"
      />
    </div>
  );
};

export default App;
```

## Props

The TimeRangePicker component accepts the following props:

| Prop                 | Type                        | Default   | Description                                                     |
| -------------------- | --------------------------- | --------- | --------------------------------------------------------------- |
| initialStartTime     | string                      | "00:00"   | The initial start time.                                         |
| initialEndTime       | string                      | "23:30"   | The initial end time.                                           |
| onTimeRangeChange    | (timeRange: string) => void | undefined | Callback function that gets called when the time range changes. |
| sort                 | boolean                     | false     | If true, automatically sorts the start and end times.           |
| showApplyButton      | boolean                     | true      | If true, shows the Apply button.                                |
| selectWidth          | string                      | "180px"   | Width of the select components.                                 |
| selectHeight         | string                      | "200px"   | Max height of the select content, enabling scrolling.           |
| applyButtonText      | string                      | "Apply"   | Text to display on the Apply button.                            |
| applyButtonClassName | string                      | ""        | Additional CSS classes for the Apply button.                    |
| customApplyButton    | ReactNode                   | undefined | Custom Apply button component.                                  |

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
  selectWidth="220px"
  selectHeight="300px"
  applyButtonText="Save Range"
  applyButtonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
/>
```

### Using a Custom Apply Button

```tsx
const CustomButton = ({ onClick, children }) => (
  <button onClick={onClick} className="custom-button">
    {children}
  </button>
);

<TimeRangePicker
  onTimeRangeChange={(timeRange) => console.log(timeRange)}
  showApplyButton={true}
  customApplyButton={<CustomButton>Custom Apply</CustomButton>}
/>;
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License.
