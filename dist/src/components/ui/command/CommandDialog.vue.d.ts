import { DialogRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = DialogRootProps & {
    title?: string;
    description?: string;
    class?: HTMLAttributes['class'];
    showCloseButton?: boolean;
};
declare var __VLS_38: {
    open: boolean;
    close: () => void;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_38) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    title: string;
    showCloseButton: boolean;
    description: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
