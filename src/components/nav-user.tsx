"use client";

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogin,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type Props = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

export function NavUser({ user }: Props) {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarMenu className="NavUser">
      <SidebarMenuItem>
        {!user && (
          <Link
            href={`/auth/signin?callbackurl=${pathname}`}
            className="w-full"
          >
            <Button className="mb-2 w-full" variant="default">
              <IconLogin />
              Sign In
            </Button>
          </Link>
        )}

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="focus-visible:ring-0">
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                  <AvatarFallback className="rounded-lg">FB</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user?.email}
                  </span>
                </div>
                <IconDotsVertical className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={user?.image || ""}
                      alt={user?.name || ""}
                    />
                    <AvatarFallback className="rounded-lg">FB</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconUserCircle />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconCreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconNotification />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <IconLogout />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
