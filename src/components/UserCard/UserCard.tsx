import "./UserCard.sass";

import { type FC } from "react";
import { useUser } from "hooks";

import { format } from "date-fns";

import { Container, Placement, Typography } from "uikit";

import type { UserCardProps } from "./UserCard.interface";
import { useTranslation } from "i18nano";

export const UserCard: FC<UserCardProps> = (props) => {
  const t = useTranslation();
  const user = useUser(props.uid);

  if (!user) {
    return <></>;
  }

  return (
    <Container.Wrapper
      className="UserCard"
      onClick={() => {
        const url = `https://user.ru/${user.name.toLowerCase()}`;
        window.open(url, "_blank");
      }}
    >
      <Typography tagName="h2">{user.name}</Typography>

      <Placement.Row className="UserCard__placement">
        {user.car?.model && (
          <Typography tagName="span" isDescription isTransparent>
            {t("home.user.card.description.car.model", {
              model: user.car.model,
            })}
          </Typography>
        )}

        {user.car?.make && (
          <Typography tagName="span" isDescription isTransparent>
            {t("home.user.card.description.car.make", {
              make: user.car.make,
            })}
          </Typography>
        )}

        <Typography tagName="span" isDescription isTransparent>
          {t("home.user.card.description.activated", {
            status: String(user.active),
          })}
        </Typography>

        <Typography tagName="span" isDescription isTransparent>
          {t("home.user.card.description.created", {
            date: format(new Date(user.createdAt), "dd/MM/yy"),
          })}
        </Typography>
      </Placement.Row>
    </Container.Wrapper>
  );
};
