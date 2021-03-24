import { User } from "./user";

export interface Organization {
  organizaton_id: string;
  name: string;
  desc?: string;
  owner_id?: string;
  owner?: User;
}



export const newOrganization = ():Organization => ({
  organizaton_id: "",
  name: "",
  desc: "",
})
