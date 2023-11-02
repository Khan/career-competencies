import "./profile.css";
import { Tracks } from "../../data";
import { useData, useDataDispatch } from "../../context";

import { useState } from "react";
import type { ChangeEvent } from "react";
import type { User } from "../../context";

export const Profile = () => {
  const { user } = useData();

  const dispatch = useDataDispatch();

  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [track, setTrack] = useState<string>(user?.track?.key ?? Tracks[0].key);
  const [declaredLevel, setDeclaredLevel] = useState<string>(
    user?.declaredLevel ?? "",
  );

  const profileData: User = {
    firstName,
    lastName,
    email,
    track: Tracks.find((t) => t.key === track),
    declaredLevel,
  };

  function handleSave() {
    dispatch({
      type: "user-data-updated",
      data: profileData,
    });
  }
  return (
    <form onSubmit={handleSave} id="profile-form">
      <div className="">
        <label className="form__label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form__input"
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="form__label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form__input"
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          id="email"
          type="email"
          placeholder="@khanacademy.org"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="form__label" htmlFor="track">
          Career Track
        </label>
        <select
          className="form__input"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setTrack(e.target.value);
          }}
          value={track}
        >
          {Tracks.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="form__label" htmlFor="level">
          Current Level
        </label>
        <input
          className="form__input"
          id="currentLevel"
          type="text"
          value={declaredLevel}
          onChange={(e) => {
            setDeclaredLevel(e.target.value);
          }}
        />
      </div>
      <button type="submit" id="form__save-button">
        Save
      </button>
    </form>
  );
};
