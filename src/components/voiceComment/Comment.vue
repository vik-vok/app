<template>
  <div>
    {{ comment.ID }}
    <br />
    {{ comment.text }}
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
};
</script>
