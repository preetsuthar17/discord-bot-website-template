import Link from "next/link";
import Image from "next/image";

import botOnlineStatus from "../utils/images/botStatus.svg";

const Showcase = () => {
  return (
    <>
      <main className="showcase">
        <h1 className="showcase-header h-color">BOT</h1>
        <h2 className="showcase-header-text h-color">
          The only discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your needs in your discord server.
        </p>
        <Image
          src={botOnlineStatus}
          width={40}
          height={40}
          alt="online-status"
          className="onlineStatus"
        />{" "}
        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Showcase;
