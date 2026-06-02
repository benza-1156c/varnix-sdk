import { AlertDialogActionProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { ButtonVariants } from '../button';
type __VLS_Props = AlertDialogActionProps & {
    class?: HTMLAttributes['class'];
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null;
    variant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
