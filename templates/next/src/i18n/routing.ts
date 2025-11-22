import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { i18nConfig } from "./config";

export const routing = defineRouting(i18nConfig);

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
  createNavigation(routing);
