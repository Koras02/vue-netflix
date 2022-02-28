import { ref, computed } from 'vue';
import { useQuery } from 'vue-query';

const useQueries = queries => {
    const queryResults = ref(
        queries.reduce((prev, curr) => {
            const depend = curr.depend?.(prev);

            const options = curr.depend ? { ...curr.options, enabled: !!depend } : curr.options;

            prev.push({
                key: curr.key,
                query: useQuery(curr.name, () => curr.refetch(depend), options),
            });

            return prev;
        }, [])
    );

    let isLoading = computed(() => queryResults.value.some(result => result.query.isLoading));

    let data = computed(() => {
        if (isLoading.value) return null;
        return queryResults.value.reduce((prev, curr) => Object.assign(prev, { [curr.key]: curr.query.data }), {});
    });

    let isError = computed(() => queryResults.value.some(result => result.query.isError));

    return [data, isLoading, isError];
};

export default useQueries;
