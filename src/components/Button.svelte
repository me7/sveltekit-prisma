<script lang=ts>
  export let primary:boolean
</script>

<button class="py-2 px-4 hover:font-bold" on:click class:primary><slot /></button>

<style>
  .primary {
    box-sizing: content-box;
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
  }

</style>