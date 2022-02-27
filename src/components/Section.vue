<template>
  <video-carousel-skeleton v-if="isLoading" />

  <div class="space-y-2" v-else>
      <h1 class="text-xl font-medium font-netflix_medium">
          {{ title }}
      </h1>
    <video-carousel :items="data.results" />
  </div>
</template>

<script>
  import useQuery from '../hooks/useQuery';
</script>