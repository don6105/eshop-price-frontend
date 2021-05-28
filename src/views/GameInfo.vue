<template>
  <h1>Info</h1>
  <p>{{ summary_id }}</p>
</template>

<script>
export default {
  props: {
    summary_id: Number
  },
};
</script>