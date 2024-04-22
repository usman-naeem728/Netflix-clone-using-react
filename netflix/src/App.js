import "./App.css";
import logo from "./assets/images/logo.svg";
import bgimg from "./assets/images/bg.jpg";
import styled from "styled-components";

function App() {
  const Main = styled.div`
    background-image: url(${bgimg});
    background-position: center center;
    background-size: max(1200px, 100vw);
    background-repeat: no-repeat;
    height: 644px;
    position: relative;
  `;
  const Button = styled.button`
    padding: 3px 8px;
    font-weight: 400;
    color: white;
    background-color: rgba(248, 243, 243, 0.021);
    border-radius: 4px;
    border: 1px solid white;
    cursor: pointer;
  `;
  const Nav = styled.nav`
    max-width: 60vw;
    justify-content: space-between;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100px;
  `;

  const NavImg = styled.img`
    color: red;
    width: 130px;
    position: relative;
    z-index: 10;
  `;
  const NavBtn = styled(Button)`
    position: relative;
    z-index: 10;
  `;
  const NavBtn2 = styled(Button)`
    position: relative;
    z-index: 10;
    background-color: red;
    color: white;
  `;

  const Box = styled.div`
    height: 644px;
    width: 100%;
    opacity: 0.69;
    position: absolute;
    top: 0;
    background-color: black;
  `;

  const Hero = styled.div`
    font-family: "Martel Sans", sans-serif;
    height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    position: relative;
    gap: 23px;
    padding: 0 30px;
  `;

  const Heading = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    font-size: 48px;
    text-align: center;
  `;

  const SubHeading = styled.span`
    font-weight: 400;
    font-size: 24px;
    text-align: center;
  `;

  const SubHeading2 = styled.span`
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  `;

  const SeparationLine = styled.div`
    height: 7px;
    background-color: rgb(46, 44, 44);
    position: relative;
    z-index: 20;
  `;

  const HeroInputField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `;

  const InputField = styled.input`
    padding: 7px 101px 8px 14px;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    background-color: rgba(23, 23, 23, 0.7);
    border: 1px solid rgba(246, 238, 238, 0.5);
  `;

  const HeroBtn = styled(Button)`
    background-color: red;
    color: white;
    padding: 3px 24px;
    font-size: 20px;
    border-radius: 4px;
    font-weight: 400;
  `;

  const Section = styled.section`
    display: flex;
    justify-content: center;
    max-width: 70vw;
    margin: auto;
    color: white;
    justify-content: center;
    align-items: center;
  `;

  const SecDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 0;`

  const SecDivText = styled.div`
  font-size: 48px;
  font-weight: bolder;`

  const SecDivText2 = styled(SecDivText)`
  font-size: 24px;`

  const SecImg = styled.img`
    width: 555px;
    position: relative;
    z-index: 10;
  `;

  const SecVideo = styled.video`
    position: absolute;
    top: 106px;
    right: 47px;
    width: 480px;
  `;

  


  return (
    <>
      <Main>
        <Nav>
          <span>
            <NavImg width="53" src={logo} alt="" />
          </span>
          <div>
            <NavBtn>English</NavBtn>
            <NavBtn2>Sign In</NavBtn2>
          </div>
        </Nav>
        <Box></Box>
        <Hero>
          <Heading>Enjoy big movies, hit series and more from ₹ 149.</Heading>
          <SubHeading>Join today. Cancel anytime.</SubHeading>
          <SubHeading2>
            Ready to watch? Enter your email to create or restart your
            membership.
          </SubHeading2>
          <HeroInputField>
            <InputField type="text" placeholder="Email Address" />
            <HeroBtn>Get Started &gt;</HeroBtn>
          </HeroInputField>
        </Hero>
        <SeparationLine></SeparationLine>
      </Main>
      {/* First */}
      <Section>
        <SecDiv>
          <SecDivText>Enjoy on your TV</SecDivText>
          <SecDivText2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </SecDivText2>
        </SecDiv>

        <div style={{ position: "relative" }}>
          <SecImg
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <SecVideo
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            muted
            loop
          />
        </div>
      </Section>
      <SeparationLine ></SeparationLine>
      {/* Second */}
      <Section>
          <SecImg
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        <SecDiv>
          <SecDivText>Download your shows to watch offline</SecDivText>
          <SecDivText2>
            Save your favourites easily and always have something to watch.
          </SecDivText2>
        </SecDiv>
      </Section>
      <SeparationLine></SeparationLine>
      {/* Third */}
      <Section class="first third">
        <SecDiv>
          <SecDivText>Watch everywhere</SecDivText>
          <SecDivText2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </SecDivText2>
        </SecDiv>

        <div style={{ position: "relative" }}>
          <SecImg
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <SecVideo
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            autoPlay
            loop
            muted
          ></SecVideo>
        </div>
      </Section>
      <SeparationLine></SeparationLine>
      {/* Fourth */}
      <Section>
        <div style={{ position: "relative" }}>
          <SecImg
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <SecDiv>
          <SecDivText>Create profiles for kids</SecDivText>
          <SecDivText2>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </SecDivText2>
        </SecDiv>
      </Section>
      <SeparationLine></SeparationLine>
      <section class="faq">
        <h2>Frequently Asked Questions</h2>
        <div class="faqbox">
          <span>What is NetFlix</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="faqbox">
          <span>How much does Netflix cost?</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="faqbox">
          <span>What can I watch on Netflix?</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="faqbox">
          <span>Where can I watch?</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>
      <div class="separation"></div>
      <footer>
        <div class="questions">Questions? Call 000-800-919-1694</div>
        <div class="footer">
          <div class="footer-item">
            <a href="faq">Investor Relations</a>
            <a href="faq">Jobs</a>
            <a href="faq">Ways to Watch</a>
            <a href="faq">Terms of Use</a>
          </div>

          <div class="footer-item">
            <a href="faq">Help Centre</a>
            <a href="faq">Account</a>
            <a href="faq">Speed Test</a>
            <a href="faq">Legal Notices</a>
          </div>
          <div class="footer-item">
            <a href="faq">Media Centre</a>
            <a href="faq">Privacy</a>
            <a href="faq">Cookie Preferences</a>
            <a href="faq">Corporate</a>
          </div>

          <div class="footer-item">
            <a href="faq">Contact Us</a>
            <a href="faq">Speed Test</a>
            <a href="faq">Legal Notices</a>
            <a href="faq">Only on Netflix</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
