import React from "react";

import {
  List,
  TextInput,
  SimpleForm,
  Edit,
  Create,
  ReferenceInput,
  SelectInput,
  Datagrid,
  ReferenceField,
  TextField,
  EmailField,
  EditButton,
  EditGuesser,
} from "react-admin";
// import CustomEmailField from "./CustomEmailField";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid
      rowClick="edit"
      // sx={{
      //   ".RaDatagrid-rowEven": {
      //     backgroundColor: "lavender",
      //   },
      //   ".RaDatagrid-headerCell": {
      //     backgroundColor: "MistyRose",
      //   },
      // }}
    >
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="Street Add " />
      <TextField source="phone" sortable={false} />
      <TextField source="website" />
      <TextField source="company.name" label="Company Name" />
      <EditButton />
    </Datagrid>
  </List>
);
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        disabled
        source="userId"
        // reference="users"
      ></ReferenceInput>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <EmailField source="email" />
      <EmailField source="address.street" />
      <EmailField source="phone " />
    </SimpleForm>
  </Edit>
);
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" label="Street Add " />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" label="Company Name" />
    </SimpleForm>
  </Create>
);
