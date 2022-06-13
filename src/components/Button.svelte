<script lang=ts>
  export let primary:boolean = false
</script>

<button class="py-2 px-4 hover:font-italic" on:click class:primary><slot /></button>

<style>
  .primary {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
  }

</style>