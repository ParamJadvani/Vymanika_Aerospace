import React from "react";
import Navbar from "/src/components/Navbar";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Frame 188 copy.png";
import BlogBanner from "../components/BlogBanner";

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <BlogBanner />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default Blog;
