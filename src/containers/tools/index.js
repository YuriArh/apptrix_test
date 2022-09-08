import React, { useCallback, useMemo } from "react";
import { useStore, useSelector } from "react-redux";
import LayoutFlex from "../../components/layout-flex";
import { cn as bem } from "@bem-react/classname";
import { Link } from "react-router-dom";

function ToolsContainer() {
  const cn = bem("Menu");
  const select = useSelector((state) => ({}));

  const callbacks = {};

  const options = {
    menu: useMemo(() => [{ key: 1, title: "пользователи", link: "/" }], []),
  };

  return (
    <LayoutFlex flex="between" indent="big">
      {options.menu.map((item) => (
        <li key={item.key} className={cn("item")}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </LayoutFlex>
  );
}

export default React.memo(ToolsContainer);
