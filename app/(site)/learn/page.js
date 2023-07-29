import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function FoodForThought() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center justify-center items-center mx-auto w-3/4 py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-bold text-4xl">Learn</h1>
        <h1 className=" text-slate-600/70 font-bold text-2xl">
          *Currently In Development*
        </h1>

        <p className="my-2 text-slate-600 text-md md:text-lg text-center w-3/4 md:w-1/2">
          Our 5-step process for improving your food waste behavior. Designed to
          be a practical, holistic approach that users can utilize to see real
          change in their food waste behaviors.
        </p>
        {/* <div className=" w-3/4"> */}
        <Accordion type="single" collapsible className=" w-full md:w-1/2 my-20">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. Prep your Kitchen</AccordionTrigger>
            <AccordionContent className="text-left">
              Our first step will aim to ensure that your kitchen is properly
              equipped to start reducing your personal food waste. This will
              include specific product recommendations, and an interactive
              exploration of how best to utilize your own kitchen tools to
              consume and preserve foods. We will make sure that when there is
              food waste produced, that it is composted, not sent to landfill.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2. Extending Food Life</AccordionTrigger>
            <AccordionContent className="text-left">
              Now that your kitchen is prepared, we will do a deep dive on
              precisely how to extend the life of the items that you purchase on
              a regular basis. We will begin with a basic breakdown of the
              factors that go into preserving food (mainly temperature,
              containment, moisture, and atmosphere) and how to have better
              control over those factors. There will be a heavy focus on
              debunking the myths behind expiration dates you find on your
              products. Instead, you&apos;ll learn how to rely more heavily on
              your own senses to determine if your food is safe for consumption.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. Basic Cooking Skills</AccordionTrigger>
            <AccordionContent className="text-left">
              Now that you&apos;ve learned how to preserve and protect your food
              items, it&apos;s time to learn the basics of cooking those
              deliciously kept ingredients! By the end of this step, you will
              become an expert in preparing what we call the &quot;4 S&apos;s of
              consuming your stuff&quot;: Smoothies, Salads, Soups and
              Stirfries. The focus will be on the logical side of combining
              ingredients, as opposed to learning specific and advanced recipes.
              We want you to be completely comfortable knowing what to cook, no
              matter what you have in the fridge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4. Respecting the Journey</AccordionTrigger>
            <AccordionContent className="text-left">
              At this point, we will take a step back, and attempt to gain a
              newfound respect for the arduous journey your ingredients took to
              make it into your possession. How exactly did that bag of peaches
              make it from the farm to my fridge? Who helped them on their
              journey, and how many resources did it take to get it to me? What
              actually happens to those peaches when I decide to toss them in
              the trash? We&apos;ll answer all these questions and more. Along
              the way, we are confident that you will gain a revitalized respect
              for your food.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>5. Beyond the Kitchen</AccordionTrigger>
            <AccordionContent className="text-left">
              Food waste doesn&apos;t only happen after it arrives at your home.
              A significant amount of food loss occurs on the farm, in
              transport, and at the grocery store levels. Although it may seem
              like consumer behaviors and attitutes are unrelated to these
              losses, our fifth step will attempt to prove otherwise. We will
              show how forces, such as consumer demands for &quot;perfect&quot;
              food, are causing those very losses along the chain.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}
