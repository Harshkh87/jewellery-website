import React from 'react'
import Layout from '../../components/shared/layout'
import WeddingHero from '../../components/shared/weddingHero';
import Banner from '../../components/shared/banner';
import DesignerRing from '../../components/shared/designerRing';
import Eightdiamond from '../../components/shared/eightdiamond';
import Ringcomponentlast from '../../components/shared/ringcomponentlast';
import Newletter1 from '../../components/shared/newletter1';
import FourRing from '../../components/shared/fourRing';
import Weddingcom2 from '../../components/shared/weddingcom2';
import WeddingMiddcom from '../../components/shared/weddingMidcom';


function index() {
  return (
    <Layout>
      <WeddingHero/>
      <Banner/>
      <DesignerRing/>
      <Eightdiamond/>
      <WeddingMiddcom/>
      <Weddingcom2/> 
      <FourRing/>
      <Ringcomponentlast/>
      <Newletter1/>
    </Layout>
  )
}

export default index