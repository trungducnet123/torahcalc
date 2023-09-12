import { createResponse, createErrorResponse } from '$lib/middleware/json.js';
import { isGregorianLeapYear } from '$lib/js/leapyears.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function GET({ url }) {
	const year = Number(url.searchParams.get('year') || new Date().getFullYear());

	try {
		return createResponse(isGregorianLeapYear({ year }));
	} catch (error) {
		return createErrorResponse(error);
	}
}
