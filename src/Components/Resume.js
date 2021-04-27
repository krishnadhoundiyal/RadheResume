import React, { Component } from "react";
import Slide from "react-reveal";
import YouTube from 'react-youtube';
import Youtubecard from './youtubecard';
import ImgCard from './ImgCard'

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
	const sports = [{
		sports : "Junior Sports India - 2019",
		category : "400 meters",
		position: 1,
		description:"Annual Event conducted within Delhi schools",
		video : "o5XD0d9Yrak",
		
	},{
		sports : "SportyGo - 2019",
		category : "3000 meters",
		position: 1,
		description:"Annual Event conducted within Delhi schools",
		img : "../images/f.jpg",
	},{
		sports : "Airtel Marathon - 2020",
		category : "5000 meters",
		position: 1,
		description:"Annual Event conducted within Delhi schools",
		img : "../images/gold.png",
	}
	]
	const literature = [{
		type : "Books Authored",
		category : "Authored",
		name: "The Hunt for the Hotel Ghost - 2020",
		description:"Annual Event conducted within Delhi schools",
		img : "../images/book.jpg",
		
	},{
		type : "Books Read",
		category : "Read",
		name: "Harry Potter - All Volumes",
		description:"Annual Event conducted within Delhi schools",
		img : "../images/book.jpg",
	},{
		type : "Sanskrit - Ucharan",
		category : "Memorization",
		name: "Rudrashtakam",
		description:"Annual Event conducted within Delhi schools",
		video : "yDo-fAPd1PQ",
	},
	{
		type : "Hindi - Ucharan",
		category : "Memorization",
		name: "Krishna Ki Chetavani",
		description:"Annual Event conducted within Delhi schools",
		video : "HXq5IGci_Ec&t=4s",
	}
	]
    const education = sports.map(function (sport) {
      return (
        <div key={sport.sports}>
          <h3>{sport.sports}</h3>
          <p className="info">
            {sport.category} <span>&bull;</span>
            <em className="date">{sport.position}</em>
          </p>
          <p>{sport.description}</p>
		  {"video" in sport ? (
				<Youtubecard id={sport.video} />
			  ) : (
				<ImgCard id={sport.img} />
			  )}
		  
        </div>
      );
    });

    const work = literature.map(function (interest) {
      return (
        <div key={interest.type}>
          <h3>{interest.category}</h3>
          <p className="info">
            {interest.name}
           
          </p>
          <p>{interest.description}</p>
		  {"video" in interest ? (
				<Youtubecard id={interest.video} />
			  ) : (
				<ImgCard id={interest.img} />
			  )}
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Sports</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Literature</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
