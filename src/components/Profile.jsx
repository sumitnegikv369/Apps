// langauge switcher use
import tw from "tailwind-styled-components";
import { FaInstagram, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import {infoArray,} from "../utils/content";
import { useContext, useState } from "react";
import { ThemeContext } from "../pages/Home";
const Profile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [showLanguage, setShowLanguage] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  const info = infoArray[selectedLanguage];
  return (
    <>
      <Header>
        <Nav>
          <Logo>{info.logo}</Logo>
          <div className="gap-3 flex items-center relative">
            <button className="bg-orange-400/20 p-2 rounded-full">{
              theme==="dark" ? <FaSun size={20} onClick={()=>setTheme("light")}/> : <FaMoon size={20} onClick={()=>setTheme("dark")}/>
            }</button>
            <IoLanguage size={25} onClick={()=>setShowLanguage(true)}/>
            {showLanguage && 
            <select multiple onChange={(e)=>{
              setSelectedLanguage(parseInt(e.target.value));
              setShowLanguage(false);
            }} className="text-white bg-transparent absolute top-14 left-10 overflow-hidden outline-none">
              <option className="text-[#00C6A8] mb-2 bg-[#2C3539]/0" value={"0"}>English</option>
              <option className="text-[#00C6A8] mb-2 bg-[#2C3539]/0" value={"1"}>Hindi</option>
              <option className="text-[#00C6A8] mb-2 bg-[#2C3539]/0" value={"2"}>Japanese</option>
            </select>}
          </div>
        </Nav>
      </Header>
      <Main>
        <TagLine>
          {info.tagLine}
        </TagLine>
        <div className="mx-auto text-center">
          <h1 className="text-2xl font-semibold">{info.name}</h1>
          <p className="text-lg font-medium">{info.titles}</p>
          <img src="me.jpeg" alt="" className="w-64 rounded-full mt-8 border-2 border-[#00c6a84b] mx-auto" />
        </div>
        <Box className="text-center">
          <Title>{info.work.title}</Title>
          <About>
          {info.work.aboutMe}
          </About>
          <button className="my-4 mx-auto bg-[#00C6A8] px-4 py-2 rounded-lg text-sm border-2 border-white/20 font-medium text-[#2C3539]">{info.button1}</button>
        </Box>
        <Box>
          <Title>{info.bio.title}</Title>
          <Year>{info.bio.yearInfo[0][0]}
          <Info>{info.bio.yearInfo[0][1]}</Info></Year>
          <Year>{info.bio.yearInfo[1][0]}
          <Info>
            {info.bio.yearInfo[1][1]}
          </Info></Year>
          <Year>{info.bio.yearInfo[2][0]}
          <Info>
            {info.bio.yearInfo[2][1]}
          </Info></Year>
        </Box>
        <Box>
          <Title>{info.interest[0]}<span className="text-2xl ml-1">&#9829;</span></Title>
          <Info>
          {info.interest[1]}
          </Info>
        </Box>
      </Main>
      <Footer>
        <Title>{info.onTheWeb.title}</Title>
        <div className="flex gap-6 tracking-wide">
          <span className="cursor-pointer duration-700 ease-linear tracking-widest transition-all text-[#00C6A8] hover:bg-[#00C6A8] hover:text-[#2C3539] py-2 px-4 rounded-md flex flex-col justify-center items-center gap-1 bg-white/5"><FaGithub size={20}/></span>
          <span className="cursor-pointer duration-700 ease-linear tracking-widest transition-all text-[#00C6A8] hover:bg-[#00C6A8] hover:text-[#2C3539] py-2 px-4 rounded-md flex flex-col justify-center items-center gap-1 bg-white/5"><FaLinkedin size={20}/></span>
          <span className="cursor-pointer duration-700 ease-linear tracking-widest transition-all text-[#00C6A8] hover:bg-[#00C6A8] hover:text-[#2C3539] py-2 px-4 rounded-md flex flex-col justify-center items-center gap-1 bg-white/5"><FaInstagram size={20}/></span>
        </div>
        <button className="my-4 mx-auto bg-[#00C6A8] px-4 py-2 rounded-lg text-sm border-2 border-white/20 font-medium text-[#2C3539]">{info.button2}</button>
        <p className="text-white/20 tracking-widest">{info.footer}</p>
      </Footer>
    </>
  );
};

export default Profile;

const Header = tw.header`w-full`;
const Main = tw.main`my-4 mx-20 flex flex-col gap-4`;
const Footer = tw.footer`flex flex-col text-center items-center gap-4`;

const Nav = tw.nav`flex justify-between`;
const Logo = tw.h1`text-xl`;
const TagLine = tw.h2`mx-auto text-md tracking-wide font-normal bg-white/10 py-2 px-4 rounded-md`;

const Box = tw.div`text-xl my-4`;
const Title = tw.h2`font-semibold text-xl mb-2 pb-1 border-b-4 border-[#00C6A8]/20 w-fit`;
const About = tw.p`font-normal text-white/60 text-sm text-justify tracking-wide`;
const Info = tw.span`font-normal text-white/60 ml-4 text-sm text-justify tracking-wide`;
const Year = tw.p`text-[1rem]`;

