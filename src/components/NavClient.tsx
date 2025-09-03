"use client";

import React, { Fragment, useEffect, useState } from "react";

import { AxiosResponse } from "axios";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mockDataNav } from "@/mockData/mockDataNav";
import { NavDataNavItemType, NavDataType } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import getNavRestApiUrl from "@/utils/getNavRestApiUrl";

import { Button } from "./ui/button";

type NavClientProps = {
  items: { title: string; href?: string; target?: string }[];
};

export default function NavClient({ items: itemsProps }: NavClientProps) {
  const [navItems, setNavItems] = useState<NavDataNavItemType[] | undefined>(
    itemsProps,
  );
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    const callApi = async () => {
      const url = getNavRestApiUrl(pathname);

      let resData;
      try {
        const res: AxiosResponse<NavDataType> = await axiosInstance.get(url);
        resData = res.data;
      } catch (err) {
        // console.warn("NavClient() err: ", err);
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
    const slug = item?.page?.slug;
    return {
      label,
      href: slug || href,
      target,
    };
  });

  return (
    <div className="NavClient w-full_ bg-white_ dark:bg-neutral-900_ fixed top-0 right-0">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {items?.map(({ label, href, target }, idx) => {
          const Cmp: any = href ? Link : Fragment;
          const cmpProps = href ? { href, target } : {};

          return (
            <Cmp key={idx} {...cmpProps}>
              <Button className="mr-2 mb-2" onClick={onBtnClick}>
                {label}
              </Button>
            </Cmp>
          );
        })}
        <Button
          className="mr-2 mb-2 ml-6"
          onClick={() => {
            setTheme("light");
          }}
        >
          light
        </Button>
        <Button
          className="mr-2 mb-2"
          onClick={() => {
            setTheme("dark");
          }}
        >
          dark
        </Button>
        <Button
          className="mr-2 mb-2"
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
