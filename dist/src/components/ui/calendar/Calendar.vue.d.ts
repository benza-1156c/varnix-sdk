import { CalendarRootProps, DateValue } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { LayoutTypes } from '.';
type __VLS_Props = CalendarRootProps & {
    class?: HTMLAttributes['class'];
    layout?: LayoutTypes;
    yearRange?: DateValue[];
};
declare var __VLS_59: {}, __VLS_67: {}, __VLS_69: {
    date: DateValue;
    month: import('@vueuse/core').ReuseTemplateComponent<{
        date: DateValue;
    }, Record<"default", undefined>>;
    year: import('@vueuse/core').ReuseTemplateComponent<{
        date: DateValue;
    }, Record<"default", undefined>>;
};
type __VLS_Slots = {} & {
    'calendar-prev-icon'?: (props: typeof __VLS_59) => any;
} & {
    'calendar-next-icon'?: (props: typeof __VLS_67) => any;
} & {
    'calendar-heading'?: (props: typeof __VLS_69) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: DateValue | undefined) => any;
    "update:placeholder": (date: DateValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: DateValue) => any) | undefined;
}>, {
    modelValue: DateValue | DateValue[] | null;
    layout: "month-and-year" | "month-only" | "year-only";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
