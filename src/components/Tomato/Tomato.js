import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Tomato.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Player } from "video-react";
import ReactPlayer from 'react-player'




function Tomato() {
  
  return (
    <div className='container'>
      <p><Navbar.Brand href="#home" className="mx-2"><img src="https://wallpapercave.com/wp/wp2030793.jpg" width={"60px"} height={"50px"} style={{'borderRadius':'10px'}}/> Tomato</Navbar.Brand></p>
      <div className='stick'>
     <Navbar  expand="lg" className="bg-opacity-50 mx-2 bg-dark">
      
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="navbarex">
            <Nav.Link href="#scrollspyHeading1" className='linkk'>Soil Preparation</Nav.Link>
            <Nav.Link href="#scrollspyHeading2" className='linkk'>Sowing</Nav.Link>
            <Nav.Link href="#scrollspyHeading3" className='linkk'>Flowering</Nav.Link>
            <Nav.Link href="#scrollspyHeading4" className='linkk'>Harvesting</Nav.Link>
            <Nav.Link href="#scrollspyHeading5" className='linkk'>Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
    <div data-bs-spy="scroll" data-bs-target="#navbarex" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="p-3 rounded-2" >
  <h4 id="scrollspyHeading1">Soil Preparation</h4>
  <img src="https://www.gardeningchores.com/wp-content/uploads/2021/11/Perfect-Soil-pH-For-Acid-Loving-Tomatoes-1.jpg" className='Image'></img>
  <ul>
    <h5>Pot Requirement</h5>
    <li>Tomatoes need a large container to thrive due to their expansive root systems.
       Plant tomatoes in a pot big enough so the tomato plant receives ample water and nutrients during the growing season.</li>
    <li>For each plant, you need a container that is at least 1 square foot or around two gallons.</li>
    <li>A larger container of around 2 square feet is better. A 5-gallon bucket, easily found at hardware stores, 
        is the perfect size for healthy tomato plant growth.</li>
    <li>Avoid black containers. Black plastic can absorb and hold a lot of heat, 
          which can cause roots to be overly warm, leading to stunted plants.</li>
    <li>Avoid black containers. Black plastic can absorb and hold a lot of heat, which can cause roots to
             be overly warm, leading to stunted plants.</li>
    <li>Make sure the container has good drainage so that the roots remain moist but not soggy. If you use a 5-gallon bucket, 
      drill holes in the bottom before filling it with potting soil to allow water drainage.</li>
  </ul>
  <ul>
    <h5>Soil Requirement</h5>
    <p>Soil from your yard or garden is too heavy for container gardening and may contain disease organisms. 
      Use a fluffy, light potting mix
      that allows roots to freely grow and helps moisture and air penetrate down to them.
      Fill your pot with high-quality potting soil to about an inch from the top rim.</p>
  </ul>
  <h4 id="scrollspyHeading2">Sowing</h4>
  <img src="https://www.thompson-morgan.com/static-images/tandm/static-articles/how-grow-tomatoes/sowing-tomato-seeds.jpg" className='Image'></img>
  
  <p>
  Soil from your yard or garden is too heavy for container gardening and may contain disease organisms.
  Use a fluffy, light potting mix that allows roots to freely grow and helps moisture and air penetrate down to them.
  Fill your pot with high-quality potting soil to about an inch from the top rim.
  </p>
  <p>
  Always begin with viable and healthy tomato seeds. Fill the seedling tray with organic Potting Mix and sow the seeds. 
  Sow one seed per cup and cover with a polythene sheet to ensure good germination of seeds. The tomatoes seedlings will
   be ready for transplanting to the pots or containers by 3 4 weeks. Choose large size containers as tomato plants are huge 
   feeders of nutrients with large root area. Also, ensure that the potting mix must be well-draining and rich in nutrients.
  </p>
  <p>
  Tomato is propagated by using seeds. Seed selection is a very important aspect of organic tomato production.
   For raising nurseries, seeds of high yielding varieties with tolerance to pests and diseases can be used.
    They must be carefully selected from certified organic farms or from own seed plot which is raised organically 
    To start with, chemically untreated seeds from local high yielding varieties could be used, in the absence of organically 
    produced seeds.
  </p>
  <h4 id="scrollspyHeading3">Flowering</h4>
  <img src="https://www.thegreenpinky.com/wp-content/uploads/tomato-flowering.jpg" className='Image'></img>
  <h5>Temperature Requirement</h5>
  <p>Temperature below 100C and above 380C adversely affects plant tissues thereby slow down physiological activities. 
    It thrives well in temperature 100C to 300C with optimum range of temperature is 21-240C. The mean temperature below 
    160C and above 270C are not desirable. The plant doesn't withstand frost, it requires low to medium rainfall, 
    and does well under average monthly temperature of 21 to 230C.</p>
  <h5>Light</h5>
  <p>
  Tomato is a warm season crop, it requires warm and cool climate. The plants cannot withstand frost and high humidity.
   Also light intensity affects pigmentation, fruit colour, fruit set. The plant is highly affected by adverse climatic conditions. 
   It requires different climatic range for seed germination, seedling growth, flower and fruit set, and fruit quality.
  </p>
  <p>Tomato is a warm season crop, it requires warm and cool climate. The plants cannot withstand frost and high humidity.
     Also light intensity affects pigmentation, fruit colour, fruit set. The plant is highly affected by adverse climatic conditions.
      It requires different climatic range for seed germination, seedling growth, flower and fruit set, and fruit quality.</p>
  <h5>Watering</h5>
  <p>Prevent split tomatoes by maintaining a reliable soil moisture balance Check the soil often to observe if the tomato plant 
    needs to be watered. Insert a finger into the tomato potting soil if it is dry then, it's time to water</p>
  <h5>Fruiting Stage</h5>
  <p>After the pollination process, the next 40 - 70 days will see fruits developing steadily. However, 
  this time depends on the suitable climate and growing conditions. The cultivars also play a role in speeding up or slowing down the duration.
  When the fruits emerge, they stay green until they attain fully mature size.
  The best practice at this point would be redirecting resources and nutrients to the main stems and fruits by taking out new branches and limbs.</p>
  <h4>Flowering</h4>
  <p>With the primary stages of growth completed, flowering is next. Flowering occurs when about 10 - 12 leaves are formed,
   and the plant attains a height of about 15 - 18 inches.
  When this feat is achieved, it begins to form new side stems that further branches out, forming flower buds along the tips as they do.
  You will be greeted with the pleasant sight of yellow flowers when the buds are fully formed and opens up. After all this, 
  the plant can be considered fully set for pollination.</p>
 
  <p>
  After the pollination process, the next 40 - 70 days will see fruits developing steadily. However,
  this time depends on the suitable climate and growing conditions. The cultivars also play a role in speeding up or slowing down the duration.
  When the fruits emerge, they stay green until they attain fully mature size.
  The best practice at this point would be redirecting resources and nutrients to the main stems and fruits 
  by taking out new branches and limbs.
  </p>
  <h4 id="scrollspyHeading4">Harvesting</h4>
  <img src="https://ak0.picdn.net/shutterstock/videos/19740670/thumb/8.jpg" className='Image'></img>
  <h4>Fertilizers</h4>
  <p>A diluted, weekly dose of fish emulsion or liquid kelp keep the tomato plant growing healthy so it can generate fruit.
  Vermicompost tea, sea kelp or fish emulsion all work well for fertilizing tomatoes.Tomatoes are heavy feeders, and container-grown
  tomatoes require feeding about every two weeks. Make sure to feed your plants the primary nutrients they require—nitrogen,
  phosphorus, and potassium.
  Tomatoes grown in pots need to be fed regularly throughout the growing season, as often as twice monthly depending on the type of potting mix used. 
  A balanced NPK fertilizer, such as 5-5-5 or 5-10-5 works best applied during watering.
  Some potting soils already have fertilizers included in them, so read the soil bag to determine if these essential nutrients are included in the mix.</p>
 
  <ul>
    <li>Harvest tomatoes when they are firm and very red, regardless of size, with perhaps some yellow remaining around 
    the stem. Harvest tomatoes of other colors (orange, yellow, purple, or another rainbow shade) when they
     turn the correct color.</li>
     <li>If temperatures start to drop and your tomatoes aren’t ripening, use one of these methods:
</li>
<ol>
  <li>Pull up the entire plant, brush off dirt, remove foliage, and hang the plant upside down in a basement or garage.</li>
  <li>Place mature, pale green tomatoes stem up, in a paper bag and loosely seal it. Or wrap them in newspaper and place in a 
  cardboard box. Store in a cool (55°F to 70°F), dark place. Cooler temperatures slow ripening; warmth speeds it.
   Check weekly and remove soft, spotted, diseased, or ripe fruit.</li>
</ol>
  <li>Never place tomatoes on a sunny windowsill to ripen. They may rot before they are ripe!</li>
  </ul>
  <h4 id="scrollspyHeading5">Tips</h4>
  <ul>
    <li>Only water in the mornings and try to avoid wetting the leaves.</li>
    <li>This will help minimize problems with disease and leaf burn.</li>
    <li>Water your tomatoes less once fruit begins to set.</li>
    <li>Watering too much at this stage can cause the fruit to crack</li>
    <li>Your fruit will also be sweeter with less water!</li>
  </ul>
  <h4>Diseases</h4>
  <ul>
    <li><b>Early Blight</b></li>
    <img src="https://www.thespruce.com/thmb/DiKcGlzt7StcQxgxD3A1Paq06uI=/1521x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tomato-blight-5b229a953de423003766c821.jpg" className='Image'></img>
    <p>This is a common disease of tomato occurring on the foliage at any stage of the growth. The fungus
attacks the foliage causing characteristic leaf spots and blight. Early
blight is first observed on the plants as small, black lesions mostly on the
older foliage. Spots enlarge, and by the time they are one-fourth inch in
diameter or larger, concentric rings in a bull's eye pattern can be seen in
<p><b>Control:</b>In order to minimize infection, good drainage conditions should be maintained in the field.
Staking plants and removing foliage and fruits upto a height 15-30 cm from ground level helps to
control this disease. Spraying with Difolaton (0.3%) 4 times at an interval of 10 days effectively controls the disease. </p>
</p>
<li><b>Late Blight</b></li>
<img src="https://gardenerspath.com/wp-content/uploads/2021/07/Identify-and-Treat-Late-Blight-on-Tomatoes-FB.jpg" className='Image'></img>
<p>Late blight occurs when humid conditions coincide with mild temperatures for prolonged periods. If
conditions are ideal for disease development, disease development is
rapid causing severe economic losses. Lesions produced on the leaves
are at first irregular, rather large, greenish-black and water-soaked.
These areas enlarge rapidly, becoming brown, and under humid
conditions, develop a white moldy growth near the margins of the
diseased area on the lower surface of the leaves or on stems. The
disease spreads rapidly under humid conditions, destroying quickly large
areas of tissue.</p>
<p><b>Control:</b>: Control practices include rotating fields so as not to follow potato or tomato; avoiding planting
tomatoes near potatoes; using disease-free seeds and transplants.
Adopting certain prophylactic measures can also control the disease. Firstly, the seed material should
be obtained from a disease free area. Before planting the seeds should be treated with Thiram (2-3
g/kg of seed). The plants must be sprayed with Captafol (2 g/litre of water) or Dithane M 45 (2 g/kg of
seed) at 15 days interval, starting from 30 days after transplanting.</p>
<li><b>Bacterial Leaf Spot</b></li>
<img src="https://www.thespruce.com/thmb/weVlsHxnkA8mlSzf_FhKNMVLPKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/identifying-and-controlling-septoria-leaf-spot-of-tomato-1402974-02-b556ef33db30454dbc021c3e7cea89b5.jpg" className='Image'></img>
<p>Moist weather and splattering rains are conducive to disease development. Most outbreaks of the
disease can be traced back to heavy rainstorms that occur in the area. Infected leaves show small,
brown, water soaked, circular spots surrounded with yellowish halo. On older plants the leaflet
infection is mostly on older leaves and may cause serious defoliation.</p>
<p><b>Control:</b>Bacterial spot is difficult to control once it appears inthe field. Disease-free seed and
seedlings should always be used and the crop should be rotated with non-host crops so as to avoid last
years crop residue. Seed treatment with mercuric chloride (1:1000) is also recommended for control of
disease. Spraying with a combination of copper and organic fungicides in a regular preventative spray
program at 5 to 10 day intervals or Spraying with Agrimycin-100 (100 ppm) thrice at 10 days intervals
effectively controls the disease. </p>
  </ul>

</div>

<ReactPlayer url='https://www.youtube.com/watch?v=KwQSjAAIqDo' className="Video"/>
    </div>
  )
}

export default Tomato