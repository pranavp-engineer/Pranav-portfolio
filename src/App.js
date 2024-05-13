import logo from './logo.svg';
import "./App.css";
import { Button } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import Contact from './Components/contact';



function App() {


  let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU", "https://static.javatpoint.com/csspages/images/css-tutorial.png", "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png", "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg ", "https://redux.js.org/img/redux-logo-landscape.png", "https://jquery-plugins.net/image/plugin/chakra-ui-simple-modular-accessible-ui-components-for-react-applications.png", "https://jquery-plugins.net/image/plugin/mui-react-component-library.png", "https://miro.medium.com/max/1400/1*wnimHKgDGSqUAPo5NSSrZg.png", "https://blog.consdata.tech/assets/img/posts/2019-03-22-java-darmowa-czy-nie/java-darmowa.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4NHaFGB17sZjITxE40O5bizdbmP7UOCZaiXj9w5uqY1dTxC83qHxx1WQ02FBtbHVo7I&usqp=CAU"]


  return (<div style={{ width: "100%", overflow: "hidden" }} >
    <Navbar />
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>


      <Home />
      <About />
      <Portfolio />

      <Box id="skills_parent"  >
        <Box display="flex" justifyContent="center" fontSize="40px" fontWeight="700" gap="12px" margin="120px 0px 80px 0px">

          <Text>My </Text><Text color="#F40A34">Skills </Text>

        </Box>
        <Grid id="skills_grid" gap={50} w="70%" margin="auto" alignItems="center" marginBottom="100px" >

          {arr.map((ele) => {
            return <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w="150px" h="160px" display="flex" alignItems="center"  >

              <Skills skill={ele} />

            </GridItem>
          })}

        </Grid>
      </Box>

     <Contact/>

    </div>
  </div>
  );
}

export default App;
