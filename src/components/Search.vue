<template>
  <form @submit.prevent="submitForm">
    <input type="text" ref="city" placeholder="Which city are you in?" autofocus :value="city">
  </form>
</template>

<script>
  export default {
    name: 'search',

    props: {
      city: {
        type: String,
        default: '',
      },
    },

    methods: {
      submitForm() {
        this.$emit('onQueryEntered', this.$refs.city.value);
      },
    },
  };
</script>

<style scoped lang="scss">
  form {
    margin-bottom: 10px;
  }

  input {
    background: white;
    border: none;
    appearance: none;
    padding: 20px;
    width: 100%;
    color: black;
    outline: none;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
</style>
