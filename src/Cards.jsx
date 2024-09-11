import image from "./assets/download.jfif";
const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="text-center p-3 m-3 shadow-lg ">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto hover:scale-125 duration-1000"
          />
        </div>
        <h1 className="text-5xl">Crad 1</h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          magni impedit ipsum dolorem non beatae architecto nam, iure rerum.
          Nisi aliquid quod sint officia ullam iusto suscipit, porro vitae ab?
          Reprehenderit blanditiis quisquam, odit, nihil inventore itaque
          laboriosam commodi ipsam, hic explicabo nemo veritatis dolor
          perferendis. Sed accusamus provident dicta adipisci, labore culpa
          alias neque, beatae necessitatibus dolores eius repellat?
        </p>
      </div>
      <div className="text-center p-3 m-3 shadow-lg ms-3 ">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto hover:scale-125 duration-1000"
          />
        </div>
        <h1 className="text-5xl">Crad 2</h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          magni impedit ipsum dolorem non beatae architecto nam, iure rerum.
          Nisi aliquid quod sint officia ullam iusto suscipit, porro vitae ab?
          Reprehenderit blanditiis quisquam, odit, nihil inventore itaque
          laboriosam commodi ipsam, hic explicabo nemo veritatis dolor
          perferendis. Sed accusamus provident dicta adipisci, labore culpa
          alias neque, beatae necessitatibus dolores eius repellat?
        </p>
      </div>
      <div className="text-center p-3 m-3 shadow-lg ms-3 ">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto hover:scale-125 duration-1000"
          />
        </div>
        <h1 className="text-5xl">Crad 3</h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          magni impedit ipsum dolorem non beatae architecto nam, iure rerum.
          Nisi aliquid quod sint officia ullam iusto suscipit, porro vitae ab?
          Reprehenderit blanditiis quisquam, odit, nihil inventore itaque
          laboriosam commodi ipsam, hic explicabo nemo veritatis dolor
          perferendis. Sed accusamus provident dicta adipisci, labore culpa
          alias neque, beatae necessitatibus dolores eius repellat?
        </p>
      </div>
      <div className="text-center p-3 m-3 shadow-lg ms-3 ">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto hover:scale-125 duration-1000"
          />
        </div>
        <h1 className="text-5xl">Crad 4</h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          magni impedit ipsum dolorem non beatae architecto nam, iure rerum.
          Nisi aliquid quod sint officia ullam iusto suscipit, porro vitae ab?
          Reprehenderit blanditiis quisquam, odit, nihil inventore itaque
          laboriosam commodi ipsam, hic explicabo nemo veritatis dolor
          perferendis. Sed accusamus provident dicta adipisci, labore culpa
          alias neque, beatae necessitatibus dolores eius repellat?
        </p>
      </div>
    </div>
  );
};

export default Cards;
