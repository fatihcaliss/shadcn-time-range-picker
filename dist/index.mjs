var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/TimeRangePicker.tsx
import React3, { useState, useEffect } from "react";

// src/components/Select.tsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

// src/lib/util.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React.createElement(ChevronDown, { className: "h-4 w-4 opacity-50" }))
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.ScrollUpButton,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React.createElement(ChevronUp, { className: "h-4 w-4" })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.ScrollDownButton,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React.createElement(ChevronDown, { className: "h-4 w-4" })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ React.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React.createElement(
    SelectPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props),
    /* @__PURE__ */ React.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React.createElement(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )
      },
      children
    ),
    /* @__PURE__ */ React.createElement(SelectScrollDownButton, null)
  ));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React.createElement(Check, { className: "h-4 w-4" }))),
    /* @__PURE__ */ React.createElement(SelectPrimitive.ItemText, null, children)
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/Button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React2.createElement(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// src/components/TimeRangePicker.tsx
var generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      options.push(time);
    }
  }
  return options;
};
var TimeRangePicker = ({
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
  endTimeLabel = "End Time"
}) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const timeOptions = generateTimeOptions();
  const sortTimes = (start, end) => {
    return start <= end ? [start, end] : [end, start];
  };
  const formatTimeRange = (start, end) => `${start}-${end}`;
  const handleTimeChange = (newStartTime, newEndTime) => {
    const [sortedStart, sortedEnd] = sort ? sortTimes(newStartTime, newEndTime) : [newStartTime, newEndTime];
    setStartTime(sortedStart);
    setEndTime(sortedEnd);
    if (!showApplyButton) {
      onTimeRangeChange == null ? void 0 : onTimeRangeChange(formatTimeRange(sortedStart, sortedEnd));
    }
  };
  useEffect(() => {
    if (sort) {
      const [sortedStart, sortedEnd] = sortTimes(startTime, endTime);
      setStartTime(sortedStart);
      setEndTime(sortedEnd);
      if (!showApplyButton) {
        onTimeRangeChange == null ? void 0 : onTimeRangeChange(formatTimeRange(sortedStart, sortedEnd));
      }
    }
  }, [sort]);
  const handleApply = () => {
    onTimeRangeChange == null ? void 0 : onTimeRangeChange(formatTimeRange(startTime, endTime));
  };
  const renderApplyButton = () => {
    if (customApplyButton) {
      return React3.cloneElement(customApplyButton, {
        onClick: handleApply
      });
    }
    return /* @__PURE__ */ React3.createElement(Button, { onClick: handleApply, className: applyButtonClassName }, applyButtonText);
  };
  const renderTimeSelect = (value, onChange, label) => /* @__PURE__ */ React3.createElement("div", { className: "flex flex-col space-y-2" }, /* @__PURE__ */ React3.createElement("label", { className: "text-sm font-medium" }, label), /* @__PURE__ */ React3.createElement(Select, { value, onValueChange: onChange }, /* @__PURE__ */ React3.createElement(SelectTrigger, { className: `w-[${selectWidth}]` }, /* @__PURE__ */ React3.createElement(SelectValue, { placeholder: label })), /* @__PURE__ */ React3.createElement(SelectContent, { className: `max-h-[${selectHeight}] overflow-y-auto` }, timeOptions.map((time) => /* @__PURE__ */ React3.createElement(SelectItem, { key: time, value: time }, time)))));
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: `flex ${buttonPosition === "column" ? "flex-col space-y-4" : "flex-row space-x-4"}`
    },
    /* @__PURE__ */ React3.createElement("div", { className: "flex space-x-4" }, renderTimeSelect(
      startTime,
      (value) => handleTimeChange(value, endTime),
      startTimeLabel
    ), renderTimeSelect(
      endTime,
      (value) => handleTimeChange(startTime, value),
      endTimeLabel
    )),
    showApplyButton && renderApplyButton()
  );
};
var TimeRangePicker_default = TimeRangePicker;

// src/index.tsx
var src_default = TimeRangePicker_default;
export {
  src_default as default
};
