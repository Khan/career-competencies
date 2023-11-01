import "./profile.css";
import type { Track, Level } from "../../data";
import { Levels, Tracks } from "../../data";
import { useData, useDataDispatch } from "../../context";
import Select from "react-select";

import { useState } from "react";
import type { User } from "../../context";

export const Profile = () => {
  const trackOptions: { value: Track; label: Track }[] =
    Tracks.map(chooseTrack);
  function chooseTrack(track: Track) {
    return { value: track, label: track };
  }

  const levelOptions: { value: Level; label: Level }[] =
    Levels.map(chooseLevel);
  function chooseLevel(level: Level) {
    return { value: level, label: level };
  }

  const { user } = useData();

  const firstNameState = user?.firstName;
  const lastNameState = user?.lastName;
  const emailState = user?.email;
  const trackState = user?.track;
  const levelState = user?.declaredLevel;

  const dispatch = useDataDispatch();

  const [firstName, setFirstName] = useState(firstNameState ?? "");
  const [lastName, setLastName] = useState(lastNameState ?? "");
  const [email, setEmail] = useState(emailState ?? "");
  const [track, setTrack] = useState<Track|undefined>(trackState);
  const [declaredLevel, setDeclaredLevel] = useState<Level|undefined>(levelState);

  const profileData: User = {
    firstName,
    lastName,
    email,
    track,
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
      <div>
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
        <Select
          className="form__dropdown"
          name="careerTrack"
          value={{ value: track, label: track }}
          options={trackOptions}
          defaultValue={null}
          onChange={(e) => {
            e ? setTrack(e.value) : null;
          }}
        />
      </div>
      <div>
        <label className="form__label" htmlFor="level">
          Current Level
        </label>
        <Select
          className="form__dropdown"
          name="currentLevel"
          value={{
            value: declaredLevel,
            label: declaredLevel,
          }}
          options={levelOptions}
          onChange={(e) => {
            e ? setDeclaredLevel(e.value) : null;
          }}
        />
      </div>
      <button type="submit" id="form__save-button">
        Save
      </button>
    </form>
  );
};
