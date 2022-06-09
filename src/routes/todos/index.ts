// import { api } from './_api';
import type { RequestHandler } from './__types';
import {PrismaClient, type Todo} from '@prisma/client'
import type { RequestEvent } from '@sveltejs/kit';

const prisma = new PrismaClient()

export const get: RequestHandler = async () => {
	let todos = await prisma.todo.findMany()
	return {
		body: {
			todos
		}
	}
};

export async function post(event: RequestEvent) {
	const form = await event.request.formData();
	let todo:Todo = await prisma.todo.create({
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
