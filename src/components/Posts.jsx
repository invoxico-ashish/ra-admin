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

export const PostList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show ">
      <ReferenceField source="userId" label="Users" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        disabled
        source="userId"
        reference="users"
      ></ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);
