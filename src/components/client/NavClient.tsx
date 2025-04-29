"use client";

import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { mockDataNav } from "@/components/server/Nav";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

type NavClientProps = {
  items: { title: string; href?: string; target?: string }[];
};

export default function NavClient({ items: itemsProps }: NavClientProps) {
  const [navItems, setNavItems] = useState<any[] | undefined>(itemsProps);
  const pathname = usePathname();

  useEffect(() => {
    const callApi = async () => {
      const url = getNavRestApiUrl(pathname);

      const res: any = await axios.get(url);
      const resData = res.data;
      // const resData: any = mockDataNav;

      // const resData2 = resData?.data?.attributes; // strapi v4
      const resData2 = resData?.data; // strapi v5
      const items = resData2?.navigation?.items;
      setNavItems(items);
    };

    callApi();
  }, [pathname]);

  const onBtnClick = () => {
    // console.log("onBtnClick() ");
  };

  const items = navItems?.map?.((item: any) => {
    const { label, href, target } = item;
    const slug = item?.page?.data?.attributes?.slug || "";

    return {
      title: label,
      href: slug || href || "/",
      target,
    };
  });

  // console.log("NavClient() itemsProps: ", itemsProps);

  return (
    <AppBar
      className={clsx({
        "tw:text-lime-700": true,
        // "tw:bg-lime-100": true,
        // "tw:border-lime-500": true,
        // "tw:border-2": true,
        // "tw:font-display": true,
      })}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            {items?.map(({ title, href = "", target }, idx) => (
              <Link key={idx} href={href} target={target}>
                <Button
                  variant="outlined"
                  // className="tw:text-lime-700"
                  onClick={onBtnClick}
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
