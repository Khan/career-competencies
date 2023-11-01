import "./profile.css";
import type { Track, Level } from "../../data";
import {Levels, Tracks} from "../../data"
import {useDataDispatch} from "../../context";
import Select from 'react-select';

import {useState} from "react";
import type {User} from "../../context";
// import {useLoaderData} from "react-router-dom";

export const Profile = () => {
    const trackOptions: {value: Track, label: Track}[] = Tracks.map(chooseTrack);
    function chooseTrack(track: Track) {
        return {value: track, label: track}
    }

    const levelOptions: {value: Level, label: Level}[] = Levels.map(chooseLevel);
    function chooseLevel(level: Level) {
        return {value: level, label: level}
    }

    // const { level } = useLoaderData() as { level: Level };
    // const { track } = useLoaderData() as { track: Track };

    // const { user } = useData();
    // const userDataState = user ?? {};

    const dispatch = useDataDispatch();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [track, setTrack] = useState<Track>(Tracks[0])
    const [declaredLevel, setDeclaredLevel] = useState<Level>(Levels[0])

    const profileData: User = {
        firstName,
        lastName,
        email,
        track,
        declaredLevel
    }

    function handleSave(event: { preventDefault: () => void; }) {
        event.preventDefault();
        dispatch({
            type: "user-data-updated",
            data: profileData,
        })

    }
  return (
      <form id="profile-form">
        <div>
          <label className="form__label" htmlFor="firstName">First Name</label>
          <input
              className="form__input"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="lastName">Last Name</label>
          <input
              className="form__input"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
      <div>
          <label className="form__label" htmlFor="email">Email</label>
          <input
              className="form__input"
              id="email"
              type="email"
              placeholder="@khanacademy.org"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}/>
      </div>
      <div>
          <label className="form__label" htmlFor="track">Career Track</label>
          <Select
              className="form__dropdown"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              name="careerTrack"
              defaultValue={{value: track, label: track}}
              options={trackOptions}
              onChange={(e) => {e ? setTrack(e.value) : null}}
          />
      </div>
      <div>
          <label className="form__label" htmlFor="level">Current Level</label>
          <Select
              className="form__dropdown"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              name="careerTrack"
              defaultValue={{value: declaredLevel, label: declaredLevel}}
              options={levelOptions}
              onChange={(e) => {e ? setDeclaredLevel(e.value) : null}}
          />
      </div>
        <button type="submit" id="form__save-button" onSubmit={handleSave}>Save</button>
      </form>
  );
};
