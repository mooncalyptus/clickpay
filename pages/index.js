import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import withAuth from "../components/hoc/withAuth";

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
             <Link href="/login"><button className="outline outline-2 text-white py-2 px-9 rounded-md hover:bg-white hover:text-[#82C3EC]">Login</button></Link>
             <Link href="/signup"> <button className="outline outline-2 text-[#82C3EC] bg-white py-2 px-9 rounded-md hover:bg-[#82C3EC] hover:text-white">Sign Up</button></Link>
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

      <section className="bg-white flex mt-[5%] justify-center items-center">
        <div>
          <Image src={require('../assets/brand-logo.png')} alt="desc" ></Image>
        </div>
      </section>

      <article className="font-nunito bg-[#E5E5E5]">
        <div className="flex justify-center pt-[120px]">
          <span className="text-6xl font-extrabold"><span className="text-[#82C3EC]">About</span> the Application.</span>
        </div>
        <div className="flex justify-center pt-[30px]">
          <div>We have some great features from the application and it’s totally </div>
        </div>
        <div className="flex justify-center">
          <div>free to use by all users around the world.</div>
        </div>

        {/* Section fitur */}
        <div className="flex justify-center items-center gap-5 pt-[70px] pb-[120px]">
          <div className="bg-white flex flex-col justify-center items-center px-[30px] rounded-md">
            <div className="bg-[#F1F6F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="text-2xl font-bold text-center">24/7 Support</div>
            <div className="break-words">We have 24/7 contact support so you </div>
            <div>can contact us whenever you want </div>
            <div className="pb-[50px]">and we will respond it.</div>
          </div>

          <div className="bg-white flex flex-col justify-center items-center px-[30px] rounded-md">
            <div className="bg-[#F1F6F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div className="text-2xl font-bold text-center">Data Privacy</div>
            <div>We make sure your data is safe in our </div>
            <div>database and we will encrypt any </div>
            <div className="pb-[50px]">data you submitted to us.</div>
          </div>

          <div className="bg-white flex flex-col justify-center items-center px-[30px] rounded-md">
            <div className="bg-[#F1F6F5] w-[60px] h-[60px] rounded-full flex justify-center items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
            <div className="text-2xl font-bold text-center">Easy Download</div>
            <div>Zwallet is 100% totally free to use it’s</div>
            <div>now available on Google Play Store </div>
            <div className="pb-[50px]">and App Store.</div>
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
        <div className="flex flex-col items-center pt-[120px]">
          <span className="text-6xl">What Users are <span className="text-[#82C3EC]">Saying.</span></span>
          <div className="text-lg pt-[30px]">We have some great features from the application and it’s totally free </div>
          <div className="text-lg">to use by all users around the world.</div>
        </div>

        {/* Section user review */}
        <div className="flex justify-center items-center mt-[60px]">
          <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center mr-[46px]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </div>

          <div className="bg-white flex flex-col justify-center items-center px-[60px] py-[60px] rounded-md">
            <Image src={require('../assets/profile-2.png')} width="120" height="120" alt="desc" ></Image>
            <div className="font-bold text-[26px]">Alex Hansinburg</div>
            <div className="text-[20px] text-[#56585B]">Designer</div>
            <div>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and </div>
            <div>it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there.</div>
            <div>Just try this app and see the power!”</div>
          </div>

          <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center ml-[46px]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

// export default Home;
export default withAuth(Home)