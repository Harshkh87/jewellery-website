import React from 'react'
import Layout from '../../components/shared/layout'
// import RingHero from '../../components/shared/ringhero1';
import RingHero2 from '../../components/shared/engagement/ringhero2';
import Banner from '../../components/shared/banner';
import RingComponent2 from '../../components/shared/engagement/ringCom2';
import Letusdo from '../../components/shared/engagement/letusdo';
import Eightdiamond from '../../components/shared/eightdiamond';
import DesignerRing from '../../components/shared/designerRing';
import Ringcomponentlast from '../../components/shared/ringcomponentlast';
import Newletter1 from '../../components/shared/newletter1';

function index() {
  return (
    <Layout>
      {/* <RingHero/>  */}
      <RingHero2/>
      <Banner/>
      <RingComponent2/>
      <Letusdo/>
      <Eightdiamond/>
      <DesignerRing/>
      <Ringcomponentlast/>
      <Newletter1/>
    </Layout>
  )
}

export default index