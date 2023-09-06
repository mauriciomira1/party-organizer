"use client";
import "./styles.css";

interface SnackbarProps {
  textToShow: string;
}

const Snackbar = ({ textToShow }: SnackbarProps) => {
  return (
    <div>
      <figure className="notification">
        <div className="notification_body">
          <div className="notification_description">
            <div className="icon_wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
            {textToShow}
          </div>
        </div>
        <div className="notification_progress"></div>
      </figure>
    </div>
  );
};

export default Snackbar;
