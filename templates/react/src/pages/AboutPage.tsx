import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { i18n, t } = useTranslation();
  const locales = ["ru", "en", "uz"];
  return (
    <div className="flex flex-col gap-2 p-2">
      {locales.map((locale) => (
        <div key={locale}>
          <button
            className="rounded-md bg-[#000000] p-2 text-white"
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locale}
          </button>
        </div>
      ))}
      <div>{t("hello")}</div>
    </div>
  );
};

export default AboutPage;
