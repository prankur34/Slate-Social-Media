import React from "react";
import { useSelector } from "react-redux";
import { useUserContext } from "../Context/UserContext";

import "./Bookmarkedpost.css";
function Bookmarkedpost({ postdata }) {
  const { content, image, video, createdAt, pdf } = postdata;

  // const { getUserDetails, getUsers } = useUserContext();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const getUsers = useSelector((state) => state.users.getUsers);
  const { username } = getUserDetails;
  const userdata = getUsers.filter((u) => u.username === username);
  const { avatar, fullName } = userdata[0];

  return (
    <div className="post-container">
      <div class="f-card">
        <div class="header">
          <div class="options">
            <i class="fa fa-chevron-down"></i>
          </div>
          <img class="co-logo" src={avatar} alt="user-avatar" />
          <div class="co-name">
            <p>{fullName}</p>
          </div>
          <div class="time">
            <span href="#">Posted at : {createdAt}</span>
          </div>
        </div>
        <div
          class="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <div class="reference">
          <div class="reference-content">
            {image && (
              <img class="reference-thumb" src={image} alt="uploaded-by-user" />
            )}
            {video && <video class="reference-video" src={video} controls />}
            {pdf && (
              <embed class="reference-pdf" src={pdf} type="application/pdf" />
            )}
          </div>
        </div>
        <div class="social">
          <div class="social-buttons">
            <span class="material-icons postcardmi">bookmark_border</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarkedpost;
