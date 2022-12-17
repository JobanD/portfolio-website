import React from "react";
import { Typography } from "@mui/material";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
