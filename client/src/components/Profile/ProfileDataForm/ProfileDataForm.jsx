import React from "react";
import { reduxForm } from "redux-form";
import classes from "./ProfileInfo.module.css";

import {
  createField,
  Input,
} from "../../common/FormControls/FormsControls";

const ProfileDataForm = ({ handleSubmit,profile,error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
        {error && <div className={classes.formSummaryError}>{error}</div>}
      </div>
      <div>
        <b>bio:</b> {createField("bio", "bio", [], Input)}
      </div>
      <div>
        <b>age: </b>
        {createField("age", "age", [], Input)}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
                <b>{key}: </b>{createField(key, "contacts."+ key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
