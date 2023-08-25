import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserCreate, UserEdit } from "./components/Users";
import { PostList, PostCreate, PostEdit } from "./components/Posts";
// import { } from "./components/Posts";
import { AppLayout } from "./layouts/AppLayout";
import { authProvider } from "./Provider/authProvider";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";

//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
function App() {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}  layout={AppLayout}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          // recordRepresentation={(user) => user.username} 
          icon={PeopleIcon}
        />
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={ArticleIcon}
        />
      </Admin>
    </>
  );
}

export default App;
