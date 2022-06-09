/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

// import { dataset_dev } from "svelte/internal"

// const base = 'https://api.svelte.dev';

// export function api(method: string, resource: string, data?: Record<string, unknown>) {
// 	return fetch(`${base}/${resource}`, {
// 		method,
// 		headers: {
// 			'content-type': 'application/json'
// 		},
// 		body: data && JSON.stringify(data)
// 	});
// }

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
	pending_delte: boolean
};

export async function api(method: string, resource: string, data?: Todo) {
	let status = 500
	let body = {}
	switch(method.toUpperCase()){
		case 'GET':
			body = prisma.todo.findMany()
			status = 200
			break
	}

	return {
		status,
		body
	}
}

