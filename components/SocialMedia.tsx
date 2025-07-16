import React from "react";
import { SiGithub } from "react-icons/si";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="#">
        <SlSocialTwitter size={18} className="text-[#6C47FF]" />
      </a>
      <a href="#">
        <SlSocialFacebook size={18} className="text-[#6C47FF]" />
      </a>
      <a href="#">
        <SiGithub size={18} className="text-[#6C47FF]" />
      </a>
    </div>
  );
};

export default SocialMedia;
