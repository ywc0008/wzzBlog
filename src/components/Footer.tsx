import SocialIcon from "./social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:ywc0008@naver.com`} size={6} />
          <SocialIcon
            kind="github"
            href={"https://github.com/ywc0008"}
            size={6}
          />
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} /> */}
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
          {/* <SocialIcon kind="x" href={siteMetadata.x} size={6} /> */}
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} /> */}
          {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"></div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`Copyright © ${new Date().getFullYear()} Wzz. All Rights Reserved.`}
        </div>
      </div>
    </footer>
  );
}
