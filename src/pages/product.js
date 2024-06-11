
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Product3 from "../components/product3";
import Product4 from "../components/product4";
import "./product.css";
import Navbar from "./Navbar";

const Product = () => {
  return (
    <div className="productpage">
      <div className="productpagemain">
        <div className="productallcont">
          <Navbar />
          <div className="product-innercont">
            <img className="productTopImage" src="/1234.svg"/>
            <h1 className="recoverysystemh1">Recovery Systems</h1>
            <p className="plug-and-play">Plug and Play solution</p>
            <h3 className="what-we-do">What we do</h3>
            <div className="we-design-and-parent">
              <p className="we-design-and">
                We design and deliver plug-and-play recovery systems and
                parachute based emergency recovery systems for fixed wing,
                multirotor and rotary wing UAS between 5 to 150Kg systems. 
              </p>
              <p className="We-offer-airframe">
                We offer airframe specific customised products from 50 kgs to
                250 kgs All Up Weight.
              </p>
            </div>
          </div>
        </div>


        <div className="allpages ">
        <Product3 id='asentm'/>
        <FrameComponent4/>
        <Product4 id='dicerisTm'/>
        <FrameComponent3/>

        <section className="frame-wrapper" >
          <div className="urban-air-mobility-parent">
            <h1 className="urban-air-mobility">Urban Air Mobility</h1>
            <div className="backgroundborder1">
              <div className="with-the-age">
                With the age of urban air mobility on us, the need for
                sustainable, safe and smart air vehicles is growing to relieve
                the increasingly congested ground infrastructure. As urban
                transport takes wings, Uttoria is excited to offer Ballistic
                Recovery Systems for smart air vehicles 
              </div>
              <img
                className="backgroundborder-child"
                loading="lazy"
                alt=""
                src="/frame-117@2x.png"
              />
            </div>
          </div>
        </section>

        <FrameComponent2/>
        <FrameComponent1/>
        </div>
      </div>
        <FrameComponent/>
    </div>
  );
};

export default Product;
