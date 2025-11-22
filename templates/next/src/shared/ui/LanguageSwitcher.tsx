"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn-ui/dropdown-menu";
import { Button } from "../shadcn-ui/button";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

const LOCALES = [
  { id: "uz", name: "UZB" },
  { id: "ru", name: "RUS" },
  { id: "en", name: "ENG" },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {LOCALES.find((l) => l.id === locale)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {LOCALES.map((locale) => (
          <Link locale={locale.id} key={locale.id} href={pathname}>
            <DropdownMenuItem className="uppercase" key={locale.id}>
              {locale.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
