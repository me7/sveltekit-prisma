<script lang=ts>
  export let value:unknown = undefined
</script>

<label class="block font-medium text-gray-700 mt-1" on:change>
  <slot />
  <input type="date" class="block mt-1 leading-6 px-3 py-2 text-base rounded-lg" bind:value={value}/>
</label>