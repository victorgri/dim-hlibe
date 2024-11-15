import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="flex flex-col items-center">
        <div className="mb-4" id="profile-picture">
          <img
            className="rounded-full object-contain header__logo"
            src="images/logo_white UKR copy.webp"
            alt="logo"
            role="presentation"
          />
        </div>
        <div className="mx-3 flex max-w-full items-center" id="profile-title">
          <h1
            className="text-ellipsis text-balance text-center text-lg font-[700] leading-[1.5] text-bodyText"
            id="profile-spasinnya"
          >
            Дім Хліба
          </h1>
        </div>
        <div className="px-6 mt-[2px]" id="profile-description">
          <h2 className="text-center text-profileDescription text-profileDescriptionText leading-profileDescription font-profileDescription text-balance">
            м. Кривий Ріг, вул. Ватутіна, 33А
          </h2>
        </div>
      </div>
    </header>
  );
};
