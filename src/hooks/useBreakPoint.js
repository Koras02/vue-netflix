import { ref, computed } from 'vue';
import { BREAKPOINTS } from '../constans';

const useBreakpoint = () => {
    const screenWidth = ref(window.innterWidth);

    return computed(() => {
        const breakpoint = Object.keys(BREAKPOINTS)
            .sort((a, b) => b - a)
            .find(breakpoint => screenWidth.value >= breakpoint);

        return BREAKPOINTS[breakpoint];
    });
};

export default useBreakpoint;
