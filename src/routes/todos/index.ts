import type { RequestEvent } from '@sveltejs/kit';
import db from '$lib/db'

export const get = async () => {
	let todos = await db.todo.findMany()
	return {
		body: {
			todos
		}
	}
};

export async function post(event: RequestEvent) {
	let form = await event.request.formData();
	let todo = await db.todo.create({
		data: {
			text: String(form.get('text')),
			created_at: new Date(),
			done: false,
			pending_delete: false
		}
	})
	return {
		body: {
			todo
		}
	}
};

export async function del({request}: RequestEvent){
	let uid = (await request.formData()).get('uid')
	console.log(uid)
	let todo = await db.todo.delete({  // DO NOT forgot to await
		where: {
			uid: String(uid)
		}
	})

	return {
		status: 303,
		headers: {
			location: '/todos'
		}
	}
}

export async function patch(ev: RequestEvent){
	let form = await ev.request.formData()
	let uid = String(form.get('uid'))
	let data = form.has('text')
		? {text: ''+form.get('text')}
		: {done: !!form.get('done')}
	let body = await db.todo.update({
		where: {
			uid: uid
		},
		data: data
	})

	return {
		status: 303,
		headers: {
			location: '/todos'
		}
	}
}