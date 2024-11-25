import FeedbackForm from "./FeedBack/FeedbackForm";
import Heading from "./Heading";
import Logo from "./Logo";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <Heading />
      <FeedbackForm />
    </header>
  );
}
