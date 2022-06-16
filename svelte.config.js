// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite'
import { presetUno, presetIcons, presetAttributify,transformerVariantGroup, transformerDirectives } from 'unocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		alias:{
			$comp: 'src/components'
		},

		vite: {
			plugins: [
				Unocss({
					presets:[
						presetUno(),
						presetAttributify(),
						presetIcons({
							extraProperties: {
								'display': 'inline-block',
								'vertical-align': 'middle',
							},
						}),						
					],
					theme:{
						colors: {
							'primary':'#0081a7',
							'accent':'#bc6c25',
							'header': '#4c4c4c',
							'text': '#444444',
						}
					},
					transformers: [
						transformerVariantGroup(),
						transformerDirectives(),
					],
					// shortcuts: [{
					// 	btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
					// 	},
					// 	[/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg transform hover:scale-125`]
					// ]
				})
			]
		}
	},

};

export default config;
