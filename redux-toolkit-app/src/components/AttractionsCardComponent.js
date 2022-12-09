import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useGetAttractionsByIDQuery } from '../services/attraction';
import { useSelector} from 'react-redux'

export default function AttractionsCardComponent() {
	const action = useSelector((state) => state.attraction.value)
	const { data, error, isLoading } = useGetAttractionsByIDQuery(action)

  return (
	<>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
		
		<Card>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<CardMedia
						component="img"
						height="180"
						image={data.attraction.coverimage}
						alt={data.attraction.name}
					/>
				</Grid>
				<Grid  item xs={9}>	
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{data.attraction.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{data.attraction.detail}
						</Typography>
					</CardContent>
				
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Grid>
			</Grid>
		</Card>
		
        
      ) : null}
    </>


    
  );
}