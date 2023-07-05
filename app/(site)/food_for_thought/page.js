import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function FoodForThought() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center w-3/4 mx-auto mt-6 bg-slate-50/50">
        <h1 className=" text-slate-600 font-semibold mt-4 text-lg md:text-2xl">
          Food For Thought
        </h1>
        <p className="my-2 text-orange-600/80 font-semibold text-sm md:text-base">
          This section is meant for you to spend time learning about the issues
          surrounding food waste, and what efforts are being done to solve the
          problem. These videos will help you identify the root causes of why we
          waste food as a society, and why it is such a moral tragedy.
          You&apos;ll learn about the arduous journey your ingredients took to
          get to you, and what actually happens to those items once you decide
          to toss them into the trash.
        </p>

        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i8xwLWb0lLY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cWC_zDdF74s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6RlxySFrkIM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full aspect-video mb-20 bg-slate-50/50 my-8">
          <iframe
            className="rounded-md shadow-md mx-auto max-w-xs md:max-w-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VgUYTgwPKn8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
