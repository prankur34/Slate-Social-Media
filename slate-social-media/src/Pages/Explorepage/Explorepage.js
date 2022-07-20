import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
import Postcard from "../../Components/PostCard-Exp/Postcard";

import Sidebar from "../../Components/Sidebar/Sidebar";
import { getComposedPostFn } from "../../redux/reducers/postsSlice";
import "./Explorepage.css";
function Explorepage() {
  const dispatch = useDispatch();
  const likespost = useSelector((state) => state.posts.likespost);
  const getComposePost = useSelector((state) => state.posts.getComposePost);
  // const { getComposePost, postDispatch } = useComposePostContext();

  useEffect(() => {
    dispatch(getComposedPostFn());
  }, [likespost]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="explore-page-post-card">
        {getComposePost.map((postdata) => {
          return <Postcard postdata={postdata} key={postdata._id} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Explorepage;
