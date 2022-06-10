<script lang=ts>
  let name:string
  let age:number
  let birthday: Date

  async function handleSubmit(){
    let data = {name, age, birthday}
    let res = await fetch('/form/api',{
      method: 'POST',
      body: JSON.stringify(data)
    })
    console.log(await res.text())

  }
</script>

<h1>Sample form using json fetch</h1>

<form on:submit|preventDefault={handleSubmit}>
  <label>Name <input type="text" name="name" bind:value={name}></label><br>
  <label>Age <input type="number" name="age" bind:value={age}></label><br>
  <label>Birthday <input type="date" name="age" bind:value={birthday}></label><br>
  <input type="submit" value="Save Data">

  {name}
  {age}
  {birthday}
</form>