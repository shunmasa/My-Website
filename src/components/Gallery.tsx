
import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';
import { useTheme } from "@material-ui/core/styles";
const SliderGallery = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  const THRESHOLD = [0.25, 0.5, 0.75];
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: THRESHOLD,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
const Container = styled.div`
/* position: absolute; */
top: 0;
left: 0;
min-height: 100%;
width: 100%;
@media screen and (max-width: 760px) {
  width: 90%;
}
@media screen and (max-width: 500px) {
  width: 100%;
}
`

const Row = styled.div`
max-width: 1600px;
padding: 0;
margin: 0;
height:700px;
background-color: #f1f1f1;
@media screen and (max-width: 1440px) {
  max-width: 1250px;
}
@media screen and (max-width: 670px) {
  padding: 0;
  height:620px;
}
`

const ArrowBtn = styled.span`
display: inline-block;
position: absolute;
top: 50%;
right: ${({ type }:any) => (type === 'right' ? '-40px' : 'unset')};
left: ${({ type }:any) => (type === 'left' ? '-40px' : 'unset')};
width: 45px;
height: 45px;
background: #fff;
border-radius: 50%;
box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
cursor: pointer;
&::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ type }:any) =>
    type === 'right'
      ? 'translate(-75%, -50%) rotate(45deg)'
      : 'translate(-25%, -50%) rotate(-135deg)'};
  width: 10px;
  height: 10px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
}
&:hover::after {
  border-color: #333;
}
`

const Card = styled.div`
margin: 2px;
border-radius: 6px;
border: 1px solid #eaeaea;
overflow: hidden;
cursor: pointer;
transition: box-shadow 0.25s;
:hover {
  box-shadow: 0 0 2px 0 #00000063;
}
`

const Img = styled.div`
height: 400px;
width:100%;
margin-bottom: 4px;
background-image: ${({ img }:any) => `url(${img})`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

// const H2 = styled.div`
// padding: "20px";
// font-size:'40px';
// text-align:"center";
// @media screen and (max-width: 500px) {


//   font-size:'29px';
// }
// `
const Code = styled.pre`
max-width: 1100px;
margin: 15px auto;
background: lightblue;
padding: 20px;
box-sizing: border-box;
overflow: auto;
`

const Reference = styled.div`
margin: 50px auto;
width: 100%;
max-width: 1100px;
border-top: 1px solid #666;
img {
  width: 100%;
}
`
  return (
    <Container>
   
    <Row>
      <h2 style={{padding: "20px",fontSize:matchesXS?'20px':'40px',textAlign:"center"}}
>
       <Typewriter
  options={{
    strings: ['Studentフォトギャラリー'],
     autoStart: true,
     loop: true,
   }}
   onInit={(typewriter) => {
     typewriter.typeString('Studentフォトギャラリー')
       .callFunction(() => {
        //  console.log('String typed out!');
      })
       .pauseFor(2500)
       .deleteAll()
       .callFunction(() => {
        //  console.log('All strings were deleted');
       })
       .start();
         }}
   />
      </h2>
    <Carousel
  cols={3}
  rows={1}
  gap={11}
  responsiveLayout={[
    {
      breakpoint: 1200,
      cols: 3
    },
    {
      breakpoint: 990,
      cols: 2
    }
  ]}
  mobileBreakpoint={670}
   // @ts-ignore */ 
  arrowRight={<ArrowBtn type="right" />}
   // @ts-ignore */ 
  arrowLeft={<ArrowBtn type="left"/>}
>

   

    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery2.JPG`} />
      
      
      </Card>
    </Carousel.Item>


    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery3.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery4.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery5.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery6.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery7.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery8.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery9.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery10.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery11.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery12.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery13.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery14.jpg`} />
      
      
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card>
     
        <Img   /*
      // @ts-ignore */ 
      img={`/assets/gallery15.jpg`} />
      
      
      </Card>
    </Carousel.Item>


</Carousel>
</Row>
</Container>
  )
}

export default SliderGallery