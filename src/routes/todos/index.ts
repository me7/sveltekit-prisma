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
	const form = await event.request.formData();
	let todo = await db.todo.create({
		data: {
			text: form.get('text'),
			created_at: new Date(),
			done: false,
			pending_delete: false
		}
	})
	console.log(todo)
	return {
		body: {
			todo
		}
	}
};
