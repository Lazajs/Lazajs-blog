import style from "styles/Lazaro.style";
import Head from "next/head";
import Image from "next/image";
import H from "components/Higlight";
import MyStack from "components/MyStack";
import AnimatedElements from "components/AnimatedElements";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { EXPERIENCE } from "constants/information";
import { getAge } from "lib/getAge";
import { useRouter } from "next/router";
import { Popup } from "components/Popup";
import { OpinionForm } from "components/OpinionForm";
import connect from "db/connect";
import { Opinion } from "db/models/Opinion";
import { type IOpinion } from "types";
import { OpinionList } from "components/OpinionList";
import { MyProjects } from "components/MyProjects";

export default function Lazaro() {
  // const { query } = useRouter()

  return (
    <div className="blog-cta">
      <p>Check out my blog!</p>
      <a
        href="https://blog.lazajs.site"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-button"
      >
        Visit Blog
      </a>
      <style jsx>{`
        .blog-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
          gap: 2rem;
        }

        p {
          font-size: 2.4rem;
          color: #333;
          margin: 0;
        }

        .blog-button {
          padding: 1rem 2rem;
          font-size: 1.8rem;
          color: #333;
          background: transparent;
          border: 2px solid #333;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .blog-button:hover {
          background: #333;
          color: #f5f5dc;
        }
      `}</style>
    </div>
  );
}
