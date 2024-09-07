"use client";

import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Link from "next/link";

type NavClientProps = {
  items: { title: string; slug: string }[];
};

export default function NavClient({ items }: NavClientProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const onCloseNavClose = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className={clsx({
        "!tw-bg-lime-300": true,
        "tw-border-lime-500": true,
        "tw-border-2": true,
        "tw-text-lime-700": true,
        "tw-font-display": true,
      })}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Typography
              className="tw-font-display"
              variant="h6"
              noWrap
              // component="a"
              // href="/"
              sx={{
                mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                // color: "inherit",
                // textDecoration: "none",
              }}
            >
              Home
            </Typography>
          </Link>

          <Box>
            {items?.map(({ title, slug }, idx) => (
              <Link href={slug} key={idx}>
                <Button onClick={onCloseNavClose}>{title}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
