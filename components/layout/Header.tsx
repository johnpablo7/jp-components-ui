import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="min-h-[6vh] max-w-container mx-auto flex items-center justify-between">
      <Image
        src="/images/logo-jp.svg"
        alt="logo"
        width="0"
        height="0"
        className="w-14 h-auto"
        priority
      />

      <ul className="flex flex-row gap-5">
        <Link
          href="https://www.facebook.com/profile.php?id=100009390640332"
          target="_blank"
        >
          <BsFacebook className="text-2xl" />
        </Link>
        <Link href="https://twitter.com/John_Pablo87" target="_blank">
          <FaTwitterSquare className="text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/johnpablo" target="_blank">
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link href="https://github.com/johnpablo7" target="_blank">
          <FaGithub className="text-2xl" />
        </Link>
      </ul>
    </div>
  );
};
