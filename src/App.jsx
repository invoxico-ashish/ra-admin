import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/Users";
import { PostList } from "./components/Posts";
import { PostCreate } from "./components/Posts";
import authProvider from "./Provider/authProvider";

//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
function App() {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} />
        <Resource
          name="posts"
          list={PostList}
          edit={EditGuesser}
          create={PostCreate}
        />
      </Admin>
    </>
  );
}

export default App;
