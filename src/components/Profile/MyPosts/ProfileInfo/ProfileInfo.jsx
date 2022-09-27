import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
          alt="profile"
        />
      </div>
      <div className={s.descriptionBlock} >ava + description</div>
    </div>
  );
};

export default ProfileInfo;
