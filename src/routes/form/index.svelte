<script lang="ts">
  import Button from "$comp/Button.svelte";
  import Input from "$comp/Input.svelte";
  import Date from "$comp/Date.svelte";
  import Number from "$comp/Number.svelte";

  let name: string
  let seed = 'secret42'
  let age:number = 10
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

<h1>Sample form using json fetch aaaaaaaaaaaaaaaaa</h1>
{#if result !== undefined}
  {result}
{/if}
<form on:submit|preventDefault={handleSubmit}>
  <Input bind:value={name}>Name</Input>
  <Number bind:value={age}>Age</Number>
  <Date bind:value={birthday}>Birthday</Date>
  <Button>Save Data</Button>
  <Button primary >Submit</Button>
  

  {name}
  {age}
  {birthday}
</form>