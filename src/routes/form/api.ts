import type { RequestEvent } from "@sveltejs/kit";

export async function post({request:req}: RequestEvent){
  const data = await req.json()
  console.log(data)
  return{
    body: "i've got your data!!"
  }
}