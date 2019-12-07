import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// /import Link from '@material-ui/core/Link';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom';
import AppF from "./AppF";


function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const cards = ["https://1001freedownloads.s3.amazonaws.com/vector/thumb/70148/1380565708.png","https://www.pinclipart.com/picdir/middle/188-1880598_extra-clipart.png","https://www.pinclipart.com/picdir/middle/61-615996_you-are-going-to-love-the-additional-training.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0NuXrh7tSDSuHh8a8FdYeK0XO88rf2mnE8rj4_tTN5DBd_Q4&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlRExK2ZFiHeLX-6iac5iROqxKQsRgWtf8krCCEfSexRjq16B&s", "https://thumbs.dreamstime.com/z/productivity-efficiency-words-thinker-business-improve-output-streamline-responsive-process-d-person-thinking-38085219.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2pm1nnL7rFmrnD5k7IieWbpIaVHl27G5p7UB8sHjrdqoHqX8&s", "https://cdn.xl.thumbs.canstockphoto.com/efficiency-in-the-work-place-as-a-concept-clipart_csp4065311.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYF9W0NmmmTemtxfyvzDhaMtIOq3J_YEqA0x9TKakkXSX5wj6h&s"];
const ca = ["https://s3-eu-west-1.amazonaws.com/tjwlhotelcms/hotel_cms_data_live/hotel_images/5784149/4_38.jpg",
"https://beuhairsalon.com/wp-content/uploads/2017/09/beuhair-interior-3-min-cropped.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71kzRRanJVL._SL1500_.jpg",
"https://media.yoox.biz/items/38/38672134tc_14_f.jpg","https://www.olegcassinistore.com/12351/satin-cummerbund-ball-gown-wedding-dress-v3848.jpg",
"http://img.cakesdecor.com/njiycfnx7mwavxipx5jt.jpg",
"https://hypowerfuel.com/wp-content/uploads/2019/10/best-restaurants.jpg",
"https://1001freedownloads.s3.amazonaws.com/vector/thumb/70148/1380565708.png"]
export default function Album() {
  const classes = useStyles();
  

  return (



    
    <React.Fragment>
        
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar> 
          {/* <CameraIcon className={classes.icon} /> */}
          {/* <Typography variant="h6"  noWrap> */}
          {/* </Typography> */}
        {/* </Toolbar> */}
    {/* //    </AppBar> */} 
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
حجوزاتي            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              حجوزاتي هي اول منصة تفاعلية لاتمام عمليات الحجز اونلاين , على بعد كبسة واحدة يمكنك الاطلاع على افضل العروض والخدمات وحجزها 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Sign-Up as a user
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Sign-Up as a service provider
                  </Button>
                </Grid>
              </Grid>
              
            </div>
            
          </Container>
          
        </div>
        <Container className={classes.cardGrid} maxWidth="md">          
          <Grid container spacing={4}>
            {ca.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    
                    image={card}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Halls
                    </Typography>
                    <Typography>
اضغط على الصورة للاطلاع على اخر العروضات                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Router>
    <div>
      <ul>
      
        
          <Link to="/AppF"><Button size="small" color="primary">
                     Book Now
                    </Button></Link>
        
        
      </ul>
         <Route path="/AppF" component={AppF} />
    </div>
  </Router>
                    <Button size="small" color="primary">
                      Explore more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          حجوزاتي
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        حجوزاتي هي منصة لحجز المواعيد عبر الانترنت. إنها الطريقة الافضل لإيصال الزبائن لمزودين الخدمات باستخدام بعض النقرات فقط,        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
