import React from 'react'
import Layout from '../../components/shared/layout/index'
import Ringbuildercom1 from '../../components/shared/ringbuilercoms/ringbuilercom1';
import Ringbuildercom3 from '../../components/shared/ringbuilercoms/ringbuilercom3';
import Ringbuildercom2 from '../../components/shared/ringbuilercoms/ringbuilercom2';
import Ringbuildercom4 from '../../components/shared/ringbuilercoms/ringbuilercom4';
import Ringbuildercom5 from '../../components/shared/ringbuilercoms/ringbuilercom5';
// import Banner from '../../components/shared/banner'


function index() {
  return (
    <Layout>
        {/* <Banner/> */}
        <Ringbuildercom1/>
        <Ringbuildercom2/>
        <Ringbuildercom3/>
        <Ringbuildercom4/>
        <Ringbuildercom5/>
    </Layout>
  )
}

export default index