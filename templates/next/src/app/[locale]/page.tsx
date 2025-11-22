import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher";
import { getTranslations } from "next-intl/server";

const HomePage = async () => {
  const t = await getTranslations("");
  return (
    <div>
      <ThemeSwitcher />
      <p>{t("hello")}</p>
      <Link href="/category">CategoryPage</Link>
      <LanguageSwitcher />
    </div>
  );
};

export default HomePage;
