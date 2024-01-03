import Grid from '@mui/material/Grid';
import HomeRight from '../components/home/home-right';
import HomeLeft from '../components/home/home-left';
import ToDo from '../components/todo';
import Project from '../components/project';
import Links from '../components/links';
import HomeHeader from '../components/home/home-header';

function Home() {
  return (
    <Grid container>
      <Grid item xs={7}>
        <HomeLeft>
          <HomeHeader />
          <Links />
        </HomeLeft>
      </Grid>
      <Grid item xs={5}>
        <HomeRight>
          <ToDo />
          <Project />
        </HomeRight>
      </Grid>
    </Grid>
  );
}

export default Home;
