import { BlogPosts } from "app/components/posts";
import CustomLink from "./components/CustomLink";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Gaspar Dolcemascolo
      </h1>
      <h2 className="mb-8 text-gray-400">Software Developer and more...</h2>

      <p className="mb-4">
        I'm a Software Developer at{" "}
        <CustomLink
          href="https://www.falabella.com/falabella-cl"
          target="_blank"
        >
          Falabella
        </CustomLink>
        {", "}
        in the{" "}
        <CustomLink href="https://flexit.cl/" target="_blank">
          Flexit team
        </CustomLink>
        {". "}
        Originally from Argentina, I relocated to Santiago, Chile to pursue new
        challenges.
      </p>

      <p className="mb-4">
        I specialize in React Native and Node.js, but I also have experience
        with Java and a deep passion for Swift and native iOS development . For
        me, code is just a tool—my real job is solving problems and building
        great products.
      </p>

      <p>
        Beyond my work, I’m a co-founder of{" "}
        <CustomLink href="https://chelajs.cl/" target="_blank">
          Chela.js
        </CustomLink>
        {", "}a thriving tech community in Chile where we share knowledge and
        foster innovation.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
