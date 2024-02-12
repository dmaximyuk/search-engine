import "./Header.sass";

import { ChangeEvent, type FC, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "i18nano";
import { useDispatch, useSelector } from "react-redux";

import { Container, SearchInput, Typography } from "uikit";
import { Helmet } from "react-helmet";

import { usersActions, usersSelector } from "store/users";

import type { HeaderProps } from "./Header.interface";

export const Header: FC<HeaderProps> = () => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { users } = useSelector(usersSelector);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputSetFocus = () => {
    inputRef.current?.focus();
  };

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(usersActions.setSearch(e.target.value));
  }, []);

  useEffect(() => {
    if (!inputRef || !inputRef.current) {
      return;
    }

    inputRef.current.focus();

    document.addEventListener("keydown", handleInputSetFocus);

    return () => {
      document.removeEventListener("keydown", handleInputSetFocus);
    };
  }, [inputRef]);

  return (
    <>
      <Helmet>
        <title>{t("app.name")}</title>
      </Helmet>
      <Container.Outer tagName="header">
        <Container.Inner>
          <SearchInput
            ref={inputRef}
            onChange={onChangeInput}
            placeholder={t("header.input.placeholder")}
          />
          <Typography
            className="Header__subtitle"
            tagName="p"
            style={{ marginLeft: 32 }}
          >
            {t("header.foundUsers", { size: users.length.toString() })}
          </Typography>
        </Container.Inner>
      </Container.Outer>
    </>
  );
};
