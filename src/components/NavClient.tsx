"use client";

import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mockDataNav } from "@/mockData/mockDataNav";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

type NavClientProps = {
  items: { title: string; href?: string; target?: string }[];
};

export default function NavClient({ items: itemsProps }: NavClientProps) {
  const [navItems, setNavItems] = useState<any[] | undefined>(itemsProps);
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    const callApi = async () => {
      const url = getNavRestApiUrl(pathname);

      let resData: any = null;
      try {
        const res: any = await axiosInstance.get(url);
        resData = res.data;
      } catch (err: any) {
        console.warn("NavClient() err: ", err);
        resData = mockDataNav;
      }

      const resData2 = resData?.data;
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
    const slug = item?.page?.slug || "";

    return {
      title: label,
      href: slug || href || "/",
      target,
    };
  });

  return (
    <div className="NavClient tw:fixed tw:top-0 tw:w-full tw:bg-white tw:dark:bg-neutral-900">
      <div className="tw:max-w-6xl tw:mx-auto tw:px-4 tw:py-4">
        {items?.map(({ title, href = "", target }, idx) => (
          <Link key={idx} href={href} target={target}>
            <Button
              variant="outlined"
              className="tw:mb-2 tw:mr-2"
              onClick={onBtnClick}
            >
              {title}
            </Button>
          </Link>
        ))}
        <Button
          variant="outlined"
          className="tw:mb-2 tw:mr-2 tw:ml-6"
          onClick={() => {
            setTheme("light");
          }}
        >
          light
        </Button>
        <Button
          variant="outlined"
          className="tw:mb-2 tw:mr-2"
          onClick={() => {
            setTheme("dark");
          }}
        >
          dark
        </Button>
        <Button
          variant="outlined"
          className="tw:mb-2 tw:mr-2"
          onClick={() => {
            setTheme("system");
          }}
        >
          system
        </Button>
      </div>
    </div>
  );
}
