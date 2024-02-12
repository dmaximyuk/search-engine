import "./Home.sass";

import { type FC } from "react";
import { useSelector } from "react-redux";

import { Container, Placement } from "uikit";

import { usersSelector } from "store/users";

import type { HomeProps } from "./Home.interface";
import { UserCard } from "components";

export const Home: FC<HomeProps> = () => {
  const { users, searchText } = useSelector(usersSelector);

  const filteredUsers = users.filter((item) => {
    if (!searchText) return users;
    const lowerCaseSearchText = searchText.toLowerCase();
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseModel = item.car?.model?.toLowerCase() || "";
    const lowerCaseMake = item.car?.make?.toLowerCase() || "";

    return (
      lowerCaseName.includes(lowerCaseSearchText) ||
      lowerCaseModel.includes(lowerCaseSearchText) ||
      lowerCaseMake.includes(lowerCaseSearchText)
    );
  });

  return (
    <Container.Outer className="Home">
      <Container.Inner className="Home__content">
        <Placement.Column padding={20}>
          {filteredUsers.map((item) => {
            return <UserCard key={`user-card-${item.uid}`} uid={item.uid} />;
          })}
        </Placement.Column>
      </Container.Inner>
    </Container.Outer>
  );
};
