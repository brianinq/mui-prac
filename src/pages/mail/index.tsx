import React from "react";

function index() {
  return (
    <div>
      <form action="mailto:youraddr@domain.tld" lang="en">
        subject:
        <input name="subject" type="text" />
        cc:
        <input name="cc" type="email" />
        bcc:
        <input name="bcc" type="email" />
        body:<textarea name="body"></textarea>send:
        <input type="submit" />
      </form>
    </div>
  );
}

export default index;
