import NavBar from "@/common/NavBar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../common/Footer";
import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Contact() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar user={user?.name} />
      <ContactForm />
      <Footer />
    </>
  );
}
