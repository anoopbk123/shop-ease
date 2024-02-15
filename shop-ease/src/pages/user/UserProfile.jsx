import React from "react";
import ProfileCard from "../../components/profile-card/ProfileCard";
import fakeUserData from '../../data/fakeUserData'
import userData from "../../data/fakeUserData";

export default function UserProfile() {
  const user = userData[0]
  return (
    <div className="container user-profile-container">
      <div className="container mt-5 pt-5 mx-auto">
        <h2 className="h2">Profile</h2>
        <ProfileCard userDetails={user} />
      </div>
    </div>
  );
}
