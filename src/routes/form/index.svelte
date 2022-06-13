<script lang="ts">
  import Button from "$comp/Button.svelte";

  export let name: string
  let age:number = 0
  let birthday: Date
  let result:string


  async function handleSubmit(){
    let data = {name, age, birthday}
    let res = await fetch('/form/api',{
      method: 'POST',
      body: JSON.stringify(data)
    })
    result = await res.text()
    alert(result)

  }
</script>
<Button>Submit</Button>
<Button primary>Submit</Button>

<h1>Sample form using json fetch</h1>
{#if result !== undefined}
  {result}
{/if}
<form on:submit|preventDefault={handleSubmit}>
  <label>Name <input type="text" name="name" bind:value={name}></label><br>
  <label>Age <input type="number" name="age" bind:value={age}></label><br>
  <label>Birthday <input type="date" name="age" bind:value={birthday}></label><br>
  <input type="submit" value="Save Data">

  {name}
  {age}
  {birthday}
</form>