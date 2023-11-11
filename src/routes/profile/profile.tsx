import "./profile.css";
import { Expectations, Tracks } from "../../data";
import { useData, useDataDispatch } from "../../context";

import { useState, useCallback, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";
import type { User } from "../../context";

import type {
  unstable_Blocker as Blocker,
  unstable_BlockerFunction as BlockerFn,
} from "react-router-dom";
import { unstable_useBlocker as useBlocker } from "react-router-dom";

export const Profile = () => {
  const { user } = useData();
  const { track } = user ?? {};

  const shouldBlock = useCallback<BlockerFn>(
    ({ currentLocation, nextLocation }) =>
      !track &&
      "/profile" === currentLocation.pathname &&
      "/profile" !== nextLocation.pathname,
    [track],
  );
  const blocker = useBlocker(shouldBlock);

  return (
    <div id="profile">
      {blocker && <Status blocker={blocker} />}
      <Form />
    </div>
  );
};

const Form = () => {
  const { user } = useData();

  const dispatch = useDataDispatch();

  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [track, setTrack] = useState(user?.track?.key ?? "");
  const [declaredExpectation, setExpectation] = useState<string>(
    user?.currentExpectation?.key ?? Expectations[0].key,
  );

  const profileData: User = {
    firstName,
    lastName,
    email,
    track: Tracks.find((t) => t.key === track),
    currentExpectation: Expectations.find((e) => e.key === declaredExpectation),
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
        <label className="form__label" htmlFor="expectation">
          Current Expectation
        </label>
        <select
          id="expectation"
          className="form__input"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setExpectation(e.target.value);
          }}
          value={declaredExpectation}
        >
          {Expectations.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="form__label" htmlFor="track">
          Career Track*
        </label>
        <select
          id="track"
          className="form__input"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setTrack(e.target.value);
          }}
          value={track}
          required
          aria-required
        >
          <option value="" disabled />
          {Tracks.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
        <em style={{ fontSize: "small" }}>
          * Required to see competencies for your function.
        </em>
      </div>
      <button type="submit" id="form__save-button" className="profile-btn">
        Save
      </button>
    </form>
  );
};

const Status = ({ blocker }: { blocker: Blocker }) => {
  const msg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msg.current && blocker.state === "blocked") {
      msg.current?.scrollIntoView();
    }
  }, [blocker.state]);

  switch (blocker.state) {
    case "blocked":
      return (
        <div id="blocker-msg" ref={msg}>
          <span>
            You have not selected a track. You will not be able to see your
            functional competencies. Select &quot;Other&quot; if you are not
            sure.
          </span>
          <div id="blocker-btns">
            <button
              className="profile-btn"
              onClick={() => {
                blocker.proceed?.();
              }}
            >
              Leave
            </button>
            <button
              className="profile-btn"
              onClick={() => {
                blocker.reset?.();
              }}
            >
              Stay
            </button>
          </div>
        </div>
      );
    case "proceeding":
      return <span>Proceeding through blocked navigation</span>;
    default:
      return (
        <span>
          Select a track to view your functional competencies. All other
          information is optional.
        </span>
      );
  }
};
