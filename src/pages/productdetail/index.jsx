import React from 'react'
import Layout from '../../components/shared/layout/index'
import Banner from '../../components/shared/banner';
import ProductDetailcom1 from '../../components/shared/productdetailcom/prodetailcom1';
import ProductDetailcom2 from '../../components/shared/productdetailcom/prodetailcom2';
import FourRing from '../../components/shared/fourRing';
import ProductDetailcom3 from '../../components/shared/productdetailcom/prodetailcom3';
import Eightdiamond from '../../components/shared/eightdiamond';
import ProductDetailcom4 from '../../components/shared/productdetailcom/prodetailcom4';
import Newletter1 from '../../components/shared/newletter1';

function index() {
  return (
    <Layout>
        <ProductDetailcom1/>
        <Banner/>
        <ProductDetailcom2/>
        <FourRing/>
        <ProductDetailcom3/>
        <Eightdiamond/>
        <ProductDetailcom4/>
        <Newletter1/>
    </Layout>
  )
}

export default index