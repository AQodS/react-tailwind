import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";
import Proyek4 from "../assets/images/proyek-4.webp";
import Proyek5 from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Start */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Website with React and
              <span className="text-sky-500 font-semibold ms-2">
                Tailwind CSS <i className="ri-tailwind-css-fill"></i>
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              vero dicta numquam ullam eaque accusamus rem mollitia accusantium
              placeat tempore!
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 text-white py-2 px-4 rounded-xl shadow"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>
        {/* Hero End */}

        {/* About Start */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Website with React and
              <span className="text-sky-500 font-semibold ms-2">
                Tailwind CSS <i className="ri-tailwind-css-fill"></i>
              </span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nemo inventore mollitia non laboriosam labore ipsa perspiciatis
              aliquam consequuntur debitis.
            </p>
          </div>
        </div>
        {/* About End */}

        {/* Service Start */}
        <div className="service pt-32" id="service">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Layanan
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 1
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quo eius dolorem libero totam est?
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 2
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti rerum nesciunt, autem rem iste non.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 3
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                in laboriosam eum dolorem, reprehenderit dolore.
              </p>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* Project Start */}
        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Proyek
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow-lg rounded-lg">
              <img src={Proyek1} alt="proyek 1" className="w-full sm:h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio a pariatur dolor iure ipsum asperiores.
              </p>
            </div>
            <div className="box p-2 bg-white shadow-lg rounded-lg">
              <img src={Proyek2} alt="proyek 2" className="w-full sm:h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio a pariatur dolor iure ipsum asperiores.
              </p>
            </div>
            <div className="box p-2 bg-white shadow-lg rounded-lg">
              <img src={Proyek3} alt="proyek 3" className="w-full sm:h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio a pariatur dolor iure ipsum asperiores.
              </p>
            </div>
            <div className="box p-2 bg-white shadow-lg rounded-lg">
              <img src={Proyek4} alt="proyek 4" className="w-full sm:h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio a pariatur dolor iure ipsum asperiores.
              </p>
            </div>
            <div className="box p-2 bg-white shadow-lg rounded-lg">
              <img src={Proyek5} alt="proyek 5" className="w-full sm:h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio a pariatur dolor iure ipsum asperiores.
              </p>
            </div>
          </div>
        </div>
        {/* Project End */}
      </div>
    </div>
  );
};

export default HomePage;
