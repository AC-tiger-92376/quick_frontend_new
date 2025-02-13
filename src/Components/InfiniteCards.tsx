//
//import Img11 from '../assets/images/CardImage/11.png';
//import Img12 from '../assets/images/CardImage/12.png';
interface carditem{
  id:number;
  title: string;
  img: string;
  icon:string;
  link: string

}

const InfiniteCards: carditem[] = [
  {id: 11, title: "The Arts", img: "{Img11}", icon: {}+"11.svg", link: "#"},
  {id: 12, title: "Technology", img: "{Img12}", icon: {}+"12.svg", link: "#"},
  {id: 13, title: "Auto", img: {}+"13.png", icon: {}+"13.svg", link: "#"},
  {id: 14, title: "Remedial", img: "", icon: "", link: "#"},
  {id: 15, title: "Academics", img: "", icon: "", link: "#"},
  {id: 16, title: "Trades", img: "", icon: "", link: "#"},

  {id: 21, title: "Sports & Games", img: "", icon: "", link: "#"},
  {id: 22, title: "Business", img: "", icon: "", link: "#"},
  {id: 23, title: "Outdoors", img: "", icon: "", link: "#"},
  {id: 24, title: "Languages", img: "", icon: "", link: "#"},
  {id: 25, title: "LifeStyle", img: "", icon: "", link: "#"},
  {id: 26, title: "Health", img: "", icon: "", link: "#"},


] ; 
export default InfiniteCards;
