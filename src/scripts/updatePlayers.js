import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updatePlayers = async () => {
	const { data } = await axios.get('https://api.sleeper.app/v1/players/nfl');
	const players = Object.values(data);

	for (const player of players) {
		try {
			await prisma.player.create({
				data: {
					sleeperId: player.player_id,
					firstName: player.first_name,
					lastName: player.last_name,
					team: player.team,
					mainPosition: player.position,
					positions: player.fantasy_positions
				}
			});
		} catch (err) {
			console.log(`Sorry.  There was an error: ${err}`);
		}
	}
};

updatePlayers();
