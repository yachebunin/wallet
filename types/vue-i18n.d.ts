import Vue from 'vue';
import { VueI18n } from 'vue-i18n';

declare module 'vue/types/vue' {
  interface Vue {
    $i18n: VueI18n;
    $t(key: string, values?: any): string;
    $tc(key: string, choice?: number, values?: any): string;
    $te(key: string): boolean;
  }
}
