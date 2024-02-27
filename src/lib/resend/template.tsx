import { formContactType } from "@/types/contact";
import * as React from "react";

type EmailTemplateProps = {
  userConctact: formContactType;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userConctact,
}) => (
  <div>
    <h1>Une nouvelle personne veut vous contactez</h1>

    <div>
      <p>Nom : {userConctact.name}</p>
      <p>Email : {userConctact.email}</p>
      <p>Telephone : {userConctact.phone}</p>
      <p>Message : {userConctact.message}</p>
    </div>
  </div>
);
