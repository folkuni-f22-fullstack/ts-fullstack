
const getMemesUrl = 'https://api.imgflip.com/get_memes'

export type Meme = {
	id:string;
	name: string;
	url: string;
}
type MemeData = {
	memes: Meme[];
}
type ApiResponse = {
	success: boolean;
	data: MemeData;
}


async function getMemes(): Promise<Meme[]> {
	try {
		const response = await fetch(getMemesUrl)
		const apiResponse: ApiResponse = await response.json()
		return apiResponse.data.memes
	}
	catch {
		// Två alternativ:
		// 1. kasta ett informativt felmeddelande
		// 2. returnera tom lista
		return []
	}
}

export { getMemes }
