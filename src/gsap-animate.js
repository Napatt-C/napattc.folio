gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const startWrap = document.querySelector('.start-wrap');
const startTexts = gsap.utils.toArray('.start-text')
const startText1 = document.querySelector('.start-text-1');
const scrollWrap = document.querySelector('.wrap-box-scroll');
const welcomeTexts = gsap.utils.toArray('.welcome-text');

const startTl = gsap.timeline();

// wrapped start page animation
startTexts.forEach(startText => {
    startTl.fromTo(startText, 1.5,
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, ease: 'expo.out', stagger: 0.1}
    , '<0.2');
});
startTl.to(startWrap, {yPercent: -100, ease: 'expo.out', duration: 1.5}, ">0.5");
startTl.to(startWrap, {opacity:0, zIndex: 2}, ">0.1")

// Profile image animation 
startTl.fromTo(pattImg, 0.5,
    {opacity: 0, yPercent: -20}, {opacity: 1, yPercent: 0, ease: 'expo.out'}
    , '<0.1');

// welcome text start animation Napatt and portfolio
welcomeTexts.forEach(welcomeText => {
    startTl.fromTo(welcomeText, 0.5,
        {opacity:0, yPercent: -30}, {opacity: 1, yPercent: 0, ease: 'expo.out', stagger: 0.1}
    , '<0.2')
});

// Hamburger button animation 
startTl.fromTo(hamBar, 0.5, 
    {opacity: 0, xPercent: 50}, {opacity: 1, xPercent: 0, ease: 'expo.out'}
  , '<0.1')



startTl.to(scrollWrap, 0.3,{yPercent: 48.5, zIndex: 200, ease: "slow(0.7, 0.7, false)"});
startTl.to(scrollWrap, 0.3, {xPercent: 55, ease: "slow(0.7, 0.7, false)"}, '>0.1');
startTl.fromTo(scrollWrap, 0.3, {zIndex: 200}, {yPercent: 100, xPercent: 50, zIndex: 0, ease: "slow(0.7, 0.7, false)"}, '>0.1');
startTl.to(scrollWrap, 0.3, {opacity: 0, ease: "slow(0.7, 0.7, false)"}, '>0.5');


// scroll animation

const welcomeCon = document.querySelector('.welcome-text-container');

// welcome page animation [Napatt's and portfolio] moving up when scrolling down
welcomeTexts.forEach(welcomeText => {
    gsap.to(welcomeText, {
        y: '-=80',
        scrollTrigger: {
            trigger: welcomeCon,
            start: '5% top',
            scrub: 1.25
        }
    })
});

// About guider move to the center of second About page

const guiders = gsap.utils.toArray('.guider');

guiders.forEach(guider => {
    const guiTl = gsap.timeline({
        scrollTrigger: {
            trigger: guider,
            start: 'top center',
            end: 'top center'
        }
    });
    guiTl.fromTo(guider, 0.5,
        {opacity: 0, xPercent: -50}, {opacity: 1, xPercent: 0, ease: 'expo.out'}
        )
    
})



// section's animation 

// 01.1 about-page : text

const textBox1 = document.querySelector('.text-box-1');
const headTexts1 = gsap.utils.toArray('.head-text-1');
const conTexts1 = gsap.utils.toArray('.content-text-1');

const aboutTl1 = gsap.timeline({
    scrollTrigger: {
        trigger: textBox1,
        start: '20% 60%',
        end: '20% 60%'
    }
});

headTexts1.forEach(headText1 => {
    aboutTl1.fromTo(headText1, 0.8,
        {opacity: 0, yPercent: 10}, {opacity: 1, yPercent: 0, ease: 'expo.out'}
        , '<0.1');
});

conTexts1.forEach(conText1 => {
    aboutTl1.fromTo(conText1, 0.5, 
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, ease: 'expo.out', stagger: 0.1}
        , '<0.1')
});

const textBox2 = document.querySelector('.text-box-2');
const headTexts2 = gsap.utils.toArray('.head-text-2');
const conTexts2 = gsap.utils.toArray('.content-text-2');

const aboutTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: textBox2,
        start: '20% center',
        end: '20% center'
    }
});

headTexts2.forEach(headText2 => {
    aboutTl2.fromTo(headText2, 0.3,
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, ease: 'expo.out'}
        , '<0.1');
});

conTexts2.forEach(conText2 => {
    aboutTl2.fromTo(conText2, 0.2, 
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, ease: 'expo.out', stagger: 0.1}
        , '<0.1')
});

// 01.2 image animation

const imgBox2 = document.querySelector('.img-box-2');
const objs = gsap.utils.toArray('.obj');

const imgTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: imgBox2,
        start: '-10% 60%',
        end: '60% 30%',
        scrub: 1.25
    }
});

objs.forEach(obj => {
    imgTl2.to(obj, {
        y: '-=100', duration: 5, ease: 'none', stagger: 0.1,
        rotation: (i, target) => gsap.getProperty(target, "rotation") === -60 ? 60 : -60,
    }, 'start')
});

// 02 project

const projectPage = document.querySelector('.project-section-container-parent');
const projectObjs = gsap.utils.toArray('.project-obj')

const projectTl = gsap.timeline({
    scrollTrigger: {
        trigger: projectPage,
        start: 'top center',
        end: 'top center'
    }
});

projectObjs.forEach(projectObj => {
    projectTl.fromTo(projectObj, 0.1,
        {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, stagger: 0.1, ease: 'expo.out'}
        , '<0.1')
});

// 03 self-interest

const selfinPage = document.querySelector('.selfin-section-container-parent');
const selfinHeads = gsap.utils.toArray('.selfin-head-text');
const btcImg = document.querySelector('.btc-img');
const selfinContents = gsap.utils.toArray('.selfin-contenttext-sec');

const selfinTl = gsap.timeline({
    scrollTrigger: {
        trigger: selfinPage,
        start: 'top center',
        end: 'top center'
    }
});

selfinHeads.forEach(selfinHead => {
    selfinTl.fromTo(selfinHead, 0.5, 
        {opacity: 0, yPercent: 30}, {opacity: 1, yPercent: 0, stagger: 0.1, ease: 'expo.out'}
        , '<0.1')
});

selfinTl.from(btcImg, {rotation: 45, opacity: 0, ease: 'expo.out'}, '<-0.2');

selfinContents.forEach(selfinContent => {
    selfinTl.fromTo(selfinContent, 0.1, 
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, stagger: 0.1, ease: 'expo.out'}
        , '<0.1')
});

// 04 contact

const contactPage = document.querySelector('.contact-page-container');
const contactTexts = gsap.utils.toArray('.contact-text');
const contactIcons = gsap.utils.toArray('.contact-icon');
const handImg = document.querySelector('.contact-img');

const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: contactPage,
        start: 'top center',
        end: 'top center'
    }
});

contactTexts.forEach(contactText => {
    contactTl.fromTo(contactText, 1, 
        {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0, stagger: 0.1, ease: 'expo.out'}
        , '<0.1')
});

contactIcons.forEach(contactIcon => {
    contactTl.fromTo(contactIcon, 1, 
        {opacity: 0, yPercent: 50}, {opacity: 0.7, yPercent:0, stagger: 0.1, ease: 'expo.out'}
        , '<0.1')
});

contactTl.from(handImg, {scale: 0, rotation: 45, opacity: 0, ease: 'expo.out', transformOrigin: 'center center'}, '<0.1');


const container = document.querySelector('.container');

const containerTl = gsap.timeline({
    scrollTrigger: {
        trigger: container,
        start: '90% center',
        end: '90% center',
        scrub: 1.2
    }
});

containerTl.to(container, {backgroundColor: '#24382e', duration: 3, ease: 'none'});



