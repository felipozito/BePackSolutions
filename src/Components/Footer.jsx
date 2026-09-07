import Card from "./Card";
import information from "../Utils/information";
import logo from "../Assets/logo.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-slate-500 h-auto p-5">
        <Card
          icon="📚"
          paragraph={information.social[0].text}
          title={information.social[0].title}
          text={information.social[0].link}
        />
        <Card
          icon="📚"
          paragraph={information.social[1].text}
          title={information.social[1].title}
          text={information.social[1].link}
        />
        <Card
          icon="📚"
          paragraph={information.social[2].text}
          title={information.social[2].title}
          text={information.social[2].link}
        />
      </div>
      <div className="h-20 p-12 flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
