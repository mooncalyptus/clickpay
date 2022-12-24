import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";


const Home = () => {
  return (
    <>
      <nav className="bg-[#82C3EC]">
        <div className="flex">
          <div className="grow pl-[5%]">
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

      <article className="font-nunito bg-[#E5E5E5]">
        <div className="flex justify-center">
          <span className="text-6xl font-extrabold"><span className="text-[#82C3EC]">About</span> the Application.</span>
        </div>
        <div className="flex justify-center">
          <div>We have some great features from the application and it’s totally </div>
        </div>
        <div className="flex justify-center">
          <div>free to use by all users around the world.</div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white w-[25%] rounded-md">
            <div className="bg-[#82C3EC] flex justify-center rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <span className="font-bold text-lg pt-9">24/7 Support</span>
              </div>
              <div className="flex justify-center">
                <span className="text-lg px-7 pt-9 pb-[50px]">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</span>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="flex justify-center">
              <svg className="w-6 h-6 bg-[#82C3EC] rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="flex flex-col">
              <span>Data Privacy</span>
              <span>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</span>
            </div>
          </div>

          <div className="bg-white">
            <div className="bg-[#82C3EC] rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
          </div>
        </div>
      </article>

      <section className="font-nunito bg-[#82C3EC]">
        <div className="flex">
          <div className="flex flex-col">
            <div className="pl-[30%]">
              <Image src={require('../assets/phone-1.png')} alt="desc" ></Image>
            </div>
            <div className="pl-[30%]">
              <Image src={require('../assets/phone-main.png')} alt="desc" ></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-6xl font-extrabold">
              <div>All The <span className="text-[#F1F6F5]">Great </span></div>
              <div>FazzPay Features.</div>
            </div>

            <div className="bg-white rounded-lg mt-10 px-8 py-6">
              <div className="flex flex-col">
                <span><span className="text-[#82C3EC]">1.</span> Small Fee</span>
                <span className="text-[#3A3D42] opacity-90">We only charge 5% of every success transaction done in ClickPay app.</span>
              </div>
            </div>


            <div className="bg-white rounded-lg mt-[30px] px-8 py-6">
              <div className="flex flex-col">
                <span><span className="text-[#82C3EC]">2.</span> Data Secured</span>
                <span className="text-[#3A3D42] opacity-90">All your data is secured properly in our system and it’s encrypted.</span>
              </div>
            </div>

            <div className="bg-white rounded-lg mt-[30px] px-8 py-6">
              <div className="flex flex-col">
                <span><span className="text-[#82C3EC]">3.</span> User Friendly</span>
                <span className="text-[#3A3D42] opacity-90">ClickPay come up with modern and sleek design and not complicated.</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="bg-[#E5E5E5] font-nunito pb-[120px]">
        <div className="flex flex-col items-center">
          <span className="text-6xl">What Users are <span className="text-[#82C3EC]">Saying.</span></span>
          <span>We have some great features from the application and it’s totally free to use by all users around the world.</span>
        </div>
        <div className="bg-white flex flex-col items-center mx-[10%] rounded-md">
          <Image src={require('../assets/profile-2.png')} width="120" height="120" alt="desc" ></Image>
          <span className="text-[26px] font-bold">Alex Hansinburg</span>
          <span className="text-[#56585B] text-5">Designer</span>
          <div className="p-[60px]">
          <span>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</span>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Home;