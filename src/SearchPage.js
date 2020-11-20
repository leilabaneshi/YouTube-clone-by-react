import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>

            </div>
            <hr />
            <ChannelRow
                image='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s88-c-k-c0xffffffff-no-rj-mo'
                channel='Dev Ev'
                verified
                subs='490k'
                noOfVideos={182}
                description='Learn web development, web design, 3d modelling, tools like figma and more without getting bored! The goes of this channel is to ...'



            />
            <hr />
            <VideoRow
                views='1.4M' subs='490K'
                description='Check out my courses and become more creative! https://developedbyed.com/ #javascript #react Today we are going to learn the ...'
                timestamp='1 hour ago'
                channel='Dev Ev'
                title='React course for beginner'
                image='https://i.ytimg.com/vi/dGcsHMXbSOA/mqdefault.jpg'
            />
            <VideoRow
                views='1M' subs='490K'
                description='Check out my courses and become more creative! https://developedbyed.com My take on making a responsive navigation bar in .'
                timestamp='7 hour ago'
                channel='Dev Ev'
                title='Responsive Navigation Bar Tutorial | HTML CSS JAVASCRIPT'
                image='https://i.ytimg.com/vi/gXkqy0b4M5g/mqdefault.jpg'
            />
            <VideoRow
                views='800k' subs='490K'
                description='My new HTML5 & CSS3 COURSE IS OUT NOW! https://developedbyed.com/ Today we are going to take a look at how to build ...'
                timestamp='20 hour ago'
                channel='Dev Ev'
                title='Learn To Build An SVG Animation With CSS'
                image='https://i.ytimg.com/vi/FK4YusHIIj0/mqdefault.jpg'
            />
            <VideoRow
                views='265k' subs='490K'
                description='My new HTML5 & CSS3 COURSE IS OUT NOW! https://developedbyed.com/ Today we are going to take a look at how to build ...'
                timestamp='11 hour ago'
                channel='Dev Ev'
                title='Learn To Build An SVG Animation With CSS'
                image='https://i.ytimg.com/vi/gWai7fYp9PY/mqdefault.jpg'
            />
            <VideoRow
                views='150k' subs='490K'
                description='Check out my courses and become more creative! https://developedbyed.com/ https://studywebdevelopment.com/freelancing.html ...'
                timestamp='5 hour ago'
                channel='Dev Ev'
                title=' Node.js Tutorial For Beginners | Node JS Crash Course'

                image='https://i.ytimg.com/vi/zQRrXTSkvfw/mqdefault.jpg'
            />




        </div>
    )
}

export default SearchPage
