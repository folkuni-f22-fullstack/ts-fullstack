import { useState, useEffect } from 'react'
import { Meme, getMemes } from './imgflip'
import './ViewMemes.css'

const ViewMemes = () => {
	const [memes, setMemes] = useState<null | Meme[]>(null)

	useEffect(() => {
		async function hack() {
			setMemes(await getMemes())
		}
		try {
			hack()
		} catch {
			console.log('Kunde inte hämta data från API');
		}
	}, [])

	return (
		<div className="memelist">
			{memes ? (
				memes.map(meme => (
					<div key={meme.id}>
						<h3> {meme.name} </h3>
						<img src={meme.url} />
					</div>
				))
			) : (
				<p> Wait for the API... </p>
			)}
		</div>
	)
}

export default ViewMemes
