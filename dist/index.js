"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var src_exports = {};
__export(src_exports, {
    TimeRangePicker: function() {
        return TimeRangePicker_default;
    },
    default: function() {
        return src_default;
    }
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
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/Select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.Trigger, _object_spread({
        ref: ref,
        className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), children, /* @__PURE__ */ React.createElement(SelectPrimitive.Icon, {
        asChild: true
    }, /* @__PURE__ */ React.createElement(import_lucide_react.ChevronDown, {
        className: "h-4 w-4 opacity-50"
    })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.ScrollUpButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React.createElement(import_lucide_react.ChevronUp, {
        className: "h-4 w-4"
    }));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.ScrollDownButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React.createElement(import_lucide_react.ChevronDown, {
        className: "h-4 w-4"
    }));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React.createElement(SelectPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /* @__PURE__ */ React.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React.createElement(SelectPrimitive.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children), /* @__PURE__ */ React.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React.createElement(import_lucide_react.Check, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React.createElement(SelectPrimitive.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React.createElement(SelectPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
// src/components/Button.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
});
var Button = React2.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React2.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/TimeRangePicker.tsx
var generateTimeOptions = function(step) {
    var options = [];
    for(var hour = 0; hour < 24; hour++){
        for(var minute = 0; minute < 60; minute += step){
            var time = "".concat(hour.toString().padStart(2, "0"), ":").concat(minute.toString().padStart(2, "0"));
            options.push(time);
        }
    }
    return options;
};
var TimeRangePicker = function(param) {
    var _param_initialStartTime = param.initialStartTime, initialStartTime = _param_initialStartTime === void 0 ? "00:00" : _param_initialStartTime, _param_initialEndTime = param.initialEndTime, initialEndTime = _param_initialEndTime === void 0 ? "23:30" : _param_initialEndTime, onTimeRangeChange = param.onTimeRangeChange, _param_sort = param.sort, sort = _param_sort === void 0 ? false : _param_sort, _param_showApplyButton = param.showApplyButton, showApplyButton = _param_showApplyButton === void 0 ? true : _param_showApplyButton, _param_applyButtonText = param.applyButtonText, applyButtonText = _param_applyButtonText === void 0 ? "Apply" : _param_applyButtonText, _param_startTimeLabel = param.startTimeLabel, startTimeLabel = _param_startTimeLabel === void 0 ? "Start Time" : _param_startTimeLabel, _param_startTimePlaceholder = param.startTimePlaceholder, startTimePlaceholder = _param_startTimePlaceholder === void 0 ? "Select start time" : _param_startTimePlaceholder, _param_endTimeLabel = param.endTimeLabel, endTimeLabel = _param_endTimeLabel === void 0 ? "End Time" : _param_endTimeLabel, _param_endTimePlaceholder = param.endTimePlaceholder, endTimePlaceholder = _param_endTimePlaceholder === void 0 ? "Select end time" : _param_endTimePlaceholder, _param_layout = param.layout, layout = _param_layout === void 0 ? "row" : _param_layout, _param_step = param.step, step = _param_step === void 0 ? 30 : _param_step, buttonProps = param.buttonProps, labelClassName = param.labelClassName;
    var _ref = _sliced_to_array((0, import_react.useState)(initialStartTime), 2), startTime = _ref[0], setStartTime = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(initialEndTime), 2), endTime = _ref1[0], setEndTime = _ref1[1];
    var timeOptions = (0, import_react.useMemo)(function() {
        return generateTimeOptions(step);
    }, [
        step
    ]);
    var sortTimes = function(start, end) {
        return start <= end ? [
            start,
            end
        ] : [
            end,
            start
        ];
    };
    var formatTimeRange = function(start, end) {
        return "".concat(start, "-").concat(end);
    };
    var handleTimeChange = function(newStartTime, newEndTime) {
        var _ref = _sliced_to_array(sort ? sortTimes(newStartTime, newEndTime) : [
            newStartTime,
            newEndTime
        ], 2), sortedStart = _ref[0], sortedEnd = _ref[1];
        setStartTime(sortedStart);
        setEndTime(sortedEnd);
        if (!showApplyButton) {
            onTimeRangeChange === null || onTimeRangeChange === void 0 ? void 0 : onTimeRangeChange(formatTimeRange(sortedStart, sortedEnd));
        }
    };
    (0, import_react.useEffect)(function() {
        if (sort) {
            var _sortTimes = _sliced_to_array(sortTimes(startTime, endTime), 2), sortedStart = _sortTimes[0], sortedEnd = _sortTimes[1];
            setStartTime(sortedStart);
            setEndTime(sortedEnd);
            if (!showApplyButton) {
                onTimeRangeChange === null || onTimeRangeChange === void 0 ? void 0 : onTimeRangeChange(formatTimeRange(sortedStart, sortedEnd));
            }
        }
    }, [
        sort,
        startTime,
        endTime,
        showApplyButton,
        onTimeRangeChange
    ]);
    var handleApply = function() {
        onTimeRangeChange === null || onTimeRangeChange === void 0 ? void 0 : onTimeRangeChange(formatTimeRange(startTime, endTime));
    };
    return /* @__PURE__ */ import_react.default.createElement("div", {
        className: cn("flex", layout === "column" ? "flex-col space-y-4" : "flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0")
    }, /* @__PURE__ */ import_react.default.createElement("div", {
        className: cn(layout === "column" ? "space-y-4" : "flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0")
    }, /* @__PURE__ */ import_react.default.createElement("div", {
        className: "flex flex-col space-y-2 items-center justify-center"
    }, startTimeLabel && /* @__PURE__ */ import_react.default.createElement("label", {
        htmlFor: "start-time",
        className: labelClassName
    }, startTimeLabel), /* @__PURE__ */ import_react.default.createElement(Select, {
        value: startTime,
        onValueChange: function(value) {
            return handleTimeChange(value, endTime);
        }
    }, /* @__PURE__ */ import_react.default.createElement(SelectTrigger, {
        id: "start-time",
        className: "w-[180px]"
    }, /* @__PURE__ */ import_react.default.createElement(SelectValue, {
        placeholder: startTimePlaceholder
    })), /* @__PURE__ */ import_react.default.createElement(SelectContent, {
        className: "max-h-[200px] overflow-y-auto"
    }, timeOptions.map(function(time) {
        return /* @__PURE__ */ import_react.default.createElement(SelectItem, {
            key: "start-".concat(time),
            value: time
        }, time);
    })))), /* @__PURE__ */ import_react.default.createElement("div", {
        className: "flex flex-col space-y-2 items-center justify-center"
    }, endTimeLabel && /* @__PURE__ */ import_react.default.createElement("label", {
        htmlFor: "end-time",
        className: labelClassName
    }, endTimeLabel), /* @__PURE__ */ import_react.default.createElement(Select, {
        value: endTime,
        onValueChange: function(value) {
            return handleTimeChange(startTime, value);
        }
    }, /* @__PURE__ */ import_react.default.createElement(SelectTrigger, {
        id: "end-time",
        className: "w-[180px]"
    }, /* @__PURE__ */ import_react.default.createElement(SelectValue, {
        placeholder: endTimePlaceholder
    })), /* @__PURE__ */ import_react.default.createElement(SelectContent, {
        className: "max-h-[200px] overflow-y-auto"
    }, timeOptions.map(function(time) {
        return /* @__PURE__ */ import_react.default.createElement(SelectItem, {
            key: "end-".concat(time),
            value: time
        }, time);
    }))))), showApplyButton && /* @__PURE__ */ import_react.default.createElement(Button, _object_spread({
        onClick: handleApply,
        className: cn(layout === "column" ? "w-full sm:w-auto mt-4 sm:mt-0" : "w-full sm:w-auto mt-auto", buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className)
    }, buttonProps), applyButtonText));
};
var TimeRangePicker_default = TimeRangePicker;
// src/index.tsx
var src_default = TimeRangePicker_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    TimeRangePicker: TimeRangePicker
});
