import information from "../Utils/information";
const Services = () => {
  return (
    <div className="bg-green-900 flex flex-col md:flex-row justify-around p-4 md:p-10">
      {information.servicios.map((servicios) => {
        console.log(servicios.img);
        return (
          <div
            key={servicios.id}
            className="p-4 m-2 min-w-80 text-center text-white text-sm flex flex-col justify-center items-center "
          >
            <img src={servicios.img} alt="" className="h-auto max-w-40" />
            <h3 className="p-2 text-green-600 font-bold">{servicios.title}</h3>
            <p>{servicios.paragraph}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
