import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "./components/ui/aceternity-3d-card";
import { LineShadowText } from "./components/ui/magic-line-shadow-text";
import { Cover } from "./components/ui/aceternity-cover";
import { TextAnimationY } from "./components/ui/magic-text-animationY";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
export default function Home() {
  return (
    <div className="bg-[#d8c9b5] min-h-screen">
      <header className=" sm:flex justify-around fixed top-0 left-0 w-full hidden p-6 bg-white/20 backdrop-blur-[2px] border-b border-white/30 z-50 ">
        <div className="font-extrabold text-2xl text-shadow-zinc-400 text-shadow-sm">
          Lrz666
        </div>
        <div className="flex gap-4">
          <a href="#about" className="font-bold text-2xl text-shadow-zinc-400 text-shadow-sm">
            About
          </a>
          <a href="#project" className="font-bold text-2xl text-shadow-zinc-400 text-shadow-sm">
            Projects
          </a>
          <a className="font-bold text-2xl text-shadow-zinc-400 text-shadow-sm">
            Skills
          </a>
        </div>
        <Link
          href="https://github.com/lrz6666"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-2xl font-extrabold"
        >
          <FaGithub size={24} />
          <span className="text-shadow-zinc-400 text-shadow-sm">lrz6666</span>
        </Link>
      </header>
      <main>
        <section id="about">
          <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <div className="h-[5rem]">
              <TextAnimationY
                words={[
                  "This is a personal web",
                  "Yes, I exist on the internet... \n🌐✨ for better or worse",
                ]}
                duration={3000}
                className=" text-2xl text-shadow-black text-shadow-md  sm:text-3xl lg:text-[5rem] font-extrabold text-[#cb6c5b] whitespace-pre-line"
              />
            </div>

            <CardContainer containerClassName="" className=" ">
              <CardBody className="flex flex-col  justify-center items-center ">
                <CardItem className="flex flex-col p-4 md:w-[30rem] md:p-10 justify-center items-center gap-10 m-10  bg-yellow-50/80 shadow-2xl shadow-black rounded-4xl border ">
                  {/* 标题部分 */}
                  <CardItem translateZ="100" className="text-3xl font-bold">
                    This is&nbsp;
                    <LineShadowText
                      as="h1"
                      shadowColor="#cb6c5b" // 粉色阴影
                      className="text-5xl font-extrabold mb-8"
                    >
                      Lrz666
                    </LineShadowText>
                  </CardItem>

                  {/* 图片部分 */}
                  <CardItem
                    translateZ="100"
                    rotateY={5}
                    className="w-1/2 rounded-lg m-auto shadow-2xl shadow-black"
                  >
                    <img
                      src="/assets/lrz666.jpg"
                      className="w-full rounded-lg"
                    />
                  </CardItem>

                  {/* 底部文字部分 */}
                  <CardItem
                    translateZ="100"
                    className="text-2xl font-extrabold flex justify-center items-center"
                  >
                    I'm A&nbsp;<Cover className="text-xl">WEB DEVELOPER</Cover>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </section>
        <section id="project" >
          <div className=" flex flex-col justify-center items-center overflow-hidden gap-[8rem]">
            <h1 className="text-2xl text-shadow-black text-shadow-md  sm:text-3xl lg:text-[5rem] font-extrabold text-[#cb6c5b] whitespace-pre-line">
              Projects
            </h1>
            <a href="https://lrz666.xyz" target="_blank">
              <div className="flex flex-col p-2 w-[20rem] h-[30rem] gap-4 md:w-[30rem] md:h-[45rem] md:gap-8 md:p-6 lg:w-[40rem] lg:h-[53rem] lg:gap-8 lg:p-8   items-center shadow-xl shadow-black/50 border-gray-400 rounded-xl border hover:scale-110 duration-300">
                <img src="/assets/see-u-soon.png" className="rounded-xl "></img>
                <p className="text-[1.5rem] md:text-[2rem] font-bold hover:scale-110 duration-300">See-U-Soon</p>
                <div className="flex gap-[1.2rem]">
                  <RiJavascriptFill className="md:text-[3.5rem] w-10 h-10 m-auto fi-brands-js text-5xl  text-[#cb6c5b] hover:text-gray-700 hover:scale-110 duration-300" />
                  <FaReact className="md:text-[3.5rem] w-10 h-10 m-auto fi-brands-js text-5xl  text-[#cb6c5b] hover:text-gray-700 hover:scale-110 duration-300" />
                  <RiTailwindCssFill className="md:text-[3.5rem] w-10 h-10 m-auto fi-brands-js text-5xl  text-[#cb6c5b] hover:text-gray-700 hover:scale-110 duration-300" />
                </div>
                <div className="text-md md:text-lg lg:text-2xl">
                  <strong>See-U-Soon</strong>是一个网页APP🚀
                </div>
                <div className="text-md md:text-lg lg:text-2xl">
                  可以帮助身处异地的人选择见面的地点
                </div>
                <div className="text-md md:text-lg lg:text-2xl">距离不再遥远✨ 见面如此简单🧸 </div>
                <div className="flex gap-5  md:gap-15">
                  <a href="https://lrz666.xyz" target="_blank">
                  <button className="md:text-lg md:rounded-xl lg:text-2xl 2xl:text-4xl active:scale-90 cursor-pointer bg-[#cb6c5b] p-1 rounded-md text-md font-bold text-white hover:scale-110 hover:bg-gray-700 duration-300">Live Demo</button>
                  </a>
                  <a href="https://github.com/lrz6666/see-u-soon" target="_blank">
                  <button className="md:text-lg md:rounded-xl lg:text-2xl 2xl:text-4xl active:scale-90 cursor-pointer bg-[#cb6c5b] p-1 rounded-md text-md font-bold text-white hover:scale-110 hover:bg-gray-700 duration-300">GitHub Repo</button>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section id="skills" className="">
          <div className=" flex flex-col justify-around items-center ">
            
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
