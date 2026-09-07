import Services1 from "../assets/services1.png";
import Services2 from "../assets/services2.png";
import Services3 from "../assets/services3.png";

const information = {
  vision: {
    title: "Vision",
    paragraph:
      "Ser reconocidos en el mercado ecuatoriano como una empresa comprometida con el medio ambiente y generando productos de calidad y rentabilidad, dando soluciones a las expectativas de nuestros clientes.",
  },
  mision: {
    title: "Mision",
    paragraph:
      "Apoyar a nuestros clientes con productos nuevos elaborados con materia prima biodegradable y/o reciclable aportando al cuidado de nuestro planeta.",
  },
  servicios: [
    {
      img: `${Services1}`,
      title: "Cumplimos Normativas",
      paragraph: "Respetar nuestras obligaciones contractuales y con el estado",
    },
    {
      img: `${Services2}`,
      title: "Ayudamos al Medio Ambiente",
      paragraph:
        "Evaluar los efectos de los productos en el bienestar de las personas a las que van destinados y en el medio ambiente",
    },
    {
      img: `${Services3}`,
      title: "Calidad e Innovación",
      paragraph:
        "Nuestras acciones se fundamentan en integridad, honestidad ética e innovación, calidad y pasión por lo que hacemos",
    },
  ],
  products: [
    { title: "FUNDAS BIODEGRADABLES" },
    { title: "ENVASES ALIMENTICIOS" },
    { title: "CAJAS ALIMENTICIAS" },
    { title: "RECIPIENTES BIODEGRADABLES" },
  ],
  galleries: [
    {
      title: "Bolsas",
      description: "Bolsas de sellado para productos alimenticios",
      images: [
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    {
      title: "Envases",
      description: "Envases para el empaquetado de productos alimenticios",
      images: [
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    {
      title: "Recipientes",
      description:
        "Recipientes para almacenar los productos de tipo consumibles",
      images: [
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    {
      title: "Fundas",
      description:
        "Fundas con la funcion de recolectar y almacenar los productos de calidad",
      images: [
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1591382386627-349b692688ff?auto=format&fit=crop&q=80&w=1000",
      ],
    },
  ],
  social: [
    {
      title: "Facebook",
      text: "Visitanos en nuestra pagina de Facebook official",
      link: "https://web.facebook.com/profile.php?id=100071007382191",
    },
    {
      title: "mail",
      text: "Escribenos Te esperamos",
      link: "bepacksolutions@gmail.com",
    },
    { title: "whatsapp", text: "Llamanos o Escribenos", link: "0967752069" },
  ],
};

export default information;
