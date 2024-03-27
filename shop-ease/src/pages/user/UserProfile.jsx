import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/profile-card/ProfileCard";
import userData from "../../data/fakeUserData";
import { userProfile } from "../../Services/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigator = useNavigate();
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    try {
      const res = await userProfile();
      const data = res.data;
      if (!data.status) {
        if (data.loginFailed) {
          navigator("/login");
          toast.error(data.message);
        } else {
          navigator(-1);
          toast.error(data.message);
        }
      }
      else{
        setUser(data.user)
        console.log(data)
      }
    } catch (err) {
      navigator(-1);
      toast.error(err);
    }
  };
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <div className="container user-profile-container">
      <div className="container mt-5 pt-5 mx-auto">
        <h2 className="h2">Profile</h2>
        <ProfileCard userDetails={user} />
      </div>
    </div>
  );
}
