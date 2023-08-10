import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function FoodForThought() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center justify-center items-center mx-auto w-3/4 py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-quicksandBold text-4xl">
          Learn
        </h1>
        <h2 className=" text-slate-600/70 font-quicksandBold text-lg">
          *Currently In Development*
        </h2>

        <p className="my-2 text-slate-600 text-md text-center w-full md:w-1/2 font-quicksandBold">
          5-step process for wasting less food. Designed to be a practical,
          holistic program to gain real, permanent change in your food waste
          behaviors. Become your own food waste therapist.
        </p>
        <Accordion
          type="single"
          collapsible
          className=" w-full md:w-1/2 mb-20 mt-16"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" font-quicksandBold">
              1. Kitchen Prep
            </AccordionTrigger>
            <AccordionContent className="text-left font-quicksand">
              Our first step will aim to ensure that your kitchen is properly
              equipped to start reducing your personal food waste. This will
              include specific product recommendations, and an interactive
              exploration of how to best utilize your kitchen to consume and
              preserve foods. We&apos;ll make sure that when there is food waste
              produced, that it is seperated and composted, instead of sending
              to landfill.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-quicksandBold">
              2. Extending Food Life
            </AccordionTrigger>
            <AccordionContent className="text-left font-quicksand">
              Now that your kitchen is prepped, we&apos;ll do a deep dive on how
              to extend the life of the items that you purchase on a regular
              basis. It begins with a basic breakdown of the factors that go
              into preserving food (mainly temperature, containment, moisture,
              and atmosphere) and how to have better control over those factors.
              There will be a heavy focus on clarifying the confusion behind
              expiration dates you find on your products. Instead, you&apos;ll
              learn how to rely more heavily on your own senses to determine if
              your food is safe for consumption.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-quicksandBold">
              3. Basic Cooking Skills
            </AccordionTrigger>
            <AccordionContent className="text-left font-quicksand">
              Now that you&apos;ve learned how to preserve and protect your
              food, it&apos;s time to learn the basics of cooking those
              delicious ingredients! By the end of this step, you will become
              confident in preparing what we call the &quot;4 S&apos;s of
              consuming your stuff&quot;: Smoothies, Salads, Soups and Stir
              fries. The focus here will be on the logical side of combining
              ingredients, as opposed to learning specific and advanced recipes.
              We want you to be completely comfortable knowing how to cook, no
              matter what items you may have in your fridge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-quicksandBold">
              4. Respecting the Journey
            </AccordionTrigger>
            <AccordionContent className="text-left font-quicksand">
              At this point, we will take a step back, and attempt to gain
              respect for the arduous journey your ingredients took to make it
              into your possession. How exactly did that bag of peaches make it
              from the farm to my fridge? Who helped them on their journey, and
              what resources did it require to get it to me? What actually
              happens to those peaches when I decide to toss them in the trash?
              We&apos;ll answer all these questions and more. Along the way, you
              will gain a revitalized respect for your food.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-quicksandBold">
              5. Beyond the Kitchen
            </AccordionTrigger>
            <AccordionContent className="text-left font-quicksand">
              Food waste doesn&apos;t only happen after it arrives at your home.
              A significant amount of food is lost on the farm, in transport,
              and at the grocery store levels. Although it may seem like
              consumer behaviors and attitudes are unrelated to these losses,
              our fifth step will attempt to prove otherwise. We will show how
              certain forces, such as consumer demands for &quot;perfect&quot;
              fruits and vegetables, are directly causing those very losses
              along the supply chain. By the conclusion of the fifth and final
              step, you will hopefully have the tools to create real, lasting
              improvements in your food waste behavior.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  )
}
