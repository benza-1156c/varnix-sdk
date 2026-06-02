import { ContextMenuCheckboxItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = ContextMenuCheckboxItemProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_14: {}, __VLS_21: {};
type __VLS_Slots = {} & {
    'indicator-icon'?: (props: typeof __VLS_14) => any;
} & {
    default?: (props: typeof __VLS_21) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: boolean) => any;
    select: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: boolean) => any) | undefined;
    onSelect?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
