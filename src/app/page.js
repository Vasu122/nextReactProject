"use client"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mediaImage from "../images/change-aspect-ratio.png";
import Image from 'next/image';
import { Box, Container, Grid } from '@mui/material';
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Card sx={{ maxWidth: '100%' }}>
            <Image
              src={mediaImage}
              alt={"dict.pdfheading"}
              loading="lazy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aspect Ratio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                You can calculate aspect ratio
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card sx={{ maxWidth: '100%' }}>
            <Image
              src={mediaImage}
              alt={"dict.pdfheading"}
              loading="lazy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aspect Ratio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                You can calculate aspect ratio
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card sx={{ maxWidth: '100%' }}>
            <Image
              src={mediaImage}
              alt={"dict.pdfheading"}
              loading="lazy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aspect Ratio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                You can calculate aspect ratio
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>

  );
}
