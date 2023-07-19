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
      <div className="flex flex-col text-center justify-center items-center mx-auto w-3/4 py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-bold text-4xl">
          Food For Thought
        </h1>
        <p className="my-2 text-slate-600 text-md md:text-lg text-center w-3/4 md:w-1/2">
          These videos will help you identify the root causes of why we waste
          food, and what we can do to improve the situation.
        </p>
        <p className="text-center p-1 text-xs my-3 w-2/3">
          *Older phones may experience a{" "}
          <span className="text-green-500">green screen error</span>. If this is
          the case, please watch on YouTube directly.*
        </p>
        <div className="w-full aspect-video mb-20 bg-slate-50/50">
          <iframe
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
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
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
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
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
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
            className="rounded-md shadow-lg mx-auto max-w-xs md:max-w-lg"
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
