import React from 'react'
import Layout from '../../components/shared/layout/index'
import About from '../../components/shared/about';
import Hero from '../../components/shared/homeCom/hero';
// import Hero1 from '../../components/shared/homeCom/hero1';
import About1 from '../../components/shared/homeCom/component1';
// import Collection from '../../components/shared/collection';
// import Collection1 from '../../components/shared/collection1';
import Collection2 from '../../components/shared/homeCom/component2';
// import Newletter from '../../components/shared/newletter';
import Mark from '../../components/shared/homeCom/component4';
import Oneonly from '../../components/shared/homeCom/component3';
import Getintouch from '../../components/shared/homeCom/component7';
// import Highlight from '../../components/shared/highlight';
import Highlight2 from '../../components/shared/homeCom/component6';
import Text from '../../components/shared/homeCom/component5';
import Newletter1 from '../../components/shared/newletter1';
// import Auth from "../../utils/firebase";
import message from '../../utils/firebase';

function Home() {
  message();
  return (
    <Layout>
      <Hero/>
      {/* <Hero1/> */}
      {/* <About /> */}
      <About1 />
      {/* <Collection/> */}
      {/* <Collection1/>  */}
      <Collection2/> 
      
      <Oneonly/>
      <Mark/>
      {/* <Highlight/> */}
      <Text/>
      <Highlight2/>
      <Getintouch/>
      {/* <Newletter/> */}
      <Newletter1/>
    </Layout>
  )
}

export default Home