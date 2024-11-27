import "./Links.scss";

export const Links = () => {
  return (
    <div
      className="flex flex-col gap-4 @container/links-container mt-xl links"
      id="links-container"
    >
      <div className="h-full">
        <a
          href="https://www.dom-hleba.org.ua/"
          target="_blank"
          rel="noopener"
          data-testid="LinkButton"
          className="sc-pFZIQ sc-idOhPF ldGKnQ jsDATa group"
          aria-describedby="profile-spasinnya "
        >
          <div className="relative h-full" data-id="116646831">
            <div
              className="-top[92px] invisible relative block"
              id="116646831"
            ></div>
            <div className="sc-bdfBwQ sc-dIUggk kStcXU kPXwbF group bl">
              Сайт церкви
            </div>
          </div>
        </a>
      </div>
      <div className="h-full">
        <a
          href="https://www.instagram.com/dim_hliba_kr?igsh=bDc1cmhmNXBxaTZu"
          target="_blank"
          rel="noopener"
          data-testid="LinkButton"
          className="sc-pFZIQ sc-idOhPF ldGKnQ jsDATa group"
          aria-describedby="profile-spasinnya "
        >
          <div className="relative h-full" data-id="116647489">
            <div
              className="-top[92px] invisible relative block"
              id="116647489"
            ></div>
            <div
              data-testid="StyledContainer"
              data-link
              className="sc-bdfBwQ sc-dIUggk kStcXU kPXwbF group bl"
            >
              Інстаграм
            </div>
          </div>
        </a>
      </div>
      <div className="h-full">
        <a
          href="https://www.facebook.com/dom.hleba.org"
          target="_blank"
          rel="noopener"
          data-testid="LinkButton"
          className="sc-pFZIQ sc-idOhPF ldGKnQ jsDATa group"
          aria-describedby="profile-spasinnya "
        >
          <div className="relative h-full" data-id="116647435">
            <div
              className="-top[92px] invisible relative block"
              id="116647435"
            ></div>
            <div
              data-testid="StyledContainer"
              data-link
              className="sc-bdfBwQ sc-dIUggk kStcXU kPXwbF group bl"
            >
              Фейсбук
            </div>
          </div>
        </a>
      </div>
      <div className="h-full">
        <a
          href="https://www.youtube.com/@Dim-Hliba"
          target="_blank"
          rel="noopener"
          data-testid="LinkButton"
          className="sc-pFZIQ sc-idOhPF ldGKnQ jsDATa group"
          aria-describedby="profile-spasinnya "
        >
          <div className="relative h-full" data-id="116646725">
            <div
              className="-top[92px] invisible relative block"
              id="116646725"
            ></div>
            <div
              data-testid="StyledContainer"
              data-link
              className="sc-bdfBwQ sc-dIUggk kStcXU kPXwbF group bl"
            >
              Ютюб
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
