import Link from "next/link";
import Image from "next/image";
import logo from '../assets/logo-remove.png'


const Home = () => {
  return (
    <>
      <nav className="bg-[#82C3EC]">
        <div className="flex">
          <div className="grow pl-[5%]">
            {/* <Image src={logo} alt="logo"  width= "350"
      height="300"></Image> */}
            <Image src={require('../assets/logo-remove.png')} width="109" height="40" alt="desc" ></Image>
          </div>
          <div className="flex justify-center items-center mr-[5%]">
            <div className="flex gap-7">
              <button className="outline outline-2 text-white py-2 px-9 rounded-md hover:bg-white hover:text-[#82C3EC]">Login</button>
              <button className="outline outline-2 text-[#82C3EC] bg-white py-2 px-9 rounded-md hover:bg-[#82C3EC] hover:text-white">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex bg-[#82C3EC] font-nunito">
        <div className="grow pt-[10%] pl-[10%]">
          <div className="flex flex-col mb-9">
          <span className="text-white font-extrabold text-6xl">Awesome App</span>
          <span className="text-white font-extrabold text-6xl">for saving time</span>
          </div>
          <div className="flex flex-col mb-12">
          <span className="text-lg text-white">We bring you a mobile app for banking problems that</span>
          <span className="text-lg text-white">oftenly wasting much of your times.</span>
          </div>
          <div>
          <button className="outline outline-2 text-[#82C3EC] bg-white py-2 px-9 rounded-md hover:bg-[#82C3EC] hover:text-white">Try It Free</button>
          </div>
        </div>
        <div>
        <Image src={require('../assets/phone-main.png')} width="600" alt="desc" ></Image>
        </div>
      </main>

      <section className="bg-white flex mt-[5%]">
        <div>
        <Image src={require('../assets/brand-logo.png')} alt="desc" ></Image>
        </div>
      </section>

      <article>
        
      </article>
    </>
  )
}

export default Home;