import Header from './components/header';
import Container
 from './components/container';
 import SideBar from './components/sidebar';
 import Footer  from './components/footer';

function App() {
  return (
    <div style={{display:"flex", flex:1,  flexDirection:"column",background:"green",height:"100vh"}}>
        <Header/>
        <div style={{display:'flex',flex:8,background:'black'}}>
          <SideBar>
            <h1>SideBar</h1>
          </SideBar>
       <Container>
         <h1>Container</h1>
       </Container>

      

        </div>
        <Footer>
         <h1>Footer</h1>
       </Footer>
    </div>
  );
}

export default App;
