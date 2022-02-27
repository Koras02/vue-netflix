/* eslint-disable no-useless-escape */
import { ref, onMounted, onUnmounted, computed } from 'vue';

const useDevice = () => {
    const width = ref(window.innerWidth);

    function handleWindowSizeChange() {
        width.value = window.innerWidth;
    }

    onMounted(() => {
        window.addEventListener('resize', handleWindowSizeChange);
    });

    onUnmounted(() => {
        window.addEventListener('resize', handleWindowSizeChange);
    });

    const isMobile = computed(() => width.value <= 768);
    const isDesktop = computed(() => width.value > 768);
    const isOrientationMobile = computed(() => typeof window.orientation !== 'undefined');

    return { isMobile, isDesktop, isOrientationMobile };
};

export default useDevice;
