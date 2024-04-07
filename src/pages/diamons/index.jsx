import React from 'react'
import Layout from '../../components/shared/layout'
import DiamondHero from '../../components/shared/diamondHero';
import Banner from '../../components/shared/banner';
import DesignerDiamond from '../../components/shared/designerDiamond';
import Ringcomponentlast from '../../components/shared/ringcomponentlast';
import Newletter1 from '../../components/shared/newletter1';
import DiamondCom from '../../components/shared/diamondcom';
import DiamondSec from '../../components/shared/diamondsec';
import Diamondmid from '../../components/shared/diamondmid';
import Diamond12 from '../../components/shared/diamond12';

function index() {
  return (
    <Layout>
      <DiamondHero/>
      <Banner/>
      <DiamondCom/>
      <DesignerDiamond/>
      <DiamondSec/>
      <Diamond12/>
      <Diamondmid/>
      <Ringcomponentlast/>
      <Newletter1/>
    </Layout>
  )
}

export default index