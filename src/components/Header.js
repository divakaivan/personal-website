import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
    font-size: 6.5vw;
    font-weight: bold;
    padding: 50px 50px;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 450px) {
      font-size: 35px;
    }
`;

const Dev = styled.div`
  .attr {
    font-family: 'Anonymous Pro', monospace;
    background-color: #C3F8FF;
    font-size:1.2rem;
    margin: 0 .5rem 0 .5rem;
  }

  .attr:hover {
    background-color: transparent;
 }
`;

const Br = styled.br`
  display: none;
  @media (max-width: 775px) {
    display: block;
  }
`;

const Br2 = styled.br`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const Icons = styled.div`
    padding: 1rem;
    a {
      color: black;
      &:visited {
        color: black;
      }
    }
    .fab {
      -webkit-transition: -webkit-transform .2s ease-in-out;
      transition:         transform .2s ease-in-out;

      &:hover {
      -webkit-transform: rotate(30deg);
            transform: rotate(30deg);
      }
    }

  i {
    font-size: 1.6rem;
    padding:1rem;
  }
`;

const Hr = styled.hr`
    border: none;
    height: 1px;
    color: black;
    background-color: #333; 
    max-width: 900px;
`;

const Navigation = styled.div`
  padding: 0 2rem 0 2rem;
  margin-bottom: 1rem;
  a {
    padding: 0 1rem 1rem 1rem;    
  }
`;

const Header = () => (
    <div className="container">
        <H1 className="text-center">Ivan Ivanov</H1>
        <Dev className="text-center">
            <span className="attr">Fullstack developer</span>
            <Br/>
            <span>•</span>
            <Br/>
            <span className="attr">Summer 2021 graduate</span>
            <Br2/>
            <span>•</span>
            <Br/>
            <span className="attr">LoL esports enthusiast</span>
        </Dev>
        <Icons className="text-center">
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/divakaivan'><i className="fab fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ivansivanov/'><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/divakaivan/personal-website/raw/master/IvanIvanovCV.pdf"><i className="fab fa fa-file"></i></a>
            {/*  TODO change the link to a public repo with the CV. */}
            <a href="mailto:isivanov98@outlook.com"><i className="fab fas fa-envelope"></i></a>
        </Icons>
        <Navigation className="text-center">
            <Link to="/">About</Link>
                        |
            <Link to="/work">Work experience</Link>
                        |
            <Link to="/about">Extra</Link>
        </Navigation>
        <Hr/>
    </div>

);

export default Header;