"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/components/TimeRangePicker.tsx
var import_react = __toESM(require("react"));

// src/components/Select.tsx
var React = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react = require("lucide-react");

// src/lib/util.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
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
    /* @__PURE__ */ React.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React.createElement(import_lucide_react.ChevronDown, { className: "h-4 w-4 opacity-50" }))
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
    /* @__PURE__ */ React.createElement(import_lucide_react.ChevronUp, { className: "h-4 w-4" })
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
    /* @__PURE__ */ React.createElement(import_lucide_react.ChevronDown, { className: "h-4 w-4" })
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
    /* @__PURE__ */ React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React.createElement(import_lucide_react.Check, { className: "h-4 w-4" }))),
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
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
    const Comp = asChild ? import_react_slot.Slot : "button";
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
var generateTimeOptions = (step) => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += step) {
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
  applyButtonText = "Apply",
  startTimeLabel = "Start Time",
  startTimePlaceholder = "Select start time",
  endTimeLabel = "End Time",
  endTimePlaceholder = "Select end time",
  layout = "row",
  step = 30,
  buttonProps,
  labelClassName
}) => {
  const [startTime, setStartTime] = (0, import_react.useState)(initialStartTime);
  const [endTime, setEndTime] = (0, import_react.useState)(initialEndTime);
  const timeOptions = (0, import_react.useMemo)(() => generateTimeOptions(step), [step]);
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
  (0, import_react.useEffect)(() => {
    if (sort) {
      const [sortedStart, sortedEnd] = sortTimes(startTime, endTime);
      setStartTime(sortedStart);
      setEndTime(sortedEnd);
      if (!showApplyButton) {
        onTimeRangeChange == null ? void 0 : onTimeRangeChange(formatTimeRange(sortedStart, sortedEnd));
      }
    }
  }, [sort, startTime, endTime, showApplyButton, onTimeRangeChange]);
  const handleApply = () => {
    onTimeRangeChange == null ? void 0 : onTimeRangeChange(formatTimeRange(startTime, endTime));
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: cn(
        "flex",
        layout === "column" ? "flex-col space-y-4" : "flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
      )
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: cn(
          layout === "column" ? "space-y-4" : "flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
        )
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col space-y-2 items-center justify-center" }, startTimeLabel && /* @__PURE__ */ import_react.default.createElement("label", { htmlFor: "start-time", className: labelClassName }, startTimeLabel), /* @__PURE__ */ import_react.default.createElement(
        Select,
        {
          value: startTime,
          onValueChange: (value) => handleTimeChange(value, endTime)
        },
        /* @__PURE__ */ import_react.default.createElement(SelectTrigger, { id: "start-time", className: "w-[180px]" }, /* @__PURE__ */ import_react.default.createElement(SelectValue, { placeholder: startTimePlaceholder })),
        /* @__PURE__ */ import_react.default.createElement(SelectContent, { className: "max-h-[200px] overflow-y-auto" }, timeOptions.map((time) => /* @__PURE__ */ import_react.default.createElement(SelectItem, { key: `start-${time}`, value: time }, time)))
      )),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col space-y-2 items-center justify-center" }, endTimeLabel && /* @__PURE__ */ import_react.default.createElement("label", { htmlFor: "end-time", className: labelClassName }, endTimeLabel), /* @__PURE__ */ import_react.default.createElement(
        Select,
        {
          value: endTime,
          onValueChange: (value) => handleTimeChange(startTime, value)
        },
        /* @__PURE__ */ import_react.default.createElement(SelectTrigger, { id: "end-time", className: "w-[180px]" }, /* @__PURE__ */ import_react.default.createElement(SelectValue, { placeholder: endTimePlaceholder })),
        /* @__PURE__ */ import_react.default.createElement(SelectContent, { className: "max-h-[200px] overflow-y-auto" }, timeOptions.map((time) => /* @__PURE__ */ import_react.default.createElement(SelectItem, { key: `end-${time}`, value: time }, time)))
      ))
    ),
    showApplyButton && /* @__PURE__ */ import_react.default.createElement(
      Button,
      __spreadValues({
        onClick: handleApply,
        className: cn(
          layout === "column" ? "w-full sm:w-auto mt-4 sm:mt-0" : "w-full sm:w-auto mt-auto",
          buttonProps == null ? void 0 : buttonProps.className
        )
      }, buttonProps),
      applyButtonText
    )
  );
};
var TimeRangePicker_default = TimeRangePicker;

// src/index.tsx
var src_default = TimeRangePicker_default;
