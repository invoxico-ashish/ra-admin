import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
// import CustomEmailField from "./CustomEmailField";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="Street Add " />
      <TextField source="phone" sortable={false} />
      <TextField source="website" />
      <TextField source="company.name" label="Company Name" />
    </Datagrid>
  </List>
);
